//! Bulk filesystem work for YetAnotherFileManager.
//!
//! The callers share this library. The gallery scan and the delete job are mostly directory
//! entries, and both use the `ignore` engine (the one ripgrep is built on) to spread the walk over
//! every core. ZIP creation is mostly deflate work, and the parallel writer compresses files across
//! cores while writing the archive sequentially. The managed side keeps every implementation as a
//! fallback, so the app still works when this library is missing (a source checkout without cargo,
//! another platform, a trimmed build).

use std::collections::HashSet;
use std::fs::File;
use std::io::{BufWriter, Read, Write};
use std::ops::Range;
use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::Mutex;
use std::time::{SystemTime, UNIX_EPOCH};

use flate2::write::DeflateEncoder;
use flate2::Compression;
use ignore::{WalkBuilder, WalkState};
use rayon::prelude::*;

/// One picture as the managed side stores it.
struct Entry {
    path: String,
    name: String,
    modified: i64,
    size: u64,
}

/// Scans `root` for files whose extension is in `extensions` (semicolon separated, dots optional).
///
/// Returns `0` and a buffer in `*out_ptr`/`*out_len` on success, a negative value on bad input.
/// The caller owns the buffer and must hand it back to [`yafm_free`].
///
/// The buffer is little-endian:
/// `u32 count`, then per entry `u32 path_len`, `u32 name_len`, `i64 modified_ms`, `u64 size`,
/// `path_len` UTF-8 bytes, `name_len` UTF-8 bytes.
#[no_mangle]
pub unsafe extern "C" fn yafm_scan_images(
    root: *const u16,
    root_len: usize,
    depth: u32,
    threads: u32,
    extensions: *const u16,
    extensions_len: usize,
    out_ptr: *mut *mut u8,
    out_len: *mut usize,
) -> i32 {
    if root.is_null() || out_ptr.is_null() || out_len.is_null() {
        return -1;
    }

    let root = String::from_utf16_lossy(std::slice::from_raw_parts(root, root_len));
    if root.is_empty() || !Path::new(&root).is_dir() {
        return -2;
    }

    let extensions = if extensions.is_null() || extensions_len == 0 {
        HashSet::new()
    } else {
        String::from_utf16_lossy(std::slice::from_raw_parts(extensions, extensions_len))
            .split(';')
            .filter(|value| !value.is_empty())
            .map(|value| value.trim_start_matches('.').to_ascii_lowercase())
            .collect()
    };

    let depth = depth.min(64);
    let threads = threads.clamp(1, 64) as usize;

    let entries = scan_images(&root, depth, threads, &extensions);

    let mut buffer = Vec::with_capacity(4 + entries.len() * 48);
    buffer.extend_from_slice(&(entries.len() as u32).to_le_bytes());

    for entry in &entries {
        buffer.extend_from_slice(&(entry.path.len() as u32).to_le_bytes());
        buffer.extend_from_slice(&(entry.name.len() as u32).to_le_bytes());
        buffer.extend_from_slice(&entry.modified.to_le_bytes());
        buffer.extend_from_slice(&entry.size.to_le_bytes());
        buffer.extend_from_slice(entry.path.as_bytes());
        buffer.extend_from_slice(entry.name.as_bytes());
    }

    let mut boxed = buffer.into_boxed_slice();
    *out_ptr = boxed.as_mut_ptr();
    *out_len = boxed.len();
    std::mem::forget(boxed);

    0
}

/// Frees a buffer returned by [`yafm_scan_images`].
#[no_mangle]
pub unsafe extern "C" fn yafm_free(pointer: *mut u8, length: usize) {
    if !pointer.is_null() && length > 0 {
        drop(Vec::from_raw_parts(pointer, length, length));
    }
}

