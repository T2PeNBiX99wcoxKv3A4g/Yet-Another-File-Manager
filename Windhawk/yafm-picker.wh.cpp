// ==WindhawkMod==
// @id              yafm-picker
// @name            Yet Another File Manager pickers
// @description     Replaces the classic Windows Open, Save As and folder dialogs with the app's picker
// @version         1.0.0
// @author          T2PeNBiX99wcoxKv3A4g
// @github          https://github.com/T2PeNBiX99wcoxKv3A4g
// @include         *
// @compilerOptions -lole32 -lshell32 -lshlwapi
// ==/WindhawkMod==

// ==WindhawkModReadme==
/*
# Yet Another File Manager pickers

Replaces the Win32 common dialogs with the picker built into Yet Another File
Manager. The picker is a normal process: the mod starts it with `--pick-file`,
`--pick-save` or `--pick-folder`, waits for it to close, and hands the chosen
paths back to the caller.

## What is replaced

- `GetOpenFileNameW/A` - Open file
- `GetSaveFileNameW/A` - Save As
- `SHBrowseForFolderW/A` - Select folder

The dialog's initial folder, file name, extension filter and default extension
are passed to the picker. Multi-selection is preserved for Open.

The newer COM item dialogs (`IFileOpenDialog` / `IFileSaveDialog`) are not
covered by this first version yet: only the classic common dialogs are. Most
native Win32 applications use the classic API, while some newer ones use the
COM dialog and keep their own appearance.

## Limits

- A low-integrity mod cannot inject into elevated processes, so pickers opened
  by an administrator program are not replaced.
- The picker is a separate window and takes a moment to start; the calling
  program waits for it, which is what a modal dialog does anyway.
- If no copy of the app is found, the hook calls the original dialog.
- The three `Replace ...` settings can each be turned off on their own.
*/
// ==/WindhawkModReadme==

// ==WindhawkModSettings==
/*
- Executable: ""
  $name: File manager path
  $description: >-
    Full path to the executable. Leave empty to use the yafm:// handler or the
    default install folder.
- ReplaceOpenFilePickers: 1
  $name: Replace Open file pickers
  $description: >-
    Replace GetOpenFileName with the app picker.
- ReplaceSaveFilePickers: 1
  $name: Replace Save As pickers
  $description: >-
    Replace GetSaveFileName with the app picker's save mode.
- ReplaceFolderPickers: 1
  $name: Replace folder pickers
  $description: >-
    Replace SHBrowseForFolder with the app picker.
*/
// ==/WindhawkModSettings==

#include <windows.h>
#include <commdlg.h>
#include <shlobj.h>
#include <shlwapi.h>

#include <string>
#include <vector>
#include <cstring>
#include <cwchar>

enum class PickResult {
    NoApp,
    Cancelled,
    Picked,
};

struct PickerRequest {
    bool Folder = false;
    bool Save = false;
    bool Multiple = false;
    std::wstring Initial;
    std::wstring Filter;
    std::wstring Name;
    std::wstring Extension;
};

static bool g_replaceOpen = true;
static bool g_replaceSave = true;
static bool g_replaceFolder = true;

using GetOpenFileNameW_t = BOOL(WINAPI*)(LPOPENFILENAMEW);
using GetOpenFileNameA_t = BOOL(WINAPI*)(LPOPENFILENAMEA);
using GetSaveFileNameW_t = BOOL(WINAPI*)(LPOPENFILENAMEW);
using GetSaveFileNameA_t = BOOL(WINAPI*)(LPOPENFILENAMEA);
using SHBrowseForFolderW_t = PIDLIST_ABSOLUTE(WINAPI*)(LPBROWSEINFOW);
using SHBrowseForFolderA_t = PIDLIST_ABSOLUTE(WINAPI*)(LPBROWSEINFOA);

static GetOpenFileNameW_t GetOpenFileNameW_Original;
static GetOpenFileNameA_t GetOpenFileNameA_Original;
static GetSaveFileNameW_t GetSaveFileNameW_Original;
static GetSaveFileNameA_t GetSaveFileNameA_Original;
static SHBrowseForFolderW_t SHBrowseForFolderW_Original;
static SHBrowseForFolderA_t SHBrowseForFolderA_Original;

