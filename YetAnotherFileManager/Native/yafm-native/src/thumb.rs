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
        "dib" => dib_image(&bytes).and_then(|bmp| decode(&bmp, ImageFormat::Bmp)),
        "pcx" => pcx_image(&bytes),
        "jxl" => jxl_image(&bytes),
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

/// A DIB is a BMP without its fourteen-byte file header, so the header is rebuilt and the image
/// crate does the rest. An eight-bit DIB may be run-length packed, which the BMP reader does not
/// take, so those are unpacked first and handed over as plain rows.
fn dib_image(bytes: &[u8]) -> Option<Vec<u8>> {
    let header_size = read_le_u32(bytes, 0)? as usize;
    let bit_count = u16::from_le_bytes([*bytes.get(14)?, *bytes.get(15)?]);
    let compression = read_le_u32(bytes, 16).unwrap_or(0);

    // The palette sits between the info header and the pixels; 24- and 32-bit images have none.
    let palette = match bit_count {
        0..=8 => {
            let used = read_le_u32(bytes, 32).unwrap_or(0) as usize;
            if used > 0 { used } else { 1usize << bit_count }
        }
        _ => 0,
    };

    let offset = 14usize.checked_add(header_size)?.checked_add(palette.checked_mul(4)?)?;

    // RLE8: pairs of count and palette index, with escapes for line ends and deltas. The rows keep
    // the order the file stores them in, which is the order the rebuilt header describes.
    if compression == 1 && bit_count == 8 {
        let width = i32::from_le_bytes([*bytes.get(4)?, *bytes.get(5)?, *bytes.get(6)?, *bytes.get(7)?]) as usize;
        let height = i32::from_le_bytes([*bytes.get(8)?, *bytes.get(9)?, *bytes.get(10)?, *bytes.get(11)?]);
        if height <= 0 || width == 0 {
            return None;
        }

        let height = height as usize;
        let stride = width.checked_add(3)? & !3;

        let mut rows = vec![0u8; stride.checked_mul(height)?];
        let mut x = 0usize;
        let mut y = 0usize;

        // The pixels follow the info header and its palette; a DIB has no file header in front.
        let dib_end = header_size.checked_add(palette.checked_mul(4)?)?;
        let mut at = dib_end;

        while at + 1 < bytes.len() && y < height {
            let count = bytes[at] as usize;
            let value = bytes[at + 1];
            at += 2;

            if count > 0 {
                for _ in 0..count {
                    if x < width {
                        rows[y * stride + x] = value;
                    }
                    x += 1;
                }
                continue;
            }

            match value {
                0 => {
                    x = 0;
                    y += 1;
                }
                1 => break,
                2 => {
                    if at + 1 >= bytes.len() {
                        break;
                    }
                    x += bytes[at] as usize;
                    y += bytes[at + 1] as usize;
                    at += 2;
                }
                _ => {
                    let literal = value as usize;
                    for index in 0..literal {
                        if x < width {
                            rows[y * stride + x] = *bytes.get(at + index)?;
                        }
                        x += 1;
                    }
                    at += literal + (literal & 1);
                }
            }
        }

        // Rebuild the DIB as plain rows: the same header, the same palette, uncompressed pixels.
        let mut plain = Vec::with_capacity(dib_end.checked_add(rows.len())?);
        plain.extend_from_slice(bytes.get(..dib_end)?);
        if let Some(field) = plain.get_mut(16..20) {
            field.copy_from_slice(&0u32.to_le_bytes());
        }
        plain.extend_from_slice(&rows);

        let total = 14usize.checked_add(plain.len())?;
        let mut bmp = Vec::with_capacity(total);
        bmp.extend_from_slice(b"BM");
        bmp.extend_from_slice(&(total as u32).to_le_bytes());
        bmp.extend_from_slice(&[0, 0, 0, 0]);
        bmp.extend_from_slice(&((14 + dib_end) as u32).to_le_bytes());
        bmp.extend_from_slice(&plain);

        return Some(bmp);
    }

    let total = 14usize.checked_add(bytes.len())?;

    let mut bmp = Vec::with_capacity(total);
    bmp.extend_from_slice(b"BM");
    bmp.extend_from_slice(&(total as u32).to_le_bytes());
    bmp.extend_from_slice(&[0, 0, 0, 0]);
    bmp.extend_from_slice(&(offset as u32).to_le_bytes());
    bmp.extend_from_slice(bytes);

    Some(bmp)
}

/// JPEG XL, through the format's own decoder: it renders a frame into the pixel buffer the image
/// crate hands back, alpha included.
fn jxl_image(bytes: &[u8]) -> Option<DynamicImage> {
    let decoder = jxl_oxide::integration::JxlDecoder::new(Cursor::new(bytes)).ok()?;
    DynamicImage::from_decoder(decoder).ok()
}