fn scan_images(root: &str, depth: u32, threads: usize, extensions: &HashSet<String>) -> Vec<Entry> {
    let entries = Mutex::new(Vec::new());

    let mut builder = WalkBuilder::new(root);
    builder
        // The managed walk includes files in directories up to `depth` levels below the root;
        // this walker counts the root as depth 0, so files one level below need +1.
        .max_depth(Some(depth as usize + 1))
        // A photo library is not a source tree: no ignore files, no hidden-file skipping.
        .hidden(false)
        .ignore(false)
        .git_ignore(false)
        .git_global(false)
        .git_exclude(false)
        .parents(false)
        .follow_links(false)
        .threads(threads);

    builder.build_parallel().run(|| {
        Box::new(|result| {
            let Ok(entry) = result else {
                return WalkState::Continue;
            };

            if entry.file_type().is_some_and(|kind| kind.is_file()) {
                if let Some(found) = to_entry(&entry, extensions) {
                    if let Ok(mut list) = entries.lock() {
                        list.push(found);
                    }
                }
            }

            WalkState::Continue
        })
    });

    entries.into_inner().unwrap_or_default()
}

fn to_entry(entry: &ignore::DirEntry, extensions: &HashSet<String>) -> Option<Entry> {
    let path = entry.path();
    let extension = path.extension()?.to_str()?.to_ascii_lowercase();
    if !extensions.contains(&extension) {
        return None;
    }

    let metadata = entry.metadata().ok()?;
    let modified = metadata
        .modified()
        .ok()
        .and_then(|time| time.duration_since(UNIX_EPOCH).ok())
        .map(|duration| duration.as_millis() as i64)
        .unwrap_or(0);

    Some(Entry {
        path: path.to_string_lossy().into_owned(),
        name: entry.file_name().to_string_lossy().into_owned(),
        modified,
        size: metadata.len(),
    })
}

// ---------------------------------------------------------------------------------------------
// ZIP creation
// ---------------------------------------------------------------------------------------------

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
    let sources: Vec<&str> = joined.split('\0').filter(|value| !value.is_empty()).collect();

    if sources.is_empty() || output.is_empty() {
        return -2;
    }

    let threads = threads.clamp(1, 64) as usize;

    match compress(&sources, &output, threads) {
        Ok(()) => 0,
        Err(_) => -3,
    }
}

fn compress(sources: &[&str], output: &str, threads: usize) -> Result<(), String> {
    let items = collect(sources)?;
    if items.is_empty() {
        return Err("nothing to compress".into());
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
                return Err("zip64 is not supported by the native writer".into());
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
        return Err("zip64 is not supported by the native writer".into());
    }

    write_end(&mut writer, central.len() as u16, central_size as u32, central_start as u32)?;
    writer.flush().map_err(|error| error.to_string())?;

    Ok(())
}