static void ReadSettings() {
    g_replaceOpen = Wh_GetIntSetting(L"ReplaceOpenFilePickers") != 0;
    g_replaceSave = Wh_GetIntSetting(L"ReplaceSaveFilePickers") != 0;
    g_replaceFolder = Wh_GetIntSetting(L"ReplaceFolderPickers") != 0;
}

static std::wstring GetStringSetting(PCWSTR name) {
    PCWSTR value = Wh_GetStringSetting(name);
    std::wstring result = value ? value : L"";
    if (value)
        Wh_FreeStringSetting(value);

    return result;
}

static std::wstring ExpandEnvironment(const std::wstring& value) {
    if (value.empty())
        return {};

    wchar_t buffer[32768];
    DWORD length = ExpandEnvironmentStringsW(value.c_str(), buffer, ARRAYSIZE(buffer));
    return length > 0 && length <= ARRAYSIZE(buffer) ? std::wstring(buffer, length - 1) : value;
}

static bool FileExists(const std::wstring& path) {
    if (path.empty())
        return false;

    DWORD attributes = GetFileAttributesW(path.c_str());
    return attributes != INVALID_FILE_ATTRIBUTES && !(attributes & FILE_ATTRIBUTE_DIRECTORY);
}

/// The executable inside a registry command line: a quoted path, or the first token.
static std::wstring ExecutableIn(const std::wstring& command) {
    if (command.empty())
        return {};

    if (command[0] != L'"') {
        size_t end = command.find(L' ');
        return command.substr(0, end);
    }

    size_t end = command.find(L'"', 1);
    return end == std::wstring::npos ? std::wstring() : command.substr(1, end - 1);
}

/// The app registers yafm:// with this command when the user enables links.
static std::wstring FromYafmHandler() {
    HKEY key = nullptr;
    if (RegOpenKeyExW(HKEY_CURRENT_USER, L"Software\\Classes\\yafm\\shell\\open\\command", 0, KEY_READ, &key) !=
        ERROR_SUCCESS) {
        return {};
    }

    wchar_t value[32768];
    DWORD size = sizeof(value);
    DWORD type = 0;
    LONG status = RegQueryValueExW(key, nullptr, nullptr, &type, reinterpret_cast<LPBYTE>(value), &size);
    RegCloseKey(key);

    if (status != ERROR_SUCCESS || (type != REG_SZ && type != REG_EXPAND_SZ))
        return {};

    std::wstring command(value, size / sizeof(wchar_t));
    while (!command.empty() && command.back() == L'\0')
        command.pop_back();

    return ExecutableIn(ExpandEnvironment(command));
}

static std::wstring ResolveExecutable() {
    std::wstring configured = ExpandEnvironment(GetStringSetting(L"Executable"));
    if (FileExists(configured))
        return configured;

    std::wstring registered = FromYafmHandler();
    if (FileExists(registered))
        return registered;

    const wchar_t* candidates[] = {
        L"%LOCALAPPDATA%\\Programs\\Yet Another File Manager\\YetAnotherFileManager.exe",
        L"%ProgramFiles%\\Yet Another File Manager\\YetAnotherFileManager.exe",
    };

    for (const wchar_t* candidate : candidates) {
        std::wstring path = ExpandEnvironment(candidate);
        if (FileExists(path))
            return path;
    }

    return {};
}

static void AppendQuoted(std::wstring& command, const std::wstring& value) {
    command += L" \"";
    for (wchar_t ch : value) {
        if (ch == L'"')
            command += L'\\';
        command += ch;
    }
    command += L'"';
}

static std::wstring TempOutputPath() {
    wchar_t directory[MAX_PATH];
    if (GetTempPathW(ARRAYSIZE(directory), directory) == 0)
        directory[0] = L'\0';

    wchar_t name[96];
    swprintf_s(name, L"yafm-pick-%u-%llu.txt", GetCurrentProcessId(), GetTickCount64());

    std::wstring path = directory;
    path += name;
    return path;
}