/// Decodes a PCX: run-length rows, one plane per channel, and the palette the header or the tail
/// carries. Only the three layouts files actually use are read - 1-bit, 8-bit and 8-bit RGB.
fn pcx_image(bytes: &[u8]) -> Option<DynamicImage> {
    if bytes.len() < 128 || bytes[0] != 0x0A {
        return None;
    }

    let encoding = bytes[2];
    let bits = bytes[3] as usize;
    let planes = bytes[65] as usize;
    let bytes_per_line = u16::from_le_bytes([bytes[66], bytes[67]]) as usize;
    let (x_min, y_min) = (
        u16::from_le_bytes([bytes[4], bytes[5]]) as usize,
        u16::from_le_bytes([bytes[6], bytes[7]]) as usize,
    );
    let x_max = u16::from_le_bytes([bytes[8], bytes[9]]) as usize;
    let y_max = u16::from_le_bytes([bytes[10], bytes[11]]) as usize;

    let width = x_max.checked_sub(x_min)?.checked_add(1)?;
    let height = y_max.checked_sub(y_min)?.checked_add(1)?;

    if !matches!(bits, 1 | 8) || planes == 0 || planes > 4 || width == 0 || height == 0 {
        return None;
    }

    if u64::try_from(width).ok()?.checked_mul(u64::try_from(height).ok()?)? > MAX_PIXELS {
        return None;
    }

    // The rows are stored packed, each as long as the header says, and run-length compressed when
    // the file says so.
    let row_bytes = bytes_per_line.checked_mul(planes)?;
    let mut packed = Vec::with_capacity(row_bytes.checked_mul(height)?);
    let mut offset = 128usize;
    let expected = row_bytes.checked_mul(height)?;

    while packed.len() < expected {
        let value = *bytes.get(offset)?;
        offset += 1;

        if encoding == 1 && value >= 0xC0 {
            let count = (value & 0x3F) as usize;
            let repeated = *bytes.get(offset)?;
            offset += 1;

            for _ in 0..count {
                packed.push(repeated);
            }
        } else {
            packed.push(value);
        }
    }

    // The palette of an 8-bit single-plane file sits in the last 769 bytes when the version is 5.
    let palette_at = bytes.len().checked_sub(769);
    let palette = palette_at.filter(|at| bytes.get(*at) == Some(&0x0C)).map(|at| &bytes[at + 1..at + 769]);

    let mut rgba = image::RgbaImage::new(width as u32, height as u32);

    for y in 0..height {
        for x in 0..width {
            let pixel = match (bits, planes) {
                (8, 3) => {
                    let row = &packed[y * row_bytes..(y + 1) * row_bytes];
                    image::Rgba([row[x], row[bytes_per_line + x], row[2 * bytes_per_line + x], 255])
                }
                (8, 4) => {
                    let row = &packed[y * row_bytes..(y + 1) * row_bytes];
                    image::Rgba([
                        row[x],
                        row[bytes_per_line + x],
                        row[2 * bytes_per_line + x],
                        row[3 * bytes_per_line + x],
                    ])
                }
                (8, 1) => {
                    let entry = packed[y * row_bytes + x] as usize;
                    match palette {
                        Some(table) => {
                            let at = entry * 3;
                            image::Rgba([table[at], table[at + 1], table[at + 2], 255])
                        }
                        None => image::Rgba([entry as u8, entry as u8, entry as u8, 255]),
                    }
                }
                (1, _) => {
                    let row = &packed[y * row_bytes..(y + 1) * row_bytes];
                    let bit = (row[x / 8] >> (7 - x % 8)) & 1;
                    let value = match bit {
                        1 => 255,
                        _ => 0,
                    };
                    image::Rgba([value, value, value, 255])
                }
                _ => return None,
            };

            rgba.put_pixel(x as u32, y as u32, pixel);
        }
    }

    Some(DynamicImage::ImageRgba8(rgba))
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

/// A little-endian field, as the Windows picture formats store their headers.
fn read_le_u32(bytes: &[u8], offset: usize) -> Option<u32> {
    let slice = bytes.get(offset..offset.checked_add(4)?)?;
    Some(u32::from_le_bytes([slice[0], slice[1], slice[2], slice[3]]))
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

    /// An eight-bit DIB whose rows are run-length packed, as Windows writes one: the pixels have to
    /// come back through the BMP the decoder rebuilds, not as the file's icon.
    #[test]
    fn decodes_a_run_length_dib() {
        let width = 4u32;
        let height = 2u32;
        let mut dib = Vec::new();

        dib.extend_from_slice(&40u32.to_le_bytes());
        dib.extend_from_slice(&width.to_le_bytes());
        dib.extend_from_slice(&height.to_le_bytes());
        dib.extend_from_slice(&1u16.to_le_bytes());
        dib.extend_from_slice(&8u16.to_le_bytes());
        dib.extend_from_slice(&1u32.to_le_bytes());
        dib.extend_from_slice(&0u32.to_le_bytes());
        dib.extend_from_slice(&[0; 8]);
        dib.extend_from_slice(&2u32.to_le_bytes());
        dib.extend_from_slice(&0u32.to_le_bytes());

        // Two entries: black, then red.
        dib.extend_from_slice(&[0, 0, 0, 0, 255, 0, 0, 0]);

        // The bottom row is four red pixels; the top row is a literal run of black and red.
        dib.extend_from_slice(&[4, 1, 0, 0]);
        dib.extend_from_slice(&[0, 2, 0, 1, 0, 0]);

        let bmp = dib_image(&dib).expect("the DIB becomes a BMP");
        let image = decode(&bmp, ImageFormat::Bmp).expect("the BMP decodes");

        assert_eq!((image.width(), image.height()), (width, height));
        assert_eq!(image.to_rgba8().get_pixel(0, 0).0, [0, 0, 0, 255]);
    }

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