/// Splits the entries into batches that bound both the file count and the bytes held in memory.
fn batches(items: &[Item]) -> Result<Vec<Range<usize>>, String> {
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
                return Err("a file is too large for the native writer".into());
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
        let mut any = false;

        for entry in walkdir::WalkDir::new(path).follow_links(false) {
            let entry = entry.map_err(|error| error.to_string())?;
            if !entry.file_type().is_file() {
                continue;
            }

            let relative = entry.path().strip_prefix(parent).unwrap_or(entry.path());
            let name = relative.to_string_lossy().replace('\\', "/");
            let size = entry.metadata().map(|metadata| metadata.len()).unwrap_or(0);

            items.push(Item::File { path: entry.path().to_path_buf(), name, size });
            any = true;
        }

        if !any {
            let name = path
                .file_name()
                .and_then(|name| name.to_str())
                .unwrap_or("folder");
            items.push(Item::Directory { name: format!("{name}/") });
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


// ---------------------------------------------------------------------------------------------
// Measuring and deleting trees
// ---------------------------------------------------------------------------------------------

/// Counts the files under `paths`; a source is walked in parallel and a file is one entry.
///
/// Returns `0` on success and a negative value on bad input. The caller uses the count as the total
/// of a delete, so a tree that cannot be read is simply not counted.
#[no_mangle]
pub unsafe extern "C" fn yafm_measure(
    paths: *const u16,
    paths_len: usize,
    threads: u32,
    out_files: *mut u64,
) -> i32 {
    if paths.is_null() || out_files.is_null() {
        return -1;
    }

    let joined = String::from_utf16_lossy(std::slice::from_raw_parts(paths, paths_len));
    let sources: Vec<&str> = joined.split('\0').filter(|value| !value.is_empty()).collect();

    if sources.is_empty() {
        return -2;
    }

    let threads = threads.clamp(1, 64) as usize;
    let mut files = 0u64;

    for source in &sources {
        files += count_files(source, threads);
    }

    *out_files = files;
    0
}

fn count_files(root: &str, threads: usize) -> u64 {
    let path = Path::new(root);
    let Ok(metadata) = std::fs::symlink_metadata(path) else {
        return 0;
    };

    if !metadata.is_dir() {
        return 1;
    }

    let files = AtomicU64::new(0);

    let mut builder = WalkBuilder::new(path);
    builder
        .hidden(false)
        .ignore(false)
        .git_ignore(false)
        .git_global(false)
        .git_exclude(false)
        .parents(false)
        .follow_links(false)
        .threads(threads);

    builder.build_parallel().run(|| {
        Box::new(|result| {
            if let Ok(entry) = result {
                if entry.file_type().is_some_and(|kind| kind.is_file()) {
                    files.fetch_add(1, Ordering::Relaxed);
                }
            }

            WalkState::Continue
        })
    });

    files.into_inner()
}

/// Deletes every source, unlinking the files of a tree across cores.
///
/// `total` is the file count from [`yafm_measure`]; `progress` is called while the work runs, so
/// the window can show a bar instead of a spinner. Returns the number of entries that could not be
/// removed, or a negative value on bad input.
#[no_mangle]
pub unsafe extern "C" fn yafm_delete(
    paths: *const u16,
    paths_len: usize,
    threads: u32,
    total: u64,
    progress: extern "C" fn(u64, u64),
) -> i32 {
    if paths.is_null() {
        return -1;
    }

    let joined = String::from_utf16_lossy(std::slice::from_raw_parts(paths, paths_len));
    let sources: Vec<&str> = joined.split('\0').filter(|value| !value.is_empty()).collect();

    if sources.is_empty() {
        return -2;
    }

    let threads = threads.clamp(1, 64) as usize;
    let done = AtomicU64::new(0);
    let failed = AtomicU64::new(0);
    let report = Report { done: &done, total, progress };

    let Ok(pool) = rayon::ThreadPoolBuilder::new().num_threads(threads).build() else {
        return -3;
    };

    pool.install(|| {
        sources.par_iter().for_each(|source| {
            if !remove_tree(Path::new(source), &report) {
                failed.fetch_add(1, Ordering::Relaxed);
            }
        });
    });

    progress(done.load(Ordering::Relaxed).min(total), total);

    failed.load(Ordering::Relaxed).min(i32::MAX as u64) as i32
}

/// What a running delete tells the caller, and how often.
struct Report<'a> {
    done: &'a AtomicU64,
    total: u64,
    progress: extern "C" fn(u64, u64),
}

fn remove_tree(path: &Path, report: &Report) -> bool {
    let Ok(metadata) = std::fs::symlink_metadata(path) else {
        return false;
    };

    // A link is removed on its own; whatever it points at stays.
    if metadata.file_type().is_symlink() {
        return remove_file(path) || std::fs::remove_dir(path).is_ok();
    }

    if metadata.is_dir() {
        let Ok(entries) = std::fs::read_dir(path) else {
            return false;
        };

        let children: Vec<PathBuf> = entries
            .filter_map(|entry| entry.ok())
            .map(|entry| entry.path())
            .collect();

        children.par_iter().for_each(|child| {
            remove_tree(child, report);
        });

        clear_readonly(path);
        return std::fs::remove_dir(path).is_ok();
    }

    if !remove_file(path) {
        return false;
    }

    let done = report.done.fetch_add(1, Ordering::Relaxed) + 1;

    // One call per file would cross the boundary far too often; the caller throttles anyway.
    if done % 128 == 0 {
        (report.progress)(done.min(report.total), report.total);
    }

    true
}

/// Removes one file, clearing the read-only flag Windows refuses to delete first.
fn remove_file(path: &Path) -> bool {
    if std::fs::remove_file(path).is_ok() {
        return true;
    }

    clear_readonly(path);
    std::fs::remove_file(path).is_ok()
}

fn clear_readonly(path: &Path) {
    let Ok(metadata) = std::fs::symlink_metadata(path) else {
        return;
    };

    let mut permissions = metadata.permissions();

    if permissions.readonly() {
        permissions.set_readonly(false);
        let _ = std::fs::set_permissions(path, permissions);
    }
}
