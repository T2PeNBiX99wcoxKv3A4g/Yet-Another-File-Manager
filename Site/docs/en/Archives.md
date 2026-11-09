# Archives

## Opening one

Double-click an archive, or select it and press `Enter`: it opens as a folder. The entries appear in
the same list, grid and previews, and a path inside the archive works in the address bar, in the
history and in a tab like any other path.

ZIP, 7z, RAR, TAR (with gzip, bzip2 or xz) and the many formats 7-Zip reads — `.cab`, `.iso`, `.msi`,
`.wim`, `.lzh`, `.rpm`, `.deb`, `.squashfs` and more — open here. A split archive is one archive:
open its `.001` part and the other parts are read with it.

An encrypted archive asks for its password the first time it is opened in a session; the answer is
kept for that archive until the app closes.

Archives are read-only: extract what you need, change it, and pack it again.

## Extracting

Right-click inside an archive:

- **Extract here** writes the selected entries, or the whole folder, into the current folder.
- **Extract to a folder named after the archive** creates that folder first.
- **Auto extract to the current folder** skips the extra folder when the archive holds one top-level
  item.
- **Extract to…** asks where to put it.

A file inside an archive can be opened or previewed directly: it is extracted to a temporary file and
handed to its app or to the shell. The archive itself is never changed.

## Creating one

Select the files and folders, then choose **Compress to…**, or **Compress to ZIP** for the defaults.
The dialog offers ZIP, ZIPX, 7z, TAR, TAR + GZip and TAR + BZip2; for ZIP, ZIPX and 7z it also sets:

- **Method** — store, deflate, deflate64, bzip2, lzma, xz or ppmd.
- **Encryption** — ZipCrypto, AES-128, AES-192 or AES-256, with a password.
- **Split volumes** — one part per 10 MB, 50 MB, 100 MB, 500 MB, 1 GB or 2 GB, named `.001`, `.002`…

The selected folders keep their names inside the archive, and empty folders are kept.
