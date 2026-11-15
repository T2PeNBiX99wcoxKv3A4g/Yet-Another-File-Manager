# Checks that the picker mod replaces a classic Windows dialog.
#
# Run one mode; the script starts the probe, waits for the app's picker to take
# the dialog's place, then closes it so the probe returns and reports what the
# caller saw:
#
#   pwsh -File Windhawk\verify-picker.ps1 open
#   pwsh -File Windhawk\verify-picker.ps1 save
#   pwsh -File Windhawk\verify-picker.ps1 folder
#   pwsh -File Windhawk\verify-picker.ps1 dialog-open
#   pwsh -File Windhawk\verify-picker.ps1 dialog-save
#   pwsh -File Windhawk\verify-picker.ps1 dialog-folder
#
# The dialog-* modes use IFileOpenDialog / IFileSaveDialog, which Discord,
# Telegram and other modern programs open.
#
# "open" and "save" accept an initial folder as the second argument.
param(
    [ValidateSet("open", "save", "folder", "dialog-open", "dialog-save", "dialog-folder")]
    [string]$Mode = "open",
    [string]$Initial = $env:TEMP
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$project = Join-Path $root "picker-probe"
$exe = Join-Path $project "bin/Release/net11.0-windows/PickerProbe.exe"

dotnet build $project -c Release --nologo | Out-Null
if (-not (Test-Path $exe)) {
    throw "The probe did not build: $exe"
}

$flag = switch ($Mode) {
    { $_ -in "save", "dialog-save" } { "--pick-save" }
    { $_ -in "folder", "dialog-folder" } { "--pick-folder" }
    default { "--pick-file" }
}

$result = Join-Path $env:TEMP "picker-probe-$Mode.txt"
$probe = Start-Process $exe -ArgumentList @($Mode, $Initial) -PassThru -RedirectStandardOutput $result

# The mod starts the app before the classic dialog would appear, so a few
# seconds are enough; the probe blocks either way.
$picker = $null
$deadline = (Get-Date).AddSeconds(10)
while ((Get-Date) -lt $deadline -and -not $probe.HasExited) {
    $picker = Get-CimInstance Win32_Process -Filter "Name='YetAnotherFileManager.exe'" |
        Where-Object { $_.CommandLine -like "*$flag*" } |
        Select-Object -First 1

    if ($picker) { break }
    Start-Sleep -Milliseconds 250
}

if ($picker) {
    Write-Host "PASS: the $Mode dialog was replaced (app process $($picker.ProcessId))."
} elseif ($probe.HasExited) {
    Write-Host "FAIL: the probe returned without a picker."
} else {
    Write-Host "FAIL: no '$flag' process appeared; the original dialog is showing."
    Write-Host "      Another mod that hooks the same dialog (for example"
    Write-Host "      'Modernize Folder Picker Dialog' for folder pickers) can win the race."
}

# Closing the picker makes the mod answer the caller with "cancelled", which is
# the path a user gets from the dialog's own Cancel button.
if ($picker) {
    Stop-Process -Id $picker.ProcessId -Force -ErrorAction SilentlyContinue
}

Start-Sleep -Milliseconds 800
if (-not $probe.HasExited) {
    Stop-Process -Id $probe.Id -Force -ErrorAction SilentlyContinue
}

Write-Host "Probe result:"
Get-Content $result | Select-Object -Last 2 | ForEach-Object { "  $_" }