static std::wstring Widen(const char* value) {
    if (!value)
        return {};

    int length = MultiByteToWideChar(CP_ACP, 0, value, -1, nullptr, 0);
    if (length <= 1)
        return {};

    std::wstring result(static_cast<size_t>(length - 1), L'\0');
    MultiByteToWideChar(CP_ACP, 0, value, -1, result.data(), length);
    return result;
}

/// A filter block is a sequence of NUL-terminated strings ending with an empty one.
static std::wstring WidenFilterBlock(const char* value) {
    if (!value)
        return {};

    std::wstring result;
    const char* segment = value;

    while (*segment) {
        std::wstring text = Widen(segment);
        result.append(text);
        result.push_back(L'\0');
        segment += strlen(segment) + 1;
    }

    result.push_back(L'\0');
    return result;
}

static std::wstring ReadUtf8File(const std::wstring& path) {
    HANDLE file = CreateFileW(path.c_str(), GENERIC_READ, FILE_SHARE_READ, nullptr, OPEN_EXISTING,
        FILE_ATTRIBUTE_NORMAL, nullptr);
    if (file == INVALID_HANDLE_VALUE)
        return {};

    LARGE_INTEGER size{};
    if (!GetFileSizeEx(file, &size) || size.QuadPart <= 0 || size.QuadPart > 1024 * 1024) {
        CloseHandle(file);
        return {};
    }

    std::string bytes(static_cast<size_t>(size.QuadPart), '\0');
    DWORD read = 0;
    BOOL ok = ReadFile(file, bytes.data(), static_cast<DWORD>(bytes.size()), &read, nullptr);
    CloseHandle(file);

    if (!ok || read == 0)
        return {};

    int length = MultiByteToWideChar(CP_UTF8, 0, bytes.data(), static_cast<int>(read), nullptr, 0);
    if (length <= 0)
        return {};

    std::wstring text(static_cast<size_t>(length), L'\0');
    MultiByteToWideChar(CP_UTF8, 0, bytes.data(), static_cast<int>(read), text.data(), length);
    return text;
}

static std::vector<std::wstring> ReadPaths(const std::wstring& path) {
    std::vector<std::wstring> paths;
    std::wstring text = ReadUtf8File(path);

    size_t start = 0;
    while (start <= text.size()) {
        size_t end = text.find(L'\n', start);
        if (end == std::wstring::npos)
            end = text.size();

        std::wstring line = text.substr(start, end - start);
        while (!line.empty() && (line.back() == L'\r' || line.back() == L' '))
            line.pop_back();

        if (!line.empty())
            paths.push_back(line);

        if (end == text.size())
            break;

        start = end + 1;
    }

    return paths;
}

static PickResult RunPicker(const PickerRequest& request, std::vector<std::wstring>& paths) {
    std::wstring executable = ResolveExecutable();
    if (executable.empty())
        return PickResult::NoApp;

    std::wstring output = TempOutputPath();
    DeleteFileW(output.c_str());

    std::wstring command;
    AppendQuoted(command, executable);
    command += request.Folder ? L" --pick-folder" : request.Save ? L" --pick-save" : L" --pick-file";
    if (request.Multiple)
        command += L" --multiple";
    if (!request.Initial.empty()) {
        command += L" --initial";
        AppendQuoted(command, request.Initial);
    }
    if (!request.Filter.empty()) {
        command += L" --filter";
        AppendQuoted(command, request.Filter);
    }
    if (!request.Name.empty()) {
        command += L" --initial-name";
        AppendQuoted(command, request.Name);
    }
    if (!request.Extension.empty()) {
        command += L" --default-extension";
        AppendQuoted(command, request.Extension);
    }
    command += L" --output";
    AppendQuoted(command, output);

    std::vector<wchar_t> mutableCommand(command.begin(), command.end());
    mutableCommand.push_back(L'\0');

    STARTUPINFOW startup = {};
    startup.cb = sizeof(startup);
    startup.dwFlags = STARTF_USESHOWWINDOW;
    startup.wShowWindow = SW_SHOWNORMAL;

    PROCESS_INFORMATION process = {};
    if (!CreateProcessW(executable.c_str(), mutableCommand.data(), nullptr, nullptr, FALSE, 0, nullptr, nullptr,
            &startup, &process)) {
        Wh_Log(L"Could not start %s (error %u)", executable.c_str(), GetLastError());
        return PickResult::NoApp;
    }

    WaitForSingleObject(process.hProcess, INFINITE);

    DWORD code = 1;
    GetExitCodeProcess(process.hProcess, &code);
    CloseHandle(process.hThread);
    CloseHandle(process.hProcess);

    if (code != 0) {
        DeleteFileW(output.c_str());
        return PickResult::Cancelled;
    }

    paths = ReadPaths(output);
    DeleteFileW(output.c_str());
    return paths.empty() ? PickResult::Cancelled : PickResult::Picked;
}

