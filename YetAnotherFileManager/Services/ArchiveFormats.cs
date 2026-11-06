namespace YetAnotherFileManager.Services;

/// <summary>
///     The archive extensions this app can open, shared by the archive reader and the Windows
///     file-association registration so the two can never drift apart.
/// </summary>
internal static class ArchiveFormats
{
    public static readonly string[] Extensions =
    [
        ".zip", ".zipx", ".jar", ".war", ".apk", ".xpi", ".ipa",
        ".7z", ".rar",
        ".tar", ".gz", ".tgz", ".bz2", ".tbz", ".tbz2", ".xz", ".txz",
        ".arj", ".ace", ".arc",
        ".lzh", ".lha", ".cab", ".iso", ".wim", ".swm", ".esd", ".chm", ".msi", ".msp", ".msm",
        ".udf", ".dmg", ".vhd", ".vhdx", ".vmdk", ".xar", ".z", ".lzma", ".lzma86", ".cpio",
        ".cramfs", ".rpm", ".deb", ".ar", ".apm", ".nsis", ".squashfs", ".qcow2", ".vdi",
        ".zst", ".tzst", ".001"
    ];
}
