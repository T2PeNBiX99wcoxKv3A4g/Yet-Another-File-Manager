//! ZIP creation. Files are deflated across cores, then written to the archive in order, which keeps
//! the output a normal ZIP while the expensive part runs in parallel.

use std::fs::File;
use std::io::{BufWriter, Read, Write};
use std::ops::Range;
use std::path::{Path, PathBuf};
use std::time::{SystemTime, UNIX_EPOCH};

use flate2::write::DeflateEncoder;
use flate2::Compression;
use rayon::prelude::*;
use zip::write::SimpleFileOptions;
use zip::{CompressionMethod, DateTime, ZipWriter};

use crate::split_paths;


/// One file or empty folder that goes into the archive.
enum Item {
    File { path: PathBuf, name: String, size: u64 },
    Directory { name: String },
}

/// A compressed entry, ready to be written. Holding a chunk at a time keeps memory bounded.
struct Prepared {
    name: String,
    method: u16,
    crc: u32,
    compressed: Vec<u8>,
    uncompressed: u64,
    modified: Option<SystemTime>,
}

struct CentralEntry {
    name: String,
    method: u16,
    crc: u32,
    compressed: u32,
    uncompressed: u32,
    modified: Option<SystemTime>,
    offset: u32,
}

/// Larger files are left to the managed streaming writer, which never holds a whole file.
const MAX_NATIVE_FILE: u64 = 32 * 1024 * 1024;

/// How much uncompressed data one parallel batch may hold.
const CHUNK_BYTES: u64 = 128 * 1024 * 1024;

/// How many entries one batch may hold even when they are small.
const CHUNK_FILES: usize = 64;

const LOCAL_HEADER: u32 = 0x0403_4b50;
const CENTRAL_HEADER: u32 = 0x0201_4b50;
const END_OF_CENTRAL: u32 = 0x0605_4b50;

/// Compresses `paths` into `output`. Returns 0 on success, a negative value on failure.
///
/// This is the batch writer: files are deflated in parallel, then the archive is written in order.
/// Zip64 and very large files are rejected so the managed writer can handle them instead.
#[no_mangle]
pub unsafe extern "C" fn yafm_compress(
    paths: *const u16,
    paths_len: usize,
    output: *const u16,
    output_len: usize,
    threads: u32,
) -> i32 {
    if paths.is_null() || output.is_null() {
        return -1;
    }

    let joined = String::from_utf16_lossy(std::slice::from_raw_parts(paths, paths_len));
    let output = String::from_utf16_lossy(std::slice::from_raw_parts(output, output_len));
    let sources = split_paths(&joined);

    if sources.is_empty() || output.is_empty() {
        return -2;
    }

    let threads = threads.clamp(1, 64) as usize;

    match compress(&sources, &output, threads) {
        Ok(()) => 0,
        // -4 tells the caller to stream the archive itself; -3 is a real failure.
        Err(CompressError::TooLarge) => -4,
        Err(CompressError::Other) => -3,
    }
}

/// Why the native writer stopped: a file it cannot hold, or a genuine failure.
enum CompressError {
    TooLarge,
    Other,
}

impl From<String> for CompressError {
    fn from(_: String) -> Self {
        CompressError::Other
    }
}

/// Compresses `paths` into `output` with the XZ method inside a ZIP. This is the one method the
/// managed writer cannot produce, and the only ZIP setting 7-Zip's command line was kept for.
///
/// Every size is accepted: the archive is streamed, so a file is never held in memory.
#[no_mangle]
pub unsafe extern "C" fn yafm_compress_xz(
    paths: *const u16,
    paths_len: usize,
    output: *const u16,
    output_len: usize,
    level: i32,
) -> i32 {
    if paths.is_null() || output.is_null() {
        return -1;
    }

    let joined = String::from_utf16_lossy(std::slice::from_raw_parts(paths, paths_len));
    let output = String::from_utf16_lossy(std::slice::from_raw_parts(output, output_len));
    let sources = split_paths(&joined);

    if sources.is_empty() || output.is_empty() {
        return -2;
    }

    match compress_xz(&sources, &output, level) {
        Ok(()) => 0,
        Err(_) => -3,
    }
}

