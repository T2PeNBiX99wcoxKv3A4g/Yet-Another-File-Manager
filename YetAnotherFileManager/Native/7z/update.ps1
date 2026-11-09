<#
.SYNOPSIS
    Replaces the bundled 7z.dll with a released 7-Zip build.

.DESCRIPTION
    The application reads the formats the managed libraries do not understand through 7z.dll,
    and it writes the few things those libraries cannot (Deflate64 in a ZIP) through the same
    library. SevenZipExtractor ships its own copy, but that copy is as old as the package, so
    this repository vendors its own pair under Native/7z and refreshes it with this script.

    The official installers are downloaded, unpacked with an administrative install (nothing is
    installed on the machine, and no 7-Zip has to be present), and only 7z.dll plus the license
    are kept. The build copies these files over the ones the package brings.

.PARAMETER Version
    The 7-Zip release to vendor, for example 26.06. Defaults to the newest one the download
    page lists.

.EXAMPLE
    ./update.ps1

.EXAMPLE
    ./update.ps1 -Version 26.06
#>
[CmdletBinding()]
param([string]$Version)

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'

$root = $PSScriptRoot
$licenses = Join-Path $root '..\licenses'
$downloads = Join-Path ([IO.Path]::GetTempPath()) "yafm-7zip-$([Guid]::NewGuid().ToString('N'))"

function Resolve-Version {
    if ($Version) {
        return $Version
    }

    $page = (Invoke-WebRequest 'https://www.7-zip.org/download.html' -UseBasicParsing).Content
    $match = [regex]::Match($page, 'Download 7-Zip (\d+\.\d+)')
    if (-not $match.Success) {
        throw 'The 7-Zip download page did not name a version.'
    }

    return $match.Groups[1].Value
}

$version = Resolve-Version
$digits = $version.Replace('.', '')
Write-Host "7-Zip $version"

New-Item -ItemType Directory $downloads -Force | Out-Null

try {
    foreach ($arch in 'x64', 'x86') {
        $suffix = if ($arch -eq 'x64') { '-x64' } else { '' }
        $msi = Join-Path $downloads "$arch.msi"
        $target = Join-Path $downloads $arch

        Write-Host "  downloading $arch"
        Invoke-WebRequest "https://www.7-zip.org/a/7z$digits$suffix.msi" -OutFile $msi -UseBasicParsing

        $install = Start-Process msiexec.exe -ArgumentList @('/a', "`"$msi`"", '/qn', "TARGETDIR=`"$target`"") `
            -Wait -PassThru

        if ($install.ExitCode -ne 0) {
            throw "msiexec could not unpack the $arch package ($($install.ExitCode))."
        }

        $files = Join-Path $target 'Files\7-Zip'
        $dll = Join-Path $files '7z.dll'

        if (-not (Test-Path $dll)) {
            throw "The $arch package does not carry 7z.dll."
        }

        $output = Join-Path $root $arch
        New-Item -ItemType Directory $output -Force | Out-Null
        Copy-Item $dll (Join-Path $output '7z.dll') -Force

        $license = Join-Path $files 'License.txt'
        if (Test-Path $license) {
            New-Item -ItemType Directory $licenses -Force | Out-Null
            Copy-Item $license (Join-Path $licenses '7-Zip.txt') -Force
        }
    }

    Set-Content (Join-Path $root 'version.txt') $version
}
finally {
    Remove-Item $downloads -Recurse -Force -ErrorAction SilentlyContinue
}

foreach ($arch in 'x64', 'x86') {
    $file = Get-Item (Join-Path $root "$arch\7z.dll")

    if ($file.VersionInfo.FileVersion -ne $version) {
        Write-Warning "$arch belongs to $($file.VersionInfo.FileVersion), not $version."
    }

    '{0,-4} {1,10:N0} bytes  {2}' -f $arch, $file.Length, $file.VersionInfo.FileVersion
}
