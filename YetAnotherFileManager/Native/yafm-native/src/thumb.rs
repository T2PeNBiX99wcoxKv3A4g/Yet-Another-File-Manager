//! Thumbnails for the picture formats Windows has no thumbnail provider for.
//!
//! The shell covers the common ones; a PSD from Photoshop, a TGA from a texture tool or a DDS from
//! a game has to be decoded here. A PSD is not decoded layer by layer - the format lets the writer
//! store a flattened preview for exactly this purpose, and Photoshop, Krita and most exporters do,
//! so the embedded JPEG is what the tile shows.

use std::io::Cursor;
use std::path::Path;

use image::{DynamicImage, ImageFormat, ImageReader};

/// How many pixels a decode may produce before it is refused; a game texture atlas or a 16-bit EXR
/// can be far larger than a tile ever needs.
const MAX_PIXELS: u64 = 120_000_000;

/// A file larger than this is not worth reading into memory for a thumbnail.
const MAX_FILE_BYTES: u64 = 512 * 1024 * 1024;

/// Renders a PNG thumbnail of `path` that fits in `size` pixels.
///
/// Returns `0` and a buffer in `*out_ptr`/`*out_len` on success, a negative value when the file is
/// not one of the formats here or could not be decoded. The caller owns the buffer and must hand
/// it back to [`crate::yafm_free`].
#[no_mangle]
pub unsafe extern "C" fn yafm_thumbnail(
    path: *const u16,
    path_len: usize,
    size: u32,
    out_ptr: *mut *mut u8,
    out_len: *mut usize,
) -> i32 {
    if path.is_null() || out_ptr.is_null() || out_len.is_null() {
        return -1;
    }

    let path = String::from_utf16_lossy(std::slice::from_raw_parts(path, path_len));
    if path.is_empty() {
        return -2;
    }

    let size = size.clamp(16, 1024);
    let Some(png) = render(&path, size) else {
        return -4;
    };

    let mut boxed = png.into_boxed_slice();
    *out_ptr = boxed.as_mut_ptr();
    *out_len = boxed.len();
    std::mem::forget(boxed);

    0
}

fn render(path: &str, size: u32) -> Option<Vec<u8>> {
    let extension = Path::new(path).extension()?.to_str()?.to_ascii_lowercase();
    let metadata = std::fs::metadata(path).ok()?;
    if metadata.len() > MAX_FILE_BYTES {
        return None;
    }

    let bytes = std::fs::read(path).ok()?;

    let image = match extension.as_str() {
        "psd" | "psb" => psd_preview(&bytes),
        "tga" => decode(&bytes, ImageFormat::Tga),
        "dds" => decode(&bytes, ImageFormat::Dds),
        "hdr" => decode(&bytes, ImageFormat::Hdr).map(tone_mapped),
        "exr" => decode(&bytes, ImageFormat::OpenExr).map(tone_mapped),
        _ => None,
    }?;

    let thumbnail = image.thumbnail(size, size);

    let mut png = Vec::new();
    thumbnail
        .write_to(&mut Cursor::new(&mut png), ImageFormat::Png)
        .ok()?;

    Some(png)
}

fn decode(bytes: &[u8], format: ImageFormat) -> Option<DynamicImage> {
    // A format whose header the reader cannot measure is not a reason to give up: the file size cap
    // above is what keeps a decode from swallowing the machine.
    if let Ok((width, height)) = ImageReader::with_format(Cursor::new(bytes), format).into_dimensions() {
        if u64::from(width) * u64::from(height) > MAX_PIXELS {
            return None;
        }
    }

    // The whole buffer is decoded in one go: the reader cannot seek the HDR and EXR streams, so a
    // decoded image is the only thing that works for every format here.
    image::load_from_memory_with_format(bytes, format).ok()
}

/// HDR and EXR hold values far above white; a Reinhard curve brings them into a picture a tile can
/// show instead of a white blob.
fn tone_mapped(image: DynamicImage) -> DynamicImage {
    let mut rgb = image.to_rgb32f();

    for pixel in rgb.pixels_mut() {
        for channel in &mut pixel.0 {
            let value = channel.max(0.0);
            *channel = value / (1.0 + value);
        }
    }

    // PNG holds eight-bit channels, so the curve is applied before the conversion.
    DynamicImage::ImageRgb32F(rgb).to_rgb8().into()
}

/// The picture a PSD shows in a tile: the flattened preview the writer embedded when there is
/// one, and otherwise the merged image data every PSD carries at its end.
fn psd_preview(bytes: &[u8]) -> Option<DynamicImage> {
    psd_thumbnail(bytes)
        .and_then(|jpeg| decode(jpeg, ImageFormat::Jpeg))
        .or_else(|| psd_composite(bytes))
}