fn compress_xz(sources: &[&str], output: &str, level: i32) -> Result<(), String> {
    let items = collect(sources)?;
    if items.is_empty() {
        return Err("nothing to compress".into());
    }

    let file = File::create(output).map_err(|error| error.to_string())?;
    let mut writer = ZipWriter::new(BufWriter::new(file));
    let level = i64::from(level.clamp(0, 9));

    for item in &items {
        let options = SimpleFileOptions::default()
            .compression_method(CompressionMethod::Xz)
            .compression_level(Some(level))
            .last_modified_time(stamp(item));

        match item {
            Item::Directory { name } => {
                writer.add_directory(name, options).map_err(|error| error.to_string())?;
            }
            Item::File { path, name, .. } => {
                writer.start_file(name, options).map_err(|error| error.to_string())?;

                let mut input =
                    File::open(path).map_err(|error| format!("{}: {error}", path.display()))?;
                std::io::copy(&mut input, &mut writer).map_err(|error| error.to_string())?;
            }
        }
    }

    writer
        .finish()
        .map_err(|error| error.to_string())?
        .flush()
        .map_err(|error| error.to_string())?;

    Ok(())
}

/// The timestamp the ZIP entry carries, in the DOS form the format stores.
fn stamp(item: &Item) -> DateTime {
    let modified = match item {
        Item::File { path, .. } => std::fs::metadata(path)
            .ok()
            .and_then(|metadata| metadata.modified().ok()),
        Item::Directory { .. } => None,
    };

    let (time, date) = dos_time(modified);
    DateTime::try_from_msdos(date, time).unwrap_or_default()
}

fn compress(sources: &[&str], output: &str, threads: usize) -> Result<(), CompressError> {
    let items = collect(sources)?;
    if items.is_empty() {
        return Err(CompressError::Other);
    }

    let pool = rayon::ThreadPoolBuilder::new()
        .num_threads(threads)
        .build()
        .map_err(|error| error.to_string())?;

    let file = File::create(output).map_err(|error| error.to_string())?;
    let mut writer = BufWriter::new(file);
    let mut central = Vec::with_capacity(items.len());
    let mut offset = 0u64;

    for range in batches(&items)? {
        let prepared = pool.install(|| {
            items[range.clone()]
                .par_iter()
                .map(prepare)
                .collect::<Result<Vec<_>, String>>()
        })?;

        for entry in prepared {
            if entry.compressed.len() as u64 > u32::MAX as u64 || entry.uncompressed > u32::MAX as u64 {
                return Err(CompressError::TooLarge);
            }

            let local_offset = offset;
            write_local(&mut writer, &entry, &mut offset)?;

            central.push(CentralEntry {
                name: entry.name,
                method: entry.method,
                crc: entry.crc,
                compressed: entry.compressed.len() as u32,
                uncompressed: entry.uncompressed as u32,
                modified: entry.modified,
                offset: local_offset as u32,
            });
        }
    }

    let central_start = offset;
    let central_size = write_central(&mut writer, &central)?;

    if central_start > u32::MAX as u64 || central.len() > u16::MAX as usize {
        return Err(CompressError::TooLarge);
    }

    write_end(&mut writer, central.len() as u16, central_size as u32, central_start as u32)?;
    writer.flush().map_err(|error| error.to_string())?;

    Ok(())
}

