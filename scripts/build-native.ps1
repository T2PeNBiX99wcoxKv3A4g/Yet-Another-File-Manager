#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Builds the native helper with whatever MSVC and Windows SDK this machine has.

.DESCRIPTION
    cargo needs three things that a plain PowerShell session does not provide: the MSVC linker
    (link.exe), the Windows SDK import libraries (kernel32.lib and friends) and the include folders.
    Visual Studio's own developer prompt sets them; this script finds the same pieces where they are
    installed and sets them for one build, so nothing has to be installed into the user's profile.

    The linker is put in front of PATH on purpose: a MinGW or MSYS2 installation often ships a GNU
    "link" that would otherwise answer first and fail with "extra operand".

.PARAMETER SkipCopy
    Only build; do not copy the DLL next to the application's output.

.EXAMPLE
    pwsh ./scripts/build-native.ps1
#>
[CmdletBinding()]
param(
    [switch]$SkipCopy
)

$ErrorActionPreference = 'Stop'

$root = Split-Path $PSScriptRoot -Parent
$native = Join-Path $root 'YetAnotherFileManager/Native/yafm-native'

if (-not (Test-Path $native)) {
    throw "The native project is missing: $native"
}

# ---- MSVC -------------------------------------------------------------------------------------

$roots = @()

$vswhere = Join-Path ${env:ProgramFiles(x86)} 'Microsoft Visual Studio/Installer/vswhere.exe'
if (Test-Path $vswhere) {
    $roots += & $vswhere -all -prerelease -products * `
        -requires Microsoft.VisualStudio.Component.VC.Tools.x86.x64 -property installationPath
}

# vswhere reads its own records, which outlive a deleted folder; the directories are the truth.
foreach ($programFiles in @(${env:ProgramFiles}, ${env:ProgramFiles(x86)})) {
    $base = Join-Path $programFiles 'Microsoft Visual Studio'

    if (-not (Test-Path $base)) { continue }

    $roots += Get-ChildItem $base -Directory |
        ForEach-Object { Get-ChildItem $_.FullName -Directory -ErrorAction SilentlyContinue } |
        Select-Object -ExpandProperty FullName
}

$msvc = $roots |
    Where-Object { $_ -and (Test-Path $_) } |
    ForEach-Object { Join-Path $_ 'VC/Tools/MSVC' } |
    Where-Object { Test-Path $_ } |
    ForEach-Object { Get-ChildItem $_ -Directory } |
    Sort-Object Name -Descending |
    Where-Object { Test-Path (Join-Path $_.FullName 'bin/Hostx64/x64/link.exe') } |
    Select-Object -First 1

if (-not $msvc) {
    throw 'No MSVC toolchain with link.exe was found. Install "Desktop development with C++" in the Visual Studio Installer.'
}

$msvcRoot = $msvc.FullName
$msvcVersion = $msvc.Name

# ---- Windows SDK ------------------------------------------------------------------------------

$kits = @(
    (Get-ItemProperty 'HKLM:/SOFTWARE/Microsoft/Windows Kits/Installed Roots' -ErrorAction SilentlyContinue).KitsRoot10,
    (Get-ItemProperty 'HKLM:/SOFTWARE/WOW6432Node/Microsoft/Windows Kits/Installed Roots' -ErrorAction SilentlyContinue).KitsRoot10,
    'C:/Program Files (x86)/Windows Kits/10',
    'G:/Windows Kits/10'
) | Where-Object { $_ -and (Test-Path $_) } | ForEach-Object { (Resolve-Path $_).Path } | Select-Object -Unique

$sdk = $kits |
    ForEach-Object { Join-Path $_ 'Lib' } |
    Where-Object { Test-Path $_ } |
    ForEach-Object { Get-ChildItem $_ -Directory } |
    Sort-Object Name -Descending |
    Where-Object { Test-Path (Join-Path $_.FullName 'um/x64/kernel32.lib') } |
    Select-Object -First 1

if (-not $sdk) {
    throw 'No Windows SDK with kernel32.lib was found. Install "Windows 11 SDK" in the Visual Studio Installer (Repair restores a missing one).'
}

$sdkRoot = Split-Path (Split-Path $sdk.FullName -Parent) -Parent
$sdkVersion = $sdk.Name

# ---- One build --------------------------------------------------------------------------------

$env:PATH = "$msvcRoot\bin\Hostx64\x64;$sdkRoot\bin\$sdkVersion\x64;$env:PATH"
$env:LIB = "$msvcRoot\lib\x64;$sdkRoot\Lib\$sdkVersion\ucrt\x64;$sdkRoot\Lib\$sdkVersion\um\x64"
$env:INCLUDE = "$msvcRoot\include;$sdkRoot\Include\$sdkVersion\ucrt;$sdkRoot\Include\$sdkVersion\um;$sdkRoot\Include\$sdkVersion\shared;$sdkRoot\Include\$sdkVersion\winrt"

Write-Host "MSVC $msvcVersion"
Write-Host "Windows SDK $sdkVersion at $sdkRoot"
Write-Host "linker $((Get-Command link.exe).Source)"

& cargo build --release --manifest-path (Join-Path $native 'Cargo.toml')
if ($LASTEXITCODE -ne 0) {
    throw "cargo build failed with $LASTEXITCODE"
}

$dll = Join-Path $native 'target/release/yafm_native.dll'
if (-not (Test-Path $dll)) {
    throw "The build produced no DLL at $dll"
}

if ($SkipCopy) {
    Write-Host "Built $dll"
    return
}

# The application's output folder, where the project copies the DLL after its own build.
foreach ($configuration in @('Release', 'Debug')) {
    $output = Join-Path $root "YetAnotherFileManager/bin/$configuration/net11.0/win-x64"
    if (Test-Path $output) {
        Copy-Item $dll $output -Force
        Write-Host "Copied to $output"
    }
}

Write-Host "Built $dll"
