//! 7z creation: LZMA2, plus AES-256 when a password is given. Each selected folder becomes one
//! solid block, the way 7-Zip packs a tree, and folders holding no file are added on their own.

use std::fs::{self, File};
use std::path::{Path, PathBuf};

use sevenz_rust2::encoder_options::AesEncoderOptions;
use sevenz_rust2::{ArchiveEntry, ArchiveWriter, EncoderMethod, Password};

use crate::split_paths;

/// Compresses `paths` into a 7z archive. Splitting is left to the caller: 7-Zip volumes are a plain
/// cut of the finished file.
#[no_mangle]
pub unsafe extern "C" fn yafm_7z_create(
    paths: *const u16,
    paths_len: usize,
    output: *const u16,
    output_len: usize,
    password: *const u16,
    password_len: usize,
) -> i32 {
    if paths.is_null() || output.is_null() {
        return -1;
    }

    let joined = String::from_utf16_lossy(std::slice::from_raw_parts(paths, paths_len));
    let output = String::from_utf16_lossy(std::slice::from_raw_parts(output, output_len));

    let password = if password.is_null() || password_len == 0 {
        None
    } else {
        Some(String::from_utf16_lossy(std::slice::from_raw_parts(password, password_len)))
    };

    let sources = split_paths(&joined);

    if sources.is_empty() || output.is_empty() {
        return -2;
    }

    match write(&sources, &output, password.as_deref()) {
        Ok(()) => 0,
        Err(_) => -3,
    }
}

fn write(sources: &[&str], output: &str, password: Option<&str>) -> Result<(), String> {
    let mut writer = ArchiveWriter::create(output).map_err(|error| error.to_string())?;

    if let Some(password) = password {
        // 7-Zip leaves the header readable by default, which is what lets the archive be listed
        // before the password is known.
        writer.set_encrypt_header(false);

        writer.set_content_methods(vec![
            AesEncoderOptions::new(Password::new(password)).into(),
            EncoderMethod::LZMA2.into(),
        ]);
    }

    for source in sources {
        let path = Path::new(source);

        if path.is_file() {
            let name = file_name(path)?;

            writer
                .push_archive_entry(ArchiveEntry::from_path(path, name), Some(open(path)?))
                .map_err(|error| error.to_string())?;

            continue;
        }

        if !path.is_dir() {
            continue;
        }

        // Solid packing names the entries relative to the folder it is given, so handing it the
        // parent keeps the selected folder's own name in the archive, as 7-Zip does.
        let parent = path.parent().unwrap_or_else(|| Path::new(""));

        writer
            .push_source_path(parent, |candidate| candidate == parent || candidate.starts_with(path))
            .map_err(|error| error.to_string())?;

        // Solid packing only carries files, so folders that hold none are added on their own.
        for directory in without_files(path) {
            let name = archive_name(path, &directory);

            writer
                .push_archive_entry(ArchiveEntry::from_path(&directory, name), None::<File>)
                .map_err(|error| error.to_string())?;
        }
    }

    writer.finish().map_err(|error| error.to_string())?;
    Ok(())
}

fn open(path: &Path) -> Result<File, String> {
    File::open(path).map_err(|error| format!("{}: {error}", path.display()))
}

fn file_name(path: &Path) -> Result<String, String> {
    path.file_name()
        .and_then(|name| name.to_str())
        .map(|name| name.to_string())
        .ok_or_else(|| format!("bad file name: {}", path.display()))
}

/// The name inside the archive: the path relative to the folder holding the selection.
fn archive_name(root: &Path, path: &Path) -> String {
    let parent = root.parent().unwrap_or_else(|| Path::new(""));

    path.strip_prefix(parent)
        .unwrap_or(path)
        .to_string_lossy()
        .replace('\\', "/")
}

/// Every folder under `root` whose whole subtree holds no file, `root` included.
fn without_files(root: &Path) -> Vec<PathBuf> {
    let mut found = Vec::new();
    collect(root, &mut found);
    found
}

/// Adds the empty folders below `path`; answers whether the subtree holds any file.
fn collect(path: &Path, found: &mut Vec<PathBuf>) -> bool {
    let mut holds_file = false;
    let mut children = Vec::new();

    if let Ok(entries) = fs::read_dir(path) {
        for entry in entries.flatten() {
            let child = entry.path();

            if child.is_dir() {
                children.push(child);
            } else {
                holds_file = true;
            }
        }
    }

    let mut child_files = false;

    for child in children {
        child_files |= collect(&child, found);
    }

    if !holds_file && !child_files {
        found.push(path.to_path_buf());
    }

    holds_file || child_files
}