static std::wstring InitialDirectory(LPOPENFILENAMEW ofn) {
    if (ofn->lpstrInitialDir && *ofn->lpstrInitialDir)
        return ofn->lpstrInitialDir;

    if (ofn->lpstrFile && *ofn->lpstrFile && !PathIsRelativeW(ofn->lpstrFile)) {
        wchar_t directory[MAX_PATH];
        wcscpy_s(directory, ofn->lpstrFile);
        PathRemoveFileSpecW(directory);
        if (*directory)
            return directory;
    }

    return {};
}

/// Joins the patterns of an OPENFILENAME filter block into the app's `.ext;.ext` form.
///
/// The picker takes bare extensions and appends `*` itself, while `OPENFILENAME` uses globs
/// such as `*.txt;*.md`. `*.*` (All files) is dropped so the picker's own "all files" choice
/// stays the one that shows everything.
static std::wstring FilterPatterns(LPCWSTR filter) {
    std::wstring result;
    if (!filter)
        return result;

    const wchar_t* segment = filter;
    while (*segment) {
        segment += wcslen(segment) + 1; // description
        if (!*segment)
            break;

        std::wstring patterns = segment;
        size_t start = 0;
        while (start <= patterns.size()) {
            size_t end = patterns.find(L';', start);
            if (end == std::wstring::npos)
                end = patterns.size();

            std::wstring pattern = patterns.substr(start, end - start);
            start = end + 1;

            while (!pattern.empty() && pattern.front() == L' ')
                pattern.erase(0, 1);
            while (!pattern.empty() && pattern.back() == L' ')
                pattern.pop_back();

            if (pattern == L"*" || pattern == L"*.*")
                continue;

            if (!pattern.empty() && pattern[0] == L'*')
                pattern.erase(0, 1);

            // A pattern that is not just an extension (say `readme.*`) has no picker form.
            if (pattern.empty() || pattern[0] != L'.')
                continue;

            if (!result.empty())
                result += L';';
            result += pattern;
        }

        segment += wcslen(segment) + 1;
    }

    return result;
}

static std::wstring InitialName(LPCWSTR file) {
    if (!file || !*file)
        return {};

    const wchar_t* name = PathFindFileNameW(file);
    return name && *name ? name : L"";
}

static BOOL FillSingle(LPOPENFILENAMEW ofn, const std::wstring& path) {
    if (!ofn->lpstrFile || ofn->nMaxFile == 0)
        return FALSE;

    wcsncpy_s(ofn->lpstrFile, ofn->nMaxFile, path.c_str(), _TRUNCATE);

    const wchar_t* name = PathFindFileNameW(ofn->lpstrFile);
    ofn->nFileOffset = static_cast<WORD>(name - ofn->lpstrFile);

    const wchar_t* extension = PathFindExtensionW(name);
    ofn->nFileExtension = *extension ? static_cast<WORD>(extension - ofn->lpstrFile) : 0;
    return TRUE;
}