/// Splits the entries into batches that bound both the file count and the bytes held in memory.
fn batches(items: &[Item]) -> Result<Vec<Range<usize>>, CompressError> {
    let mut ranges = Vec::new();
    let mut start = 0;

    while start < items.len() {
        let mut end = start;
        let mut bytes = 0u64;

        while end < items.len() && end - start < CHUNK_FILES {
            let size = match &items[end] {
                Item::File { size, .. } => *size,
                Item::Directory { .. } => 0,
            };

            if size > MAX_NATIVE_FILE {
                return Err(CompressError::TooLarge);
            }

            if end > start && bytes + size > CHUNK_BYTES {
                break;
            }

            bytes += size;
            end += 1;
        }

        ranges.push(start..end);
        start = end;
    }

    Ok(ranges)
}

fn collect(sources: &[&str]) -> Result<Vec<Item>, String> {
    let mut items = Vec::new();

    for source in sources {
        let path = Path::new(source);

        if path.is_file() {
            let name = path
                .file_name()
                .and_then(|name| name.to_str())
                .ok_or_else(|| format!("bad file name: {source}"))?
                .to_string();
            let size = std::fs::metadata(path).map_err(|error| error.to_string())?.len();
            items.push(Item::File { path: path.to_path_buf(), name, size });
            continue;
        }

        if !path.is_dir() {
            continue;
        }

        // The relative name includes the source folder itself, matching the managed writer.
        let parent = path.parent().unwrap_or_else(|| Path::new(""));

        // Every folder gets an entry of its own, which is what keeps an empty one from vanishing.
        for entry in walkdir::WalkDir::new(path).follow_links(false) {
            let entry = entry.map_err(|error| error.to_string())?;
            let relative = entry.path().strip_prefix(parent).unwrap_or(entry.path());
            let name = relative.to_string_lossy().replace('\\', "/");

            if entry.file_type().is_dir() {
                items.push(Item::Directory { name: format!("{name}/") });
                continue;
            }

            let size = entry.metadata().map(|metadata| metadata.len()).unwrap_or(0);
            items.push(Item::File { path: entry.path().to_path_buf(), name, size });
        }
    }

    Ok(items)
}

fn prepare(item: &Item) -> Result<Prepared, String> {
    match item {
        Item::Directory { name } => Ok(Prepared {
            name: name.clone(),
            method: 0,
            crc: 0,
            compressed: Vec::new(),
            uncompressed: 0,
            modified: None,
        }),
        Item::File { path, name, .. } => {
            let mut data = Vec::new();
            File::open(path)
                .and_then(|mut file| file.read_to_end(&mut data))
                .map_err(|error| format!("{}: {error}", path.display()))?;

            let crc = crc32fast::hash(&data);
            let mut encoder = DeflateEncoder::new(Vec::new(), Compression::default());
            encoder.write_all(&data).map_err(|error| error.to_string())?;
            let compressed = encoder.finish().map_err(|error| error.to_string())?;
            let modified = std::fs::metadata(path).ok().and_then(|metadata| metadata.modified().ok());

            Ok(Prepared {
                name: name.clone(),
                method: 8,
                crc,
                compressed,
                uncompressed: data.len() as u64,
                modified,
            })
        }
    }
}

fn write_local<W: Write>(writer: &mut W, entry: &Prepared, offset: &mut u64) -> Result<(), String> {
    let name = entry.name.as_bytes();
    if name.len() > u16::MAX as usize {
        return Err("entry name is too long".into());
    }

    let (time, date) = dos_time(entry.modified);

    write_u32(writer, LOCAL_HEADER)?;
    write_u16(writer, 20)?;
    write_u16(writer, 0x0800)?;
    write_u16(writer, entry.method)?;
    write_u16(writer, time)?;
    write_u16(writer, date)?;
    write_u32(writer, entry.crc)?;
    write_u32(writer, entry.compressed.len() as u32)?;
    write_u32(writer, entry.uncompressed as u32)?;
    write_u16(writer, name.len() as u16)?;
    write_u16(writer, 0)?;
    writer.write_all(name).map_err(|error| error.to_string())?;
    writer.write_all(&entry.compressed).map_err(|error| error.to_string())?;

    *offset += 30 + name.len() as u64 + entry.compressed.len() as u64;
    Ok(())
}