/// The merged image of a PSD: every channel is a plane of the picture, stored as is or packed.
///
/// The compression method covers the whole section. An RLE image starts with one row length per
/// scan line of every channel - "rows times channels" entries - and the packed rows follow, channel
/// after channel.
fn psd_composite(bytes: &[u8]) -> Option<DynamicImage> {
    if bytes.len() < 26 || &bytes[0..4] != b"8BPS" {
        return None;
    }

    let version = u16::from_be_bytes([bytes[4], bytes[5]]);
    let channels = u16::from_be_bytes([bytes[12], bytes[13]]) as usize;
    let height = read_u32(bytes, 14)? as usize;
    let width = read_u32(bytes, 18)? as usize;
    let depth = u16::from_be_bytes([bytes[22], bytes[23]]);
    let mode = u16::from_be_bytes([bytes[24], bytes[25]]);

    // The everyday cases: eight or sixteen bits per channel, RGB or grayscale.
    if version > 2 || !matches!(depth, 8 | 16) || channels == 0 || width == 0 || height == 0
        || mode != 1 && mode != 3
    {
        return None;
    }

    // A sixteen-bit channel is two bytes per sample; only the high byte reaches the picture.
    let sample_bytes = if depth == 16 { 2 } else { 1 };

    if u64::try_from(width).ok()?.checked_mul(u64::try_from(height).ok()?)? > MAX_PIXELS {
        return None;
    }

    let mut offset = 26_usize;

    // Colour mode data, then image resources; neither is needed.
    let color_length = read_u32(bytes, offset)? as usize;
    offset = offset.checked_add(4)?.checked_add(color_length)?;

    let resource_length = read_u32(bytes, offset)? as usize;
    offset = offset.checked_add(4)?.checked_add(resource_length)?;

    // A large document stores the layer section length as eight bytes.
    let section = if version == 2 {
        let value = read_u64(bytes, offset)?;
        offset = offset.checked_add(8)?;
        usize::try_from(value).ok()?
    } else {
        let value = read_u32(bytes, offset)? as usize;
        offset = offset.checked_add(4)?;
        value
    };
    offset = offset.checked_add(section)?;

    let compression = u16::from_be_bytes([*bytes.get(offset)?, *bytes.get(offset + 1)?]);
    offset = offset.checked_add(2)?;

    let pixels = width.checked_mul(height)?;
    let row_bytes = width.checked_mul(sample_bytes)?;
    let wanted = channels.min(4);
    let mut planes: Vec<Vec<u8>> = Vec::with_capacity(wanted);
    let mut raw_planes: Vec<Vec<u8>> = Vec::with_capacity(wanted);

    match compression {
        0 => {
            for channel in 0..channels {
                let length = pixels.checked_mul(sample_bytes)?;
                let plane = bytes.get(offset..offset.checked_add(length)?)?;
                offset = offset.checked_add(length)?;

                if channel < wanted {
                    raw_planes.push(plane.to_vec());
                }
            }
        }
        1 => {
            let entries = height.checked_mul(channels)?;
            let entry_bytes = if version == 2 { 4 } else { 2 };
            let table_length = entries.checked_mul(entry_bytes)?;
            let table = bytes.get(offset..offset.checked_add(table_length)?)?;
            offset = offset.checked_add(table_length)?;

            let mut counts = Vec::with_capacity(entries);
            let mut total = 0_usize;

            for entry in 0..entries {
                let start = entry * entry_bytes;
                let count = if version == 2 {
                    u32::from_be_bytes([
                        table[start],
                        table[start + 1],
                        table[start + 2],
                        table[start + 3],
                    ]) as usize
                } else {
                    u16::from_be_bytes([table[start], table[start + 1]]) as usize
                };

                total = total.checked_add(count)?;
                counts.push(count);
            }

            let packed = bytes.get(offset..offset.checked_add(total)?)?;
            let mut consumed = 0_usize;

            for channel in 0..channels {
                let rows = counts.get(channel.checked_mul(height)?..(channel + 1).checked_mul(height)?)?;
                let (plane, used) = unpack_rows(packed.get(consumed..)?, rows, row_bytes)?;
                consumed = consumed.checked_add(used)?;

                if channel < wanted {
                    raw_planes.push(plane);
                }
            }
        }
        _ => return None,
    }

    for plane in raw_planes {
        planes.push(if sample_bytes == 2 {
            plane.chunks_exact(2).map(|sample| sample[0]).collect()
        } else {
            plane
        });
    }

    if planes.len() < if mode == 3 { 3 } else { 1 } {
        return None;
    }

    // RGB keeps its fourth plane as the alpha channel; grayscale keeps its second.
    let alpha_plane = planes.get(if mode == 3 { 3 } else { 1 });

    let mut image = image::RgbaImage::new(width as u32, height as u32);
    for index in 0..pixels {
        let alpha = alpha_plane.map_or(255, |plane| plane[index]);
        let pixel = if mode == 3 {
            image::Rgba([planes[0][index], planes[1][index], planes[2][index], alpha])
        } else {
            image::Rgba([planes[0][index], planes[0][index], planes[0][index], alpha])
        };

        image.put_pixel((index % width) as u32, (index / width) as u32, pixel);
    }

    Some(DynamicImage::ImageRgba8(image))
}