static BOOL FillMultiple(LPOPENFILENAMEW ofn, const std::vector<std::wstring>& paths) {
    if (!ofn->lpstrFile || ofn->nMaxFile == 0)
        return FALSE;

    std::wstring first = paths[0];
    wchar_t directory[MAX_PATH];
    wcscpy_s(directory, first.c_str());
    PathRemoveFileSpecW(directory);

    size_t needed = wcslen(directory) + 1 + 1;
    for (const auto& path : paths) {
        const wchar_t* name = PathFindFileNameW(path.c_str());
        needed += (name ? wcslen(name) : 0) + 1;
    }

    if (needed > ofn->nMaxFile)
        return FALSE;

    wchar_t* cursor = ofn->lpstrFile;
    size_t remaining = ofn->nMaxFile;
    wcscpy_s(cursor, remaining, directory);
    cursor += wcslen(cursor) + 1;
    remaining = ofn->nMaxFile - (cursor - ofn->lpstrFile);

    for (const auto& path : paths) {
        const wchar_t* name = PathFindFileNameW(path.c_str());
        wcscpy_s(cursor, remaining, name ? name : L"");
        cursor += wcslen(cursor) + 1;
        remaining = ofn->nMaxFile - (cursor - ofn->lpstrFile);
    }

    *cursor = L'\0';
    ofn->nFileOffset = 0;
    ofn->nFileExtension = 0;
    return TRUE;
}

static BOOL CallOpenSaveOriginal(LPOPENFILENAMEW ofn, bool save) {
    if (save)
        return GetSaveFileNameW_Original ? GetSaveFileNameW_Original(ofn) : FALSE;

    return GetOpenFileNameW_Original ? GetOpenFileNameW_Original(ofn) : FALSE;
}

static BOOL ShowOpenSave(LPOPENFILENAMEW ofn, bool save) {
    const bool enabled = save ? g_replaceSave : g_replaceOpen;
    if (!enabled || !ofn || !ofn->lpstrFile || ofn->nMaxFile == 0)
        return CallOpenSaveOriginal(ofn, save);

    PickerRequest request;
    request.Save = save;
    request.Multiple = !save && (ofn->Flags & OFN_ALLOWMULTISELECT) != 0;
    request.Initial = InitialDirectory(ofn);
    request.Filter = FilterPatterns(ofn->lpstrFilter);
    request.Name = InitialName(ofn->lpstrFile);
    request.Extension = ofn->lpstrDefExt ? ofn->lpstrDefExt : L"";

    std::vector<std::wstring> paths;
    PickResult result = RunPicker(request, paths);

    if (result == PickResult::NoApp)
        return CallOpenSaveOriginal(ofn, save);

    if (result == PickResult::Cancelled)
        return FALSE;

    return paths.size() == 1 ? FillSingle(ofn, paths[0]) : FillMultiple(ofn, paths);
}

static BOOL WINAPI GetOpenFileNameW_Hook(LPOPENFILENAMEW ofn) {
    return ShowOpenSave(ofn, false);
}

static BOOL WINAPI GetSaveFileNameW_Hook(LPOPENFILENAMEW ofn) {
    return ShowOpenSave(ofn, true);
}

