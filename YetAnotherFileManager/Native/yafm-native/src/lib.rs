//! Bulk filesystem work for YetAnotherFileManager.
//!
//! The gallery scan is the first caller: a picture library is a few hundred thousand directory
//! entries spread over thousands of folders. The walk uses the `ignore` engine (the one ripgrep is
//! built on), which spreads directory reads over every core. The managed side keeps the same walk
//! as a fallback, so the app still works when this library is missing (a source checkout without
//! cargo, another platform, a trimmed build).

use std::collections::HashSet;
use std::sync::Mutex;
use std::time::UNIX_EPOCH;

use ignore::{WalkBuilder, WalkState};

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
    if root.is_empty() || !std::path::Path::new(&root).is_dir() {
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
