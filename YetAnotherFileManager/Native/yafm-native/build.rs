//! Embeds the version block and the manifest a Windows binary is expected to carry. Heuristic
//! scanners treat an unsigned DLL with no company, product or version as suspicious, and this one
//! is loaded by the app for thumbnails and archive work, so it is worth telling them what it is.

fn main() {
    if std::env::var("CARGO_CFG_TARGET_OS").as_deref() != Ok("windows") {
        return;
    }

    let version = std::env::var("CARGO_PKG_VERSION").unwrap_or_else(|_| "0.1.0".to_string());
    let mut parts = version.split('.').map(|part| part.parse::<u64>().unwrap_or(0));
    let major = parts.next().unwrap_or(0);
    let minor = parts.next().unwrap_or(0);
    let patch = parts.next().unwrap_or(0);
    let packed = (major << 48) | (minor << 32) | (patch << 16);

    let mut resource = winresource::WindowsResource::new();
    resource
        .set("FileDescription", "Yet Another File Manager native helper")
        .set("ProductName", "Yet Another File Manager")
        .set("CompanyName", "Yet Another File Manager")
        .set("LegalCopyright", "Copyright (C) Yet Another File Manager contributors")
        .set("OriginalFilename", "yafm_native.dll")
        .set("InternalName", "yafm_native")
        .set("FileVersion", &version)
        .set("ProductVersion", &version)
        .set_version_info(winresource::VersionInfo::FILEVERSION, packed)
        .set_version_info(winresource::VersionInfo::PRODUCTVERSION, packed)
        .set_manifest(MANIFEST);

    if let Err(error) = resource.compile() {
        println!("cargo:warning=Could not embed the Windows resources: {error}");
    }
}

/// Runs with the caller's rights and declares the Windows releases this build knows about.
const MANIFEST: &str = r#"<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">
  <assemblyIdentity type="win32" name="YetAnotherFileManager.Native" version="1.0.0.0" processorArchitecture="amd64"/>
  <trustInfo xmlns="urn:schemas-microsoft-com:asm.v3">
    <security>
      <requestedPrivileges>
        <requestedExecutionLevel level="asInvoker" uiAccess="false"/>
      </requestedPrivileges>
    </security>
  </trustInfo>
  <compatibility xmlns="urn:schemas-microsoft-com:compatibility.v1">
    <application>
      <supportedOS Id="{8e0f7a12-bfb3-4fe8-b9a5-48fd50a15a9a}"/>
    </application>
  </compatibility>
</assembly>
"#;