static BOOL WINAPI GetOpenFileNameA_Hook(LPOPENFILENAMEA ofn) {
    if (!ofn || !g_replaceOpen)
        return GetOpenFileNameA_Original(ofn);

    OPENFILENAMEW wide = {};
    wide.lStructSize = sizeof(wide);
    wide.hwndOwner = ofn->hwndOwner;
    wide.hInstance = ofn->hInstance;
    wide.Flags = ofn->Flags;
    wide.nFilterIndex = ofn->nFilterIndex;

    std::wstring filter = WidenFilterBlock(ofn->lpstrFilter);
    std::wstring initial = Widen(ofn->lpstrInitialDir);
    std::wstring defExt = Widen(ofn->lpstrDefExt);
    std::wstring title = Widen(ofn->lpstrTitle);

    std::vector<wchar_t> file(ofn->nMaxFile ? ofn->nMaxFile : 1, L'\0');
    if (ofn->lpstrFile) {
        std::wstring text = Widen(ofn->lpstrFile);
        wcsncpy_s(file.data(), file.size(), text.c_str(), _TRUNCATE);
    }

    wide.lpstrFilter = filter.empty() ? nullptr : filter.c_str();
    wide.lpstrInitialDir = initial.empty() ? nullptr : initial.c_str();
    wide.lpstrDefExt = defExt.empty() ? nullptr : defExt.c_str();
    wide.lpstrTitle = title.empty() ? nullptr : title.c_str();
    wide.lpstrFile = file.data();
    wide.nMaxFile = static_cast<DWORD>(file.size());

    BOOL ok = ShowOpenSave(&wide, false);
    if (ok && ofn->lpstrFile) {
        WideCharToMultiByte(CP_ACP, 0, wide.lpstrFile, -1, ofn->lpstrFile, ofn->nMaxFile, nullptr, nullptr);
        ofn->nFileOffset = wide.nFileOffset;
        ofn->nFileExtension = wide.nFileExtension;
    }

    return ok;
}

static BOOL WINAPI GetSaveFileNameA_Hook(LPOPENFILENAMEA ofn) {
    if (!ofn || !g_replaceSave)
        return GetSaveFileNameA_Original(ofn);

    OPENFILENAMEW wide = {};
    wide.lStructSize = sizeof(wide);
    wide.hwndOwner = ofn->hwndOwner;
    wide.hInstance = ofn->hInstance;
    wide.Flags = ofn->Flags;
    wide.nFilterIndex = ofn->nFilterIndex;

    std::wstring filter = WidenFilterBlock(ofn->lpstrFilter);
    std::wstring initial = Widen(ofn->lpstrInitialDir);
    std::wstring defExt = Widen(ofn->lpstrDefExt);
    std::wstring title = Widen(ofn->lpstrTitle);

    std::vector<wchar_t> file(ofn->nMaxFile ? ofn->nMaxFile : 1, L'\0');
    if (ofn->lpstrFile) {
        std::wstring text = Widen(ofn->lpstrFile);
        wcsncpy_s(file.data(), file.size(), text.c_str(), _TRUNCATE);
    }

    wide.lpstrFilter = filter.empty() ? nullptr : filter.c_str();
    wide.lpstrInitialDir = initial.empty() ? nullptr : initial.c_str();
    wide.lpstrDefExt = defExt.empty() ? nullptr : defExt.c_str();
    wide.lpstrTitle = title.empty() ? nullptr : title.c_str();
    wide.lpstrFile = file.data();
    wide.nMaxFile = static_cast<DWORD>(file.size());

    BOOL ok = ShowOpenSave(&wide, true);
    if (ok && ofn->lpstrFile) {
        WideCharToMultiByte(CP_ACP, 0, wide.lpstrFile, -1, ofn->lpstrFile, ofn->nMaxFile, nullptr, nullptr);
        ofn->nFileOffset = wide.nFileOffset;
        ofn->nFileExtension = wide.nFileExtension;
    }

    return ok;
}

static PIDLIST_ABSOLUTE ShowFolder(LPBROWSEINFOW browse) {
    if (!g_replaceFolder || !browse)
        return SHBrowseForFolderW_Original ? SHBrowseForFolderW_Original(browse) : nullptr;

    PickerRequest request;
    request.Folder = true;

    std::vector<std::wstring> paths;
    PickResult result = RunPicker(request, paths);

    if (result == PickResult::NoApp)
        return SHBrowseForFolderW_Original ? SHBrowseForFolderW_Original(browse) : nullptr;

    if (result == PickResult::Cancelled)
        return nullptr;

    PIDLIST_ABSOLUTE pidl = nullptr;
    if (FAILED(SHParseDisplayName(paths[0].c_str(), nullptr, &pidl, 0, nullptr)))
        return nullptr;

    if (browse->pszDisplayName) {
        const wchar_t* name = PathFindFileNameW(paths[0].c_str());
        wcsncpy_s(browse->pszDisplayName, MAX_PATH, name ? name : L"", _TRUNCATE);
    }

    return pidl;
}