/// Undoes the run-length packing of one channel: a count, then either literal bytes or one byte to
/// repeat. Each row is decoded on its own, because the packer starts over at every row boundary.
/// Returns the plane and how many packed bytes it used.
fn unpack_rows(packed: &[u8], rows: &[usize], width: usize) -> Option<(Vec<u8>, usize)> {
    let mut output = Vec::with_capacity(rows.len().checked_mul(width)?);
    let mut offset = 0_usize;

    for row in rows {
        let end = offset.checked_add(*row)?;
        if end > packed.len() {
            return None;
        }

        let row_start = output.len();
        let mut produced = 0_usize;

        while offset < end && produced < width {
            let control = *packed.get(offset)? as i8;
            offset += 1;

            if control >= 0 {
                let count = control as usize + 1;
                let literal = packed.get(offset..offset.checked_add(count)?)?;
                output.extend_from_slice(literal);

                offset += count;
                produced += count;
            } else if control != -128 {
                let count = 1 - control as isize;
                let value = *packed.get(offset)?;
                offset += 1;

                output.extend(std::iter::repeat(value).take(count as usize));
                produced += count as usize;
            }
        }

        // Every row is exactly as long as the picture is wide: a short row is padded with black and
        // an overlong one is cut, and the next row starts where this one's packed data ends.
        output.resize(row_start + width, 0);
        offset = end;
    }

    Some((output, offset))
}

/// The embedded preview of a PSD: image resource 1036 (Photoshop 5 and later) or 1033 (older).
fn psd_thumbnail(bytes: &[u8]) -> Option<&[u8]> {
    // "8BPS", version, six reserved bytes, channels, height, width, depth, colour mode.
    if bytes.len() < 26 || &bytes[0..4] != b"8BPS" {
        return None;
    }

    let mut offset = 26_usize;

    // The colour mode data comes first and is not needed.
    let color_length = read_u32(bytes, offset)? as usize;
    offset = offset.checked_add(4)?.checked_add(color_length)?;

    let resource_length = read_u32(bytes, offset)? as usize;
    offset = offset.checked_add(4)?;
    let end = offset.checked_add(resource_length)?.min(bytes.len());

    while offset + 12 <= end {
        if &bytes[offset..offset + 4] != b"8BIM" {
            return None;
        }

        let id = u16::from_be_bytes([bytes[offset + 4], bytes[offset + 5]]);
        offset += 6;

        // A Pascal string padded to an even length, including its own length byte.
        let name_length = *bytes.get(offset)? as usize;
        let name_total = 1 + name_length;
        offset = offset.checked_add(name_total + (name_total % 2))?;

        let size = read_u32(bytes, offset)? as usize;
        offset = offset.checked_add(4)?;

        let data = bytes.get(offset..offset.checked_add(size)?)?;
        if id == 1036 || id == 1033 {
            return Some(data);
        }

        offset = offset.checked_add(size + (size % 2))?;
    }

    None
}

fn read_u32(bytes: &[u8], offset: usize) -> Option<u32> {
    let slice = bytes.get(offset..offset.checked_add(4)?)?;
    Some(u32::from_be_bytes([slice[0], slice[1], slice[2], slice[3]]))
}

fn read_u64(bytes: &[u8], offset: usize) -> Option<u64> {
    let slice = bytes.get(offset..offset.checked_add(8)?)?;
    Some(u64::from_be_bytes([
        slice[0], slice[1], slice[2], slice[3], slice[4], slice[5], slice[6], slice[7],
    ]))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn unpacks_literal_and_repeated_runs() {
        // Row one: a literal run of three bytes, then one byte repeated three times.
        // Row two: a single literal byte, padded to the row width.
        let packed = [0x02, 10, 20, 30, 0xfe, 40, 0x00, 50];
        let (plane, used) = unpack_rows(&packed, &[6, 2], 5).expect("the rows decode");

        assert_eq!(used, packed.len());
        assert_eq!(plane, vec![10, 20, 30, 40, 40, 50, 0, 0, 0, 0]);
    }
}