fn write_central<W: Write>(writer: &mut W, entries: &[CentralEntry]) -> Result<u64, String> {
    let mut size = 0u64;

    for entry in entries {
        let name = entry.name.as_bytes();
        if name.len() > u16::MAX as usize {
            return Err("entry name is too long".into());
        }

        let (time, date) = dos_time(entry.modified);

        write_u32(writer, CENTRAL_HEADER)?;
        write_u16(writer, 20)?;
        write_u16(writer, 20)?;
        write_u16(writer, 0x0800)?;
        write_u16(writer, entry.method)?;
        write_u16(writer, time)?;
        write_u16(writer, date)?;
        write_u32(writer, entry.crc)?;
        write_u32(writer, entry.compressed)?;
        write_u32(writer, entry.uncompressed)?;
        write_u16(writer, name.len() as u16)?;
        write_u16(writer, 0)?;
        write_u16(writer, 0)?;
        write_u16(writer, 0)?;
        write_u16(writer, 0)?;
        write_u32(writer, 0)?;
        write_u32(writer, entry.offset)?;
        writer.write_all(name).map_err(|error| error.to_string())?;

        size += 46 + name.len() as u64;
    }

    Ok(size)
}

fn write_end<W: Write>(writer: &mut W, count: u16, size: u32, offset: u32) -> Result<(), String> {
    write_u32(writer, END_OF_CENTRAL)?;
    write_u16(writer, 0)?;
    write_u16(writer, 0)?;
    write_u16(writer, count)?;
    write_u16(writer, count)?;
    write_u32(writer, size)?;
    write_u32(writer, offset)?;
    write_u16(writer, 0)?;
    Ok(())
}

fn write_u16<W: Write>(writer: &mut W, value: u16) -> Result<(), String> {
    writer.write_all(&value.to_le_bytes()).map_err(|error| error.to_string())
}

fn write_u32<W: Write>(writer: &mut W, value: u32) -> Result<(), String> {
    writer.write_all(&value.to_le_bytes()).map_err(|error| error.to_string())
}

/// The DOS timestamp ZIP stores: seconds have two-second resolution and years start at 1980.
fn dos_time(time: Option<SystemTime>) -> (u16, u16) {
    let Some(time) = time else {
        return (0, 0);
    };

    let Ok(duration) = time.duration_since(UNIX_EPOCH) else {
        return (0, 0);
    };

    let seconds = duration.as_secs();
    let (year, month, day) = civil_from_days((seconds / 86_400) as i64);

    if !(1980..=2107).contains(&year) {
        return (0, 0);
    }

    let remainder = seconds % 86_400;
    let date = (((year - 1980) as u16) << 9) | ((month as u16) << 5) | day as u16;
    let time = (((remainder / 3600) as u16) << 11)
        | (((remainder % 3600 / 60) as u16) << 5)
        | ((remainder % 60 / 2) as u16);

    (time, date)
}

/// Days since 1970-01-01 to a civil date (Howard Hinnant's algorithm).
fn civil_from_days(days: i64) -> (i64, u32, u32) {
    let shifted = days + 719_468;
    let era = if shifted >= 0 { shifted } else { shifted - 146_096 } / 146_097;
    let day_of_era = (shifted - era * 146_097) as u64;
    let year_of_era =
        (day_of_era - day_of_era / 1460 + day_of_era / 36_524 - day_of_era / 146_096) / 365;
    let year = year_of_era as i64 + era * 400;
    let day_of_year = day_of_era - (365 * year_of_era + year_of_era / 4 - year_of_era / 100);
    let month_part = (5 * day_of_year + 2) / 153;
    let day = (day_of_year - (153 * month_part + 2) / 5 + 1) as u32;
    let month = if month_part < 10 { month_part + 3 } else { month_part - 9 } as u32;

    (if month <= 2 { year + 1 } else { year }, month, day)
}