static PIDLIST_ABSOLUTE WINAPI SHBrowseForFolderW_Hook(LPBROWSEINFOW browse) {
    return ShowFolder(browse);
}

static PIDLIST_ABSOLUTE WINAPI SHBrowseForFolderA_Hook(LPBROWSEINFOA browse) {
    if (!browse || !g_replaceFolder)
        return SHBrowseForFolderA_Original(browse);

    BROWSEINFOW wide = {};
    wide.hwndOwner = browse->hwndOwner;
    wide.pidlRoot = browse->pidlRoot;
    wide.pszDisplayName = nullptr;
    wide.lpszTitle = nullptr;

    std::vector<wchar_t> displayName(MAX_PATH, L'\0');
    wide.pszDisplayName = displayName.data();

    std::wstring title = Widen(browse->lpszTitle);
    wide.lpszTitle = title.empty() ? nullptr : title.c_str();
    wide.ulFlags = browse->ulFlags;
    wide.lpfn = nullptr;
    wide.lParam = browse->lParam;
    wide.iImage = 0;

    PIDLIST_ABSOLUTE pidl = ShowFolder(&wide);

    if (pidl && browse->pszDisplayName)
        WideCharToMultiByte(CP_ACP, 0, displayName.data(), -1, browse->pszDisplayName, MAX_PATH, nullptr, nullptr);

    return pidl;
}

static void InstallHook(HMODULE module, PCSTR name, void* hook, void** original) {
    if (!module) {
        Wh_Log(L"Module is not loaded for %S", name);
        return;
    }

    FARPROC target = GetProcAddress(module, name);
    if (!target) {
        Wh_Log(L"Export %S was not found", name);
        return;
    }

    if (!Wh_SetFunctionHook(reinterpret_cast<void*>(target), hook, original))
        Wh_Log(L"Could not hook %S", name);
}

BOOL Wh_ModInit() {
    ReadSettings();

    wchar_t self[MAX_PATH];
    if (GetModuleFileNameW(nullptr, self, ARRAYSIZE(self)) > 0 &&
        _wcsicmp(PathFindFileNameW(self), L"YetAnotherFileManager.exe") == 0) {
        // The picker process itself must keep the system dialogs out of its own way.
        return TRUE;
    }

    HMODULE comdlg = LoadLibraryW(L"comdlg32.dll");
    HMODULE shell = GetModuleHandleW(L"shell32.dll");
    if (!shell)
        shell = LoadLibraryW(L"shell32.dll");

    InstallHook(comdlg, "GetOpenFileNameW",
        reinterpret_cast<void*>(GetOpenFileNameW_Hook), reinterpret_cast<void**>(&GetOpenFileNameW_Original));
    InstallHook(comdlg, "GetOpenFileNameA",
        reinterpret_cast<void*>(GetOpenFileNameA_Hook), reinterpret_cast<void**>(&GetOpenFileNameA_Original));
    InstallHook(comdlg, "GetSaveFileNameW",
        reinterpret_cast<void*>(GetSaveFileNameW_Hook), reinterpret_cast<void**>(&GetSaveFileNameW_Original));
    InstallHook(comdlg, "GetSaveFileNameA",
        reinterpret_cast<void*>(GetSaveFileNameA_Hook), reinterpret_cast<void**>(&GetSaveFileNameA_Original));
    InstallHook(shell, "SHBrowseForFolderW",
        reinterpret_cast<void*>(SHBrowseForFolderW_Hook), reinterpret_cast<void**>(&SHBrowseForFolderW_Original));
    InstallHook(shell, "SHBrowseForFolderA",
        reinterpret_cast<void*>(SHBrowseForFolderA_Hook), reinterpret_cast<void**>(&SHBrowseForFolderA_Original));

    return TRUE;
}

void Wh_ModSettingsChanged() {
    ReadSettings();
}

void Wh_ModUninit() {
}
