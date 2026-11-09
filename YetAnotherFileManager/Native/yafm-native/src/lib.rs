//! Bulk filesystem work for YetAnotherFileManager.
//!
//! The library is split by job: the gallery scan, archive creation, and measuring or deleting a
//! tree. Each job is reached through a small C ABI, so its entry point sits at the top of the module
//! and the buffers it hands out are released with [`yafm_free`].

mod archive;
mod gallery;
mod seven;
mod tree;

/// Splits the `\0` separated paths a caller passes as one UTF-16 string.
pub(crate) fn split_paths(joined: &str) -> Vec<&str> {
    joined.split('\0').filter(|value| !value.is_empty()).collect()
}

/// Frees a buffer the library returned to the caller.
#[no_mangle]
pub unsafe extern "C" fn yafm_free(pointer: *mut u8, length: usize) {
    if !pointer.is_null() && length > 0 {
        drop(Vec::from_raw_parts(pointer, length, length));
    }
}
