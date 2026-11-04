//! Measuring and deleting trees. A folder being deleted is mostly directory entries, so both the
//! walk and the unlinks are spread over every core.

use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicU64, Ordering};

use ignore::{WalkBuilder, WalkState};
use rayon::prelude::*;

use crate::split_paths;


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
    let sources = split_paths(&joined);

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
    let sources = split_paths(&joined);

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
