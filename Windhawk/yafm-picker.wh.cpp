// ==WindhawkMod==
// @id              yafm-picker
// @name            Yet Another File Manager pickers
// @description     Replaces the Windows Open, Save As and folder dialogs with the app's picker
// @version         1.5.1
// @author          T2PeNBiX99wcoxKv3A4g
// @github          https://github.com/T2PeNBiX99wcoxKv3A4g
// @include         *
// @compilerOptions -lole32 -lshell32 -lshlwapi -luuid -luser32
// ==/WindhawkMod==

// ==WindhawkModReadme==
/*
# Yet Another File Manager pickers

Swap every Windows file dialog for the picker from
[Yet Another File Manager](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager).

Install the app first. Without it the mod stays out of the way and each program
keeps its own dialog.

## What changes

- **Open** and **Save As**, including the newer COM dialogs that Discord,
  Telegram, VS Code and most Electron and Qt programs open.
- **Select folder**.
- **Folders a program asks the shell to open**, which would otherwise start File
  Explorer.
- **Programs that start Explorer themselves** with a path, such as a *show in
  Explorer* button, a wallpaper tool opening its folder, or an installer
  revealing where it installed.

The picker opens where the program asked, with its file name, filter and
default extension already filled in, and multi-select still works.

Only local paths are taken over, and only `open` and `explore` verbs. A URL, a
`shell:` location, a `runas` or other verb, or a file that has a program of its
own all go to the shell exactly as before. Arguments are only read when they
belong to Explorer (`/select,<path>`, `/root,<path>`, a bare path); a program
asked to start with arguments of its own is left alone.

## Settings

Six switches: one per dialog type, one for the folders a program hands to the
shell, and one for the programs that start Explorer themselves. Turn one off
and only that part stays native.

## Conflicts

Only one mod can own a dialog. **Modernize Folder Picker Dialog**
(`modernize-folder-picker-dialog`) replaces folder pickers with its own, so
folder pickers stay native while it is on. Turn it off to use this one.

## Limits

- Dialogs opened by an administrator program are not replaced.
- If the app cannot be found, the original dialog is used.
- The WinRT pickers a few Store apps use are not covered.
- Explorer started with no path at all — the taskbar button, the Start menu —
  stays Explorer; only a launch that carries a path is taken over.
- The app itself is left unhooked, so its own *show in Explorer* still opens
  Explorer instead of asking itself.
- A program installed by Steam lives under `steamapps\common`, which Windhawk
  excludes as a well-known game: no mod runs inside it. Add it to Windhawk's
  Process inclusion list (see the notes above the settings) to change that.
*/
// ==/WindhawkModReadme==

// ==WindhawkModSettings==
/*
- Executable: ""
  $name: File manager path
  $description: >-
    Full path to the executable. Leave empty to use the yafm:// handler or the
    default install folder.
- ReplaceOpenFilePickers: true
  $name: Replace Open file pickers
  $description: >-
    Replace GetOpenFileName with the app picker.
- ReplaceSaveFilePickers: true
  $name: Replace Save As pickers
  $description: >-
    Replace GetSaveFileName with the app picker's save mode.
- ReplaceFolderPickers: true
  $name: Replace folder pickers
  $description: >-
    Replace SHBrowseForFolder with the app picker.
- ReplaceModernFilePickers: true
  $name: Replace modern file dialogs
  $description: >-
    Replace IFileOpenDialog and IFileSaveDialog, the dialogs Discord, Telegram
    and most Electron and Qt 6 applications open.
- ReadDialogHook: false
  $name: Read the program's dialog hook for the default type
  $description: >-
    Some programs set the file type inside their dialog hook. When this is on,
    the mod creates the native dialog hidden, lets the hook run, closes it, and
    gives the type it chose to the app picker. Off by default.
- ReplaceExplorerOpens: true
  $name: Open folders with the app
  $description: >-
    Take over the folders a program asks the shell to open, which would otherwise
    start File Explorer. URLs, shell: locations and files with a program of their
    own are left to the shell.
- ReplaceExplorerLaunches: true
  $name: Open Explorer launches with the app
  $description: >-
    Take over the programs that start explorer.exe themselves and pass it a
    path: a "reveal in Explorer" button, a wallpaper tool opening a folder, an
    installer showing where it installed. Turn this off to leave those to File
    Explorer.
*/
// ==/WindhawkModSettings==

#include <windows.h>
#include <commdlg.h>
#include <shellapi.h>
#include <shlobj.h>
#include <shobjidl.h>
#include <shlwapi.h>

#include <new>

#include <string>
#include <utility>
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
    /// Every type the dialog offers, as JSON, so the picker lists them one by one instead of
    /// merging them into one filter. Empty when the dialog named none.
    std::wstring Types;
    /// Which type the dialog had selected, counting from 1.
    int TypeIndex = 0;
};

static bool g_replaceOpen = true;
static bool g_replaceSave = true;
static bool g_replaceFolder = true;
static bool g_replaceModern = true;
static bool g_readDialogHook = false;

static bool g_replaceExplorer = true;
static bool g_replaceExplorerLaunches = true;

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
    g_replaceModern = Wh_GetIntSetting(L"ReplaceModernFilePickers") != 0;
    g_readDialogHook = Wh_GetIntSetting(L"ReadDialogHook") != 0;
    g_replaceExplorer = Wh_GetIntSetting(L"ReplaceExplorerOpens") != 0;
    g_replaceExplorerLaunches = Wh_GetIntSetting(L"ReplaceExplorerLaunches") != 0;
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
    const size_t start = command.find_first_not_of(L" \t");
    if (start == std::wstring::npos)
        return {};

    if (command[start] != L'"') {
        const size_t end = command.find(L' ', start);
        return command.substr(start, end == std::wstring::npos ? end : end - start);
    }

    const size_t end = command.find(L'"', start + 1);
    return end == std::wstring::npos ? std::wstring() : command.substr(start + 1, end - start - 1);
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

/// Adds an argument, quoted, after whatever the command line already holds. The separating space
/// belongs between arguments: a command line that starts with one is read as having an empty
/// program name, and every argument after it shifts by one.
static void AppendQuoted(std::wstring& command, const std::wstring& value) {
    if (!command.empty())
        command += L' ';

    command += L'"';

    size_t backslashes = 0;

    for (wchar_t ch : value) {
        if (ch == L'\\') {
            backslashes++;
            command += ch;
            continue;
        }

        // A run of backslashes in front of a quote is doubled, and the quote itself is escaped.
        if (ch == L'"') {
            command.append(backslashes, L'\\');
            command += L'\\';
        }

        backslashes = 0;
        command += ch;
    }

    // The same applies to the backslashes that sit right before the closing quote, which is what a
    // folder like "H:\\" ends with.
    command.append(backslashes, L'\\');
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

static int ReadTypeIndex(const std::wstring& path) {
    std::wstring text = ReadUtf8File(path);
    int value = 0;

    for (wchar_t ch : text) {
        if (ch < L'0' || ch > L'9')
            break;
        value = value * 10 + (ch - L'0');
        if (value > 10000)
            break;
    }

    return value;
}

static PickResult RunPicker(const PickerRequest& request, std::vector<std::wstring>& paths,
                            int& typeIndex) {
    std::wstring executable = ResolveExecutable();
    if (executable.empty()) {
        Wh_Log(L"picker: no executable could be resolved");
        return PickResult::NoApp;
    }

    std::wstring output = TempOutputPath();
    DeleteFileW(output.c_str());

    // The type the user ended on travels back beside the paths; an older picker never writes it.
    std::wstring typeOutput = output + L".type";
    DeleteFileW(typeOutput.c_str());

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
    if (!request.Types.empty()) {
        command += L" --types";
        AppendQuoted(command, request.Types);
    }
    if (request.TypeIndex > 0) {
        command += L" --type-index";
        command += std::to_wstring(request.TypeIndex);
    }
    command += L" --type-output";
    AppendQuoted(command, typeOutput);
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

    // Windows only lets the foreground process hand the foreground on, and the process asking for
    // the dialog is usually the game that opened it. Without this the picker can appear behind a
    // full-screen game and never be reachable.
    AllowSetForegroundWindow(process.dwProcessId);

    WaitForSingleObject(process.hProcess, INFINITE);
    DWORD code = 1;
    GetExitCodeProcess(process.hProcess, &code);
    CloseHandle(process.hThread);
    CloseHandle(process.hProcess);

    if (code != 0) {
        DeleteFileW(output.c_str());
        DeleteFileW(typeOutput.c_str());
        return PickResult::Cancelled;
    }

    paths = ReadPaths(output);
    typeIndex = ReadTypeIndex(typeOutput);
    DeleteFileW(output.c_str());
    DeleteFileW(typeOutput.c_str());
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

/// One file type a dialog offers: the description the shell shows, the globs behind it, and the
/// bare extensions the picker works with.
struct ModernFileType {
    std::wstring label;
    std::wstring spec;
    std::wstring extensions;
};

/// The extension list the picker takes, from one filter spec: `*.txt;*.png` becomes `.txt;.png`.
/// A spec of `*.*` means "every file" and leaves the list empty, so the picker keeps only its
/// All files entry and does not hide anything behind a "supported files" filter.
static std::wstring ExtensionList(PCWSTR spec) {
    std::wstring result;
    if (!spec)
        return result;

    std::wstring text = spec;
    size_t start = 0;

    while (start <= text.size()) {
        size_t end = text.find(L';', start);
        if (end == std::wstring::npos)
            end = text.size();

        std::wstring pattern = text.substr(start, end - start);
        start = end + 1;

        while (!pattern.empty() && pattern.front() == L' ')
            pattern.erase(0, 1);
        while (!pattern.empty() && pattern.back() == L' ')
            pattern.pop_back();

        if (pattern == L"*" || pattern == L"*.*")
            continue;

        if (!pattern.empty() && pattern[0] == L'*')
            pattern.erase(0, 1);

        if (pattern.empty())
            continue;

        if (!result.empty())
            result.push_back(L';');
        result += pattern;
    }

    return result;
}

/// Escapes one string for the JSON the picker reads from its command line.
static std::wstring JsonString(const std::wstring& value) {
    std::wstring result = L"\"";

    for (wchar_t ch : value) {
        switch (ch) {
        case L'"':
            result += L"\\\"";
            break;
        case L'\\':
            result += L"\\\\";
            break;
        case L'\n':
            result += L"\\n";
            break;
        case L'\r':
            result += L"\\r";
            break;
        case L'\t':
            result += L"\\t";
            break;
        default:
            if (ch >= 0x20)
                result += ch;
            break;
        }
    }

    result += L"\"";
    return result;
}

/// Turns the `.ext;.ext` form back into the JSON array the picker expects.
static std::wstring JsonExtensions(const std::wstring& extensions) {
    std::wstring result = L"[";
    size_t start = 0;

    while (start <= extensions.size()) {
        size_t end = extensions.find(L';', start);
        if (end == std::wstring::npos)
            end = extensions.size();

        std::wstring extension = extensions.substr(start, end - start);
        if (!extension.empty()) {
            if (result.size() > 1)
                result += L',';
            result += JsonString(extension);
        }

        if (end == extensions.size())
            break;

        start = end + 1;
    }

    result += L"]";
    return result;
}

/// The whole type list as JSON, so the picker shows each type on its own instead of one merged
/// filter. The shell dialog keeps its own order, which is what the caller's index refers to.
static std::wstring TypesJson(const std::vector<ModernFileType>& types) {
    if (types.empty())
        return {};

    std::wstring result = L"[";

    for (size_t index = 0; index < types.size(); index++) {
        if (index > 0)
            result += L',';

        result += L"{\"label\":";
        result += JsonString(types[index].label);
        result += L",\"extensions\":";
        result += JsonExtensions(types[index].extensions);
        result += L"}";
    }

    result += L"]";
    return result;
}

/// Reads an OPENFILENAME filter block, which holds a description and its globs per type.
static std::vector<ModernFileType> FilterTypes(LPCWSTR filter) {
    std::vector<ModernFileType> types;
    if (!filter)
        return types;

    const wchar_t* segment = filter;
    while (*segment) {
        std::wstring label = segment;
        segment += wcslen(segment) + 1;
        if (!*segment)
            break;

        std::wstring spec = segment;
        segment += wcslen(segment) + 1;
        types.push_back({label, spec, ExtensionList(spec.c_str())});
    }

    return types;
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

/// The fields a program's dialog hook filled in when it ran once, hidden.
struct HookFields {
    std::wstring Extension;
    std::wstring Name;
    UINT FilterIndex = 0;
};

static thread_local LPOFNHOOKPROC g_callerHook = nullptr;

/// Runs inside the hidden probe dialog: the program's hook first, then hide and cancel.
static UINT_PTR CALLBACK ProbeDialogHook(HWND dialog, UINT message, WPARAM wParam, LPARAM lParam) {
    if (g_callerHook)
        g_callerHook(dialog, message, wParam, lParam);

    if (message == WM_INITDIALOG) {
        ShowWindow(dialog, SW_HIDE);
        PostMessageW(dialog, WM_COMMAND, IDCANCEL, 0);
    }

    return 0;
}

/// <summary>
///     Some programs only set the file type inside their OPENFILENAME hook, which does not run
///     when the mod answers the call itself. With the setting on, the native dialog is created
///     hidden for a moment so the hook can fill the fields, then cancelled, and the picker opens
///     on the type the program really chose. Off by default: a hook is arbitrary caller code.
/// </summary>
static HookFields ReadHookFields(LPOPENFILENAMEW ofn, bool save) {
    HookFields fields;
    if (!g_readDialogHook || !ofn->lpfnHook || (ofn->Flags & OFN_ENABLEHOOK) == 0)
        return fields;

    OPENFILENAMEW probe = *ofn;
    std::vector<wchar_t> file(ofn->nMaxFile ? ofn->nMaxFile : 1, L'\0');
    if (ofn->lpstrFile)
        wcsncpy_s(file.data(), file.size(), ofn->lpstrFile, _TRUNCATE);
    probe.lpstrFile = file.data();

    g_callerHook = ofn->lpfnHook;
    probe.lpfnHook = &ProbeDialogHook;

    if (save)
        GetSaveFileNameW_Original(&probe);
    else
        GetOpenFileNameW_Original(&probe);

    g_callerHook = nullptr;

    fields.FilterIndex = probe.nFilterIndex;
    if (probe.lpstrDefExt && *probe.lpstrDefExt)
        fields.Extension = probe.lpstrDefExt;

    if (probe.lpstrFile) {
        const wchar_t* name = PathFindFileNameW(probe.lpstrFile);
        if (name && *name)
            fields.Name = name;
    }

    return fields;
}

static BOOL ShowOpenSave(LPOPENFILENAMEW ofn, bool save) {
    const bool enabled = save ? g_replaceSave : g_replaceOpen;
    if (!enabled || !ofn || !ofn->lpstrFile || ofn->nMaxFile == 0) {
        Wh_Log(L"classic %s: passing through (enabled=%d, ofn=%d, buffer=%d, size=%u)",
               save ? L"save" : L"open", enabled ? 1 : 0, ofn != nullptr ? 1 : 0,
               ofn && ofn->lpstrFile ? 1 : 0, ofn ? ofn->nMaxFile : 0);
        return CallOpenSaveOriginal(ofn, save);
    }

    const HookFields hooked = ReadHookFields(ofn, save);

    PickerRequest request;
    request.Save = save;
    request.Multiple = !save && (ofn->Flags & OFN_ALLOWMULTISELECT) != 0;
    request.Initial = InitialDirectory(ofn);
    request.Filter = FilterPatterns(ofn->lpstrFilter);
    request.Name = hooked.Name.empty() ? InitialName(ofn->lpstrFile) : hooked.Name;
    request.Extension = !hooked.Extension.empty() ? hooked.Extension : (ofn->lpstrDefExt ? ofn->lpstrDefExt : L"");
    request.Types = TypesJson(FilterTypes(ofn->lpstrFilter));
    request.TypeIndex = hooked.FilterIndex > 0 ? static_cast<int>(hooked.FilterIndex)
                                               : static_cast<int>(ofn->nFilterIndex);

    std::vector<std::wstring> paths;
    int typeIndex = 0;
    PickResult result = RunPicker(request, paths, typeIndex);

    if (typeIndex > 0)
        ofn->nFilterIndex = static_cast<DWORD>(typeIndex);

    if (result == PickResult::NoApp) {
        Wh_Log(L"classic %s: no copy of the app was found, showing the original dialog",
               save ? L"save" : L"open");
        return CallOpenSaveOriginal(ofn, save);
    }

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
    int typeIndex = 0;
    PickResult result = RunPicker(request, paths, typeIndex);

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

// ---------------------------------------------------------------------------
// Explorer opens
//
// Some programs never show a dialog: they hand a folder to the shell and let Explorer
// open it. Those calls end up here, and the app takes the shell's place when the shell
// would really have started Explorer for a local path. A URL, a shell: location, a verb
// with parameters, or a file that has a program of its own all pass through untouched.
// ---------------------------------------------------------------------------

using ShellExecuteExW_t = BOOL(WINAPI*)(SHELLEXECUTEINFOW*);
using ShellExecuteW_t = HINSTANCE(WINAPI*)(HWND, LPCWSTR, LPCWSTR, LPCWSTR, LPCWSTR, INT);
using ShellExecuteExA_t = BOOL(WINAPI*)(SHELLEXECUTEINFOA*);
using ShellExecuteA_t = HINSTANCE(WINAPI*)(HWND, LPCSTR, LPCSTR, LPCSTR, LPCSTR, INT);

static ShellExecuteExW_t ShellExecuteExW_Original;
static ShellExecuteW_t ShellExecuteW_Original;
static ShellExecuteExA_t ShellExecuteExA_Original;
static ShellExecuteA_t ShellExecuteA_Original;

/// A drive path or a UNC share. Anything else is a URL, a shell: location or a bare program
/// name, and only the shell knows what to do with those.
static bool IsLocalPath(const std::wstring& path) {
    if (path.size() < 3)
        return false;

    const bool drive = iswalpha(path[0]) && path[1] == L':' && (path[2] == L'\\' || path[2] == L'/');
    const bool share = path[0] == L'\\' && path[1] == L'\\';

    return drive || share;
}

/// Whether the shell would hand this file to Explorer. Only then is it ours: a document with
/// a program of its own must keep opening in that program.
static bool OpensWithExplorer(const std::wstring& path) {
    wchar_t executable[MAX_PATH];
    DWORD size = ARRAYSIZE(executable);

    if (FAILED(AssocQueryStringW(ASSOCF_NONE, ASSOCSTR_EXECUTABLE, path.c_str(), L"open", executable, &size)))
        return false;

    const wchar_t* name = PathFindFileNameW(executable);
    return name && _wcsicmp(name, L"explorer.exe") == 0;
}

/// Starts the app on a path. A dialog hook waits for the picker because a dialog is modal; an
/// open is not, so this one returns as soon as the app is running.
static bool OpenInApp(const std::wstring& path, HANDLE* process) {
    const std::wstring executable = ResolveExecutable();
    if (executable.empty())
        return false;

    std::wstring command;
    AppendQuoted(command, executable);
    AppendQuoted(command, path);

    std::vector<wchar_t> mutableCommand(command.begin(), command.end());
    mutableCommand.push_back(L'\0');

    STARTUPINFOW startup = {};
    startup.cb = sizeof(startup);

    PROCESS_INFORMATION created = {};
    if (!CreateProcessW(executable.c_str(), mutableCommand.data(), nullptr, nullptr, FALSE, 0, nullptr, nullptr,
            &startup, &created)) {
        Wh_Log(L"explorer open: could not start %s (error %u)", executable.c_str(), GetLastError());
        return false;
    }

    CloseHandle(created.hThread);

    if (process)
        *process = created.hProcess;
    else
        CloseHandle(created.hProcess);

    return true;
}

/// Whether a program name in a call is Explorer itself, wherever it lives.
static bool IsExplorerProgram(const std::wstring& program) {
    if (program.empty())
        return false;

    const wchar_t* name = PathFindFileNameW(program.c_str());
    return name && _wcsicmp(name, L"explorer.exe") == 0;
}

/// A path as it appears inside a command line: quotes and the spaces around them removed.
static std::wstring TrimQuotes(const std::wstring& value) {
    const size_t start = value.find_first_not_of(L" \t\"");
    if (start == std::wstring::npos)
        return {};

    const size_t end = value.find_last_not_of(L" \t\"");
    return value.substr(start, end - start + 1);
}

/// Text from an ANSI call, so the two forms make the same decision in the hooks below.
static std::wstring FromAnsi(LPCSTR value) {
    if (!value || !*value)
        return {};

    const int length = MultiByteToWideChar(CP_ACP, 0, value, -1, nullptr, 0);
    if (length <= 1)
        return {};

    std::wstring result(static_cast<size_t>(length) - 1, L'\0');
    MultiByteToWideChar(CP_ACP, 0, value, -1, result.data(), length);
    return result;
}

/// A file: URL as the path it names, because Explorer accepts both and a program may pass either.
static std::wstring LocalPathOf(const std::wstring& value) {
    if (_wcsnicmp(value.c_str(), L"file:", 5) != 0)
        return value;

    wchar_t path[2048];
    DWORD size = ARRAYSIZE(path);
    return SUCCEEDED(PathCreateFromUrlW(value.c_str(), path, &size, 0)) ? std::wstring(path) : value;
}

/// Splits a command line or a parameter list into its arguments, without the program name.
static std::vector<std::wstring> ArgumentsIn(const std::wstring& command) {
    std::vector<std::wstring> arguments;
    if (command.empty())
        return arguments;

    // CommandLineToArgvW gives its first argument the special treatment of a program name, so a
    // stand-in is put in front: a parameter list is not a command line and would otherwise be
    // split at the quotes inside it.
    const std::wstring line = L"yafm " + command;

    int count = 0;
    LPWSTR* parsed = CommandLineToArgvW(line.c_str(), &count);
    if (!parsed)
        return arguments;

    for (int index = 1; index < count; ++index) {
        std::wstring argument = parsed[index];
        // A whole command line starts with the program; a parameter list does not.
        if (index == 1 && IsExplorerProgram(argument))
            continue;
        arguments.push_back(std::move(argument));
    }

    LocalFree(parsed);
    return arguments;
}

/**
 * The path Explorer was asked to show, if it carries one. Explorer joins a switch to its path with
 * a comma (`/select,"C:\path"`, `/root,C:\path`, `/n,/e,C:\path`), and a bare path opens that
 * folder. Switches without a path and shell GUIDs (`/factory,{...}`) belong to Explorer alone.
 *
 * `select` also answers whether the caller asked for the item to be selected, because a selected
 * file is shown even when opening it would start another program.
 */
static std::wstring ExplorerTarget(const std::vector<std::wstring>& arguments, bool& select) {
    for (const std::wstring& raw : arguments) {
        const std::wstring argument = TrimQuotes(raw);
        if (argument.empty())
            continue;

        if (argument[0] != L'/') {
            const std::wstring path = LocalPathOf(argument);
            if (IsLocalPath(path))
                return path;
            continue;
        }

        const size_t comma = argument.find(L',');
        if (comma == std::wstring::npos)
            continue;

        const std::wstring path = LocalPathOf(TrimQuotes(argument.substr(comma + 1)));
        if (!IsLocalPath(path))
            continue;

        select = _wcsnicmp(argument.c_str(), L"/select", 7) == 0;
        return path;
    }

    return {};
}

/// A call the shell keeps is worth a line in the log when it could have been a folder open, so a
/// program that still starts Explorer can be identified from what it actually asked for.
static bool Declined(const wchar_t* reason, LPCWSTR file, LPCWSTR parameters) {
    const DWORD attributes = file && *file ? GetFileAttributesW(file) : INVALID_FILE_ATTRIBUTES;
    const bool folder = attributes != INVALID_FILE_ATTRIBUTES && (attributes & FILE_ATTRIBUTE_DIRECTORY);

    if (IsExplorerProgram(file ? file : L"") || folder || (parameters && wcsstr(parameters, L"/select"))) {
        Wh_Log(L"explorer: left to the shell (%s) file=\"%s\" args=\"%s\"", reason, file ? file : L"",
            parameters ? parameters : L"");
    }

    return false;
}

/// The decision both entry points share. `mask` is the ShellExecuteEx mask; the plain
/// ShellExecute call carries no mask of its own and passes zero.
static bool TryOpenWithApp(LPCWSTR verb, LPCWSTR file, LPCWSTR parameters, ULONG mask, HANDLE* process) {
    if (!g_replaceExplorer || !file)
        return false;

    // "explore" is what many programs pass when they want a folder window, not a document.
    if (verb && *verb && _wcsicmp(verb, L"open") != 0 && _wcsicmp(verb, L"explore") != 0)
        return Declined(L"verb", file, parameters);

    // These ask for the shell's own handling: a class name or a class key. SEE_MASK_INVOKEIDLIST is
    // not one of them: it still names a path, and it is what most folder opens are made with.
    if (mask & (SEE_MASK_CLASSNAME | SEE_MASK_CLASSKEY))
        return Declined(L"class", file, parameters);

    std::wstring target = file;
    bool select = false;

    // explorer.exe with a path in its arguments: a "reveal in Explorer" button passes
    // "/select,<path>", a wallpaper tool the folder itself. Arguments belong to the program that
    // was asked to start, so a different program with arguments of its own is not ours.
    if (parameters && *parameters) {
        if (!IsExplorerProgram(file))
            return Declined(L"another program and its arguments", file, parameters);
        target = ExplorerTarget(ArgumentsIn(parameters), select);
    }

    target = LocalPathOf(target);

    if (!IsLocalPath(target))
        return Declined(L"not a local path", file, parameters);

    const DWORD attributes = GetFileAttributesW(target.c_str());
    if (attributes == INVALID_FILE_ATTRIBUTES)
        return Declined(L"no such file or folder", file, parameters);

    if (!select && !(attributes & FILE_ATTRIBUTE_DIRECTORY) && !OpensWithExplorer(target))
        return Declined(L"a file with a program of its own", file, parameters);

    if (!OpenInApp(target, process))
        return Declined(L"the app could not be started", file, parameters);

    Wh_Log(L"explorer open: %s", target.c_str());
    return true;
}

static BOOL WINAPI ShellExecuteExW_Hook(SHELLEXECUTEINFOW* info) {
    HANDLE process = nullptr;

    if (!info || !TryOpenWithApp(info->lpVerb, info->lpFile, info->lpParameters, info->fMask, &process))
        return ShellExecuteExW_Original(info);

    info->hInstApp = reinterpret_cast<HINSTANCE>(42);

    if ((info->fMask & SEE_MASK_NOCLOSEPROCESS) != 0) {
        info->hProcess = process;
    } else {
        if (process)
            CloseHandle(process);
        info->hProcess = nullptr;
    }

    return TRUE;
}

static HINSTANCE WINAPI ShellExecuteW_Hook(HWND owner, LPCWSTR verb, LPCWSTR file, LPCWSTR parameters,
                                           LPCWSTR directory, INT show) {
    if (TryOpenWithApp(verb, file, parameters, 0, nullptr))
        return reinterpret_cast<HINSTANCE>(42);

    return ShellExecuteW_Original(owner, verb, file, parameters, directory, show);
}

/// The same two calls in their ANSI form, which older C++ programs still use.
static BOOL WINAPI ShellExecuteExA_Hook(SHELLEXECUTEINFOA* info) {
    if (!info)
        return ShellExecuteExA_Original(info);

    const std::wstring verb = FromAnsi(info->lpVerb);
    const std::wstring file = FromAnsi(info->lpFile);
    const std::wstring parameters = FromAnsi(info->lpParameters);

    HANDLE process = nullptr;
    if (!TryOpenWithApp(verb.c_str(), file.c_str(), parameters.c_str(), info->fMask, &process))
        return ShellExecuteExA_Original(info);

    info->hInstApp = reinterpret_cast<HINSTANCE>(42);

    if ((info->fMask & SEE_MASK_NOCLOSEPROCESS) != 0) {
        info->hProcess = process;
    } else {
        if (process)
            CloseHandle(process);
        info->hProcess = nullptr;
    }

    return TRUE;
}

static HINSTANCE WINAPI ShellExecuteA_Hook(HWND owner, LPCSTR verb, LPCSTR file, LPCSTR parameters,
                                           LPCSTR directory, INT show) {
    const std::wstring verbText = FromAnsi(verb);
    const std::wstring fileText = FromAnsi(file);
    const std::wstring parametersText = FromAnsi(parameters);

    if (TryOpenWithApp(verbText.c_str(), fileText.c_str(), parametersText.c_str(), 0, nullptr))
        return reinterpret_cast<HINSTANCE>(42);

    return ShellExecuteA_Original(owner, verb, file, parameters, directory, show);
}

// ---------------------------------------------------------------------------
// Programs that start Explorer themselves
//
// A "reveal in Explorer" button, a wallpaper tool opening a folder and an installer showing where
// it installed do not ask the shell at all: they run explorer.exe and hand it a path. Taking those
// means hooking the process creation every program uses, so the hook recognises Explorer first and
// leaves every other program to the original.
//
// The app itself is never hooked (Wh_ModInit leaves it alone), so its own "show in Explorer" keeps
// opening Explorer: nothing loops, and it needs no special argument to say so.
// ---------------------------------------------------------------------------

using CreateProcessW_t = BOOL(WINAPI*)(LPCWSTR, LPWSTR, LPSECURITY_ATTRIBUTES, LPSECURITY_ATTRIBUTES, BOOL,
    DWORD, LPVOID, LPCWSTR, LPSTARTUPINFOW, LPPROCESS_INFORMATION);
using CreateProcessA_t = BOOL(WINAPI*)(LPCSTR, LPSTR, LPSECURITY_ATTRIBUTES, LPSECURITY_ATTRIBUTES, BOOL,
    DWORD, LPVOID, LPCSTR, LPSTARTUPINFOA, LPPROCESS_INFORMATION);

using SHOpenFolderAndSelectItems_t = HRESULT(WINAPI*)(PCIDLIST_ABSOLUTE, UINT, PCUITEMID_CHILD_ARRAY, DWORD);

static CreateProcessW_t CreateProcessW_Original;
static CreateProcessA_t CreateProcessA_Original;
static SHOpenFolderAndSelectItems_t SHOpenFolderAndSelectItems_Original;

/// The program a CreateProcess call asks for: the explicit name, or the first word of the line.
static std::wstring ProgramIn(LPCWSTR application, LPCWSTR commandLine) {
    if (application && *application)
        return application;

    return commandLine && *commandLine ? ExecutableIn(commandLine) : std::wstring();
}

/// The path a launch of explorer.exe asks for, or nothing when the launch is not ours to take.
static std::wstring ExplorerLaunchTarget(LPCWSTR application, LPCWSTR commandLine) {
    if (!IsExplorerProgram(ProgramIn(application, commandLine)))
        return {};

    bool select = false;
    const std::wstring target = ExplorerTarget(ArgumentsIn(commandLine ? commandLine : L""), select);
    const DWORD attributes = target.empty() ? INVALID_FILE_ATTRIBUTES : GetFileAttributesW(target.c_str());

    if (attributes == INVALID_FILE_ATTRIBUTES)
        return {};

    if (!select && !(attributes & FILE_ATTRIBUTE_DIRECTORY) && !OpensWithExplorer(target))
        return {};

    return target;
}

/// Text for an ANSI call, or nothing when it does not fit the code page and would lose characters.
static std::string ToAnsi(const std::wstring& value) {
    if (value.empty())
        return {};

    const int length = WideCharToMultiByte(CP_ACP, 0, value.c_str(), static_cast<int>(value.size()), nullptr, 0,
        nullptr, nullptr);
    if (length <= 0)
        return {};

    std::string result(static_cast<size_t>(length), '\0');
    WideCharToMultiByte(CP_ACP, 0, value.c_str(), static_cast<int>(value.size()), result.data(), length, nullptr,
        nullptr);

    return FromAnsi(result.c_str()) == value ? result : std::string();
}

static BOOL WINAPI CreateProcessW_Hook(LPCWSTR application, LPWSTR commandLine, LPSECURITY_ATTRIBUTES processAttributes,
                                       LPSECURITY_ATTRIBUTES threadAttributes, BOOL inheritHandles, DWORD flags,
                                       LPVOID environment, LPCWSTR directory, LPSTARTUPINFOW startup,
                                       LPPROCESS_INFORMATION info) {
    if (g_replaceExplorerLaunches && g_replaceExplorer && info) {
        const std::wstring target = ExplorerLaunchTarget(application, commandLine);
        const std::wstring executable = target.empty() ? std::wstring() : ResolveExecutable();

        if (!executable.empty()) {
            // The same call, with the app in Explorer's place: the caller keeps its own flags,
            // environment, working directory and a real process handle.
            std::wstring command = L"\"" + executable + L"\"";
            AppendQuoted(command, target);

            std::vector<wchar_t> mutableCommand(command.begin(), command.end());
            mutableCommand.push_back(L'\0');

            Wh_Log(L"explorer process: %s", target.c_str());

            return CreateProcessW_Original(executable.c_str(), mutableCommand.data(), processAttributes,
                threadAttributes, inheritHandles, flags, environment, directory, startup, info);
        }
    }

    return CreateProcessW_Original(application, commandLine, processAttributes, threadAttributes, inheritHandles,
        flags, environment, directory, startup, info);
}

/// The ANSI form of the same call, which older programs still use.
static BOOL WINAPI CreateProcessA_Hook(LPCSTR application, LPSTR commandLine, LPSECURITY_ATTRIBUTES processAttributes,
                                       LPSECURITY_ATTRIBUTES threadAttributes, BOOL inheritHandles, DWORD flags,
                                       LPVOID environment, LPCSTR directory, LPSTARTUPINFOA startup,
                                       LPPROCESS_INFORMATION info) {
    if (g_replaceExplorerLaunches && g_replaceExplorer && info) {
        const std::wstring commandText = FromAnsi(commandLine);
        const std::wstring target = ExplorerLaunchTarget(FromAnsi(application).c_str(), commandText.c_str());
        const std::wstring executable = target.empty() ? std::wstring() : ResolveExecutable();

        if (!executable.empty()) {
            std::wstring command = L"\"" + executable + L"\"";
            AppendQuoted(command, target);

            const std::string narrowExecutable = ToAnsi(executable);
            const std::string narrowCommand = ToAnsi(command);

            if (!narrowExecutable.empty() && !narrowCommand.empty()) {
                std::vector<char> mutableCommand(narrowCommand.begin(), narrowCommand.end());
                mutableCommand.push_back('\0');

                Wh_Log(L"explorer process (ANSI): %s", target.c_str());

                return CreateProcessA_Original(narrowExecutable.c_str(), mutableCommand.data(), processAttributes,
                    threadAttributes, inheritHandles, flags, environment, directory, startup, info);
            }
        }
    }

    return CreateProcessA_Original(application, commandLine, processAttributes, threadAttributes, inheritHandles,
        flags, environment, directory, startup, info);
}

/// Chrome, VS Code and everything else that "shows a file in its folder" go through this instead of
/// starting Explorer, so it is taken the same way: the item's folder is what the app opens.
static HRESULT WINAPI SHOpenFolderAndSelectItems_Hook(PCIDLIST_ABSOLUTE folder, UINT count,
                                                      PCUITEMID_CHILD_ARRAY items, DWORD flags) {
    wchar_t path[MAX_PATH];

    if (!g_replaceExplorer || !folder || !SHGetPathFromIDListW(folder, path) || !OpenInApp(path, nullptr))
        return SHOpenFolderAndSelectItems_Original(folder, count, items, flags);

    Wh_Log(L"explorer select: %s", path);
    return S_OK;
}

// ---------------------------------------------------------------------------
// IFileOpenDialog / IFileSaveDialog
//
// Programs built on a modern toolkit (Discord, Telegram, most Electron and Qt 6
// applications) do not call the common dialogs above. They create the Common
// Item Dialog through COM and call Show on it. The object handed out here
// answers that call with the app's picker and keeps the chosen paths for
// GetResult / GetResults; everything else the caller sets is remembered so the
// picker opens in the same place and with the same filter.
//
// comdlg32 asks for the same class when it runs an Explorer-style
// GetOpenFileName, and Qt gives up on the whole dialog when Advise fails, so
// the event handler is accepted: the folder change is reported when the picker
// starts, and OnFileOk before Show returns.
// ---------------------------------------------------------------------------


struct ModernDialogState {
    bool save = false;
    FILEOPENDIALOGOPTIONS options = 0;
    std::wstring folder;
    std::wstring name;
    std::wstring extension;
    std::wstring title;
    std::vector<ModernFileType> fileTypes;
    UINT filterIndex = 1;
    std::vector<std::wstring> results;
    std::vector<std::pair<DWORD, IFileDialogEvents*>> listeners;
    DWORD nextCookie = 0;
};

static std::wstring FileNameOf(const std::wstring& path) {
    const wchar_t* name = PathFindFileNameW(path.c_str());
    return name ? name : path;
}

static std::wstring FolderOf(const std::wstring& path) {
    const size_t slash = path.find_last_of(L"\\/");
    if (slash == std::wstring::npos)
        return {};

    if (slash == 2 && path.size() > 1 && path[1] == L':')
        return path.substr(0, 3);

    return path.substr(0, slash);
}

static bool IsDirectory(const std::wstring& path) {
    const DWORD attributes = GetFileAttributesW(path.c_str());
    return attributes != INVALID_FILE_ATTRIBUTES && (attributes & FILE_ATTRIBUTE_DIRECTORY) != 0;
}

static std::wstring ItemPath(IShellItem* item) {
    if (!item)
        return {};

    PWSTR text = nullptr;
    if (FAILED(item->GetDisplayName(SIGDN_FILESYSPATH, &text)) || !text)
        return {};

    std::wstring path = text;
    CoTaskMemFree(text);
    return path;
}

static HRESULT ItemFromPath(const std::wstring& path, IShellItem** item) {
    return SHCreateItemFromParsingName(path.c_str(), nullptr, IID_PPV_ARGS(item));
}

/// An item for a path that does not exist yet, which is what a Save As result is by definition.
/// The shell refuses to build one (`SHCreateItemFromParsingName` answers FILE_NOT_FOUND), but the
/// caller only asks where the file is going to be, and the picker already knows that.
class PathShellItem : public IShellItem {
  public:
    explicit PathShellItem(std::wstring path) : path_(std::move(path)) {}

    HRESULT STDMETHODCALLTYPE QueryInterface(REFIID riid, void** object) override {
        if (!object)
            return E_POINTER;

        if (IsEqualIID(riid, IID_IUnknown) || IsEqualIID(riid, IID_IShellItem)) {
            *object = static_cast<IShellItem*>(this);
            AddRef();
            return S_OK;
        }

        *object = nullptr;
        return E_NOINTERFACE;
    }

    ULONG STDMETHODCALLTYPE AddRef() override {
        return InterlockedIncrement(&references_);
    }

    ULONG STDMETHODCALLTYPE Release() override {
        const ULONG left = InterlockedDecrement(&references_);
        if (left == 0)
            delete this;
        return left;
    }

    HRESULT STDMETHODCALLTYPE BindToHandler(IBindCtx*, REFGUID, REFIID, void** result) override {
        if (result)
            *result = nullptr;
        return E_NOTIMPL;
    }

    HRESULT STDMETHODCALLTYPE GetParent(IShellItem** parent) override {
        if (!parent)
            return E_POINTER;

        *parent = nullptr;
        const std::wstring folder = FolderOf(path_);
        return folder.empty() ? E_FAIL : ItemFromPath(folder, parent);
    }

    /// Everything that shows a name gets the bare file name; everything that shows a location
    /// gets the path. SIGDN_URL also answers with the path: it is what a caller falls back to.
    HRESULT STDMETHODCALLTYPE GetDisplayName(SIGDN form, LPWSTR* name) override {
        if (!name)
            return E_POINTER;

        *name = nullptr;

        std::wstring text;
        switch (form) {
            case SIGDN_NORMALDISPLAY:
            case SIGDN_PARENTRELATIVE:
            case SIGDN_PARENTRELATIVEEDITING:
            case SIGDN_PARENTRELATIVEPARSING:
            case SIGDN_PARENTRELATIVEFORADDRESSBAR:
            case SIGDN_PARENTRELATIVEFORUI:
                text = FileNameOf(path_);
                break;
            default:
                text = path_;
                break;
        }

        const size_t bytes = (text.size() + 1) * sizeof(wchar_t);
        auto buffer = static_cast<LPWSTR>(CoTaskMemAlloc(bytes));
        if (!buffer)
            return E_OUTOFMEMORY;

        memcpy(buffer, text.c_str(), bytes);
        *name = buffer;
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE GetAttributes(SFGAOF mask, SFGAOF* attributes) override {
        if (!attributes)
            return E_POINTER;

        SFGAOF value = SFGAO_FILESYSTEM;
        if (IsDirectory(path_))
            value |= SFGAO_FOLDER;

        *attributes = value & mask;
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE Compare(IShellItem*, SICHINTF, int* order) override {
        if (order)
            *order = 0;
        return E_NOTIMPL;
    }

  private:
    std::wstring path_;
    LONG references_ = 1;
};

/// The item the caller expects for a path: the real one when the file is on disk, and
/// PathShellItem for a Save As target that is not created yet.
static HRESULT CreateItem(const std::wstring& path, IShellItem** item) {
    if (!item)
        return E_POINTER;

    *item = nullptr;

    if (SUCCEEDED(ItemFromPath(path, item)) && *item)
        return S_OK;

    *item = new (std::nothrow) PathShellItem(path);
    return *item ? S_OK : E_OUTOFMEMORY;
}

/// The array behind IFileOpenDialog::GetResults. The shell's own array can only be built from
/// ID lists, which do not exist for a file that has not been saved yet.
class PathShellItemArray : public IShellItemArray {
  public:
    explicit PathShellItemArray(std::vector<std::wstring> paths) : paths_(std::move(paths)) {}

    HRESULT STDMETHODCALLTYPE QueryInterface(REFIID riid, void** object) override {
        if (!object)
            return E_POINTER;

        if (IsEqualIID(riid, IID_IUnknown) || IsEqualIID(riid, IID_IShellItemArray)) {
            *object = static_cast<IShellItemArray*>(this);
            AddRef();
            return S_OK;
        }

        *object = nullptr;
        return E_NOINTERFACE;
    }

    ULONG STDMETHODCALLTYPE AddRef() override {
        return InterlockedIncrement(&references_);
    }

    ULONG STDMETHODCALLTYPE Release() override {
        const ULONG left = InterlockedDecrement(&references_);
        if (left == 0)
            delete this;
        return left;
    }

    HRESULT STDMETHODCALLTYPE BindToHandler(IBindCtx*, REFGUID, REFIID, void** result) override {
        if (result)
            *result = nullptr;
        return E_NOTIMPL;
    }

    HRESULT STDMETHODCALLTYPE GetPropertyStore(GETPROPERTYSTOREFLAGS, REFIID, void** store) override {
        if (store)
            *store = nullptr;
        return E_NOTIMPL;
    }

    HRESULT STDMETHODCALLTYPE GetPropertyDescriptionList(REFPROPERTYKEY, REFIID, void** list) override {
        if (list)
            *list = nullptr;
        return E_NOTIMPL;
    }

    HRESULT STDMETHODCALLTYPE GetAttributes(SIATTRIBFLAGS, SFGAOF, SFGAOF* attributes) override {
        if (attributes)
            *attributes = 0;
        return E_NOTIMPL;
    }

    HRESULT STDMETHODCALLTYPE GetCount(DWORD* count) override {
        if (!count)
            return E_POINTER;

        *count = static_cast<DWORD>(paths_.size());
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE GetItemAt(DWORD index, IShellItem** item) override {
        if (!item)
            return E_POINTER;

        *item = nullptr;
        if (index >= paths_.size())
            return E_INVALIDARG;

        return CreateItem(paths_[index], item);
    }

    HRESULT STDMETHODCALLTYPE EnumItems(IEnumShellItems** items) override {
        if (items)
            *items = nullptr;
        return E_NOTIMPL;
    }

  private:
    std::vector<std::wstring> paths_;
    LONG references_ = 1;
};

static void CollectResults(IFileDialog* dialog, bool multiple, std::vector<std::wstring>& results) {
    if (!dialog)
        return;

    if (multiple) {
        IFileOpenDialog* open = nullptr;
        if (SUCCEEDED(dialog->QueryInterface(IID_PPV_ARGS(&open))) && open) {
            IShellItemArray* array = nullptr;
            if (SUCCEEDED(open->GetResults(&array)) && array) {
                DWORD count = 0;
                array->GetCount(&count);

                for (DWORD i = 0; i < count; i++) {
                    IShellItem* item = nullptr;
                    if (SUCCEEDED(array->GetItemAt(i, &item)) && item) {
                        std::wstring path = ItemPath(item);
                        if (!path.empty())
                            results.push_back(path);
                        item->Release();
                    }
                }

                array->Release();
            }

            open->Release();
        }

        if (!results.empty())
            return;
    }

    IShellItem* item = nullptr;
    if (SUCCEEDED(dialog->GetResult(&item)) && item) {
        std::wstring path = ItemPath(item);
        if (!path.empty())
            results.push_back(path);
        item->Release();
    }
}

using CoCreateInstance_t = HRESULT(WINAPI*)(REFCLSID, LPUNKNOWN, DWORD, REFIID, LPVOID*);
static CoCreateInstance_t CoCreateInstance_Original;

/// The original dialog, for the one case the picker cannot answer: no copy of the app.
static HRESULT ShowNativeDialog(HWND owner, ModernDialogState& state) {
    if (!CoCreateInstance_Original)
        return E_FAIL;

    const CLSID& clsid = state.save ? CLSID_FileSaveDialog : CLSID_FileOpenDialog;
    IFileDialog* dialog = nullptr;

    HRESULT hr = CoCreateInstance_Original(clsid, nullptr, CLSCTX_INPROC_SERVER, IID_PPV_ARGS(&dialog));
    if (FAILED(hr) || !dialog)
        return hr;

    if (state.options)
        dialog->SetOptions(state.options);

    if (!state.title.empty())
        dialog->SetTitle(state.title.c_str());

    if (!state.name.empty())
        dialog->SetFileName(state.name.c_str());

    if (!state.extension.empty())
        dialog->SetDefaultExtension(state.extension.c_str());

    std::vector<COMDLG_FILTERSPEC> specs;
    for (const auto& type : state.fileTypes)
        specs.push_back({type.label.c_str(), type.spec.c_str()});

    if (!specs.empty()) {
        dialog->SetFileTypes(static_cast<UINT>(specs.size()), specs.data());
        dialog->SetFileTypeIndex(state.filterIndex);
    }

    if (!state.folder.empty()) {
        IShellItem* folder = nullptr;
        if (SUCCEEDED(ItemFromPath(state.folder, &folder)) && folder) {
            dialog->SetFolder(folder);
            folder->Release();
        }
    }

    hr = dialog->Show(owner);
    if (SUCCEEDED(hr))
        CollectResults(dialog, (state.options & FOS_ALLOWMULTISELECT) != 0, state.results);

    dialog->Release();
    return hr;
}

/// A copy of the registered handlers with a reference each, so one of them may Unadvise from
/// inside a callback.
static std::vector<IFileDialogEvents*> Listeners(ModernDialogState& state) {
    std::vector<IFileDialogEvents*> listeners;
    for (auto& listener : state.listeners) {
        if (!listener.second)
            continue;

        listener.second->AddRef();
        listeners.push_back(listener.second);
    }

    return listeners;
}

static void ReleaseListeners(std::vector<IFileDialogEvents*>& listeners) {
    for (auto* listener : listeners)
        listener->Release();

    listeners.clear();
}

/// The real dialog tells the caller which folder it opened in before it waits for the user, and
/// Firefox starts its clickjacking guard there: a confirmation that arrives less than half a
/// second after that is refused, keeping the dialog open. Starting the picker is what makes the
/// dialog appear, so it stands in for that report, and the guard then measures the wait a person
/// takes in the picker anyway.
static void RaiseFolderChange(ModernDialogState& state, IFileDialog* dialog) {
    auto listeners = Listeners(state);

    for (auto* listener : listeners)
        listener->OnFolderChange(dialog);

    ReleaseListeners(listeners);
}

/// Tells the caller's event handler that the choice is final, the way the real dialog does
/// before Show returns. A handler can still say no, and then the choice is dropped.
static bool RaiseFileOk(ModernDialogState& state, IFileDialog* dialog) {
    auto listeners = Listeners(state);

    bool allowed = true;
    for (auto* listener : listeners) {
        if (listener->OnFileOk(dialog) == S_FALSE)
            allowed = false;
    }

    ReleaseListeners(listeners);

    if (!allowed)
        Wh_Log(L"modern: the caller refused the choice in OnFileOk");

    return allowed;
}

static HRESULT ComposeShow(ModernDialogState& state, HWND owner, IFileDialog* self) {
    Wh_Log(L"modern %s: Show", state.save ? L"save" : L"open");

    PickerRequest request;
    request.Save = state.save;
    request.Folder = !state.save && (state.options & FOS_PICKFOLDERS) != 0;
    request.Multiple = (state.options & FOS_ALLOWMULTISELECT) != 0;
    request.Initial = state.folder;
    request.Name = state.name;
    request.Extension = state.extension;
    request.Types = TypesJson(state.fileTypes);
    request.TypeIndex = static_cast<int>(state.filterIndex);

    if (!state.fileTypes.empty()) {
        const size_t index = state.filterIndex >= 1 && state.filterIndex <= state.fileTypes.size()
                                 ? state.filterIndex - 1
                                 : 0;
        request.Filter = state.fileTypes[index].extensions;
    }

    if (ResolveExecutable().empty()) {
        Wh_Log(L"picker: no executable could be resolved");
        return ShowNativeDialog(owner, state);
    }

    // A caller that refuses a choice keeps its own dialog open, so the picker is started again
    // rather than turning that refusal into a cancel nobody asked for.
    for (int attempt = 0; attempt < 3; attempt++) {
        RaiseFolderChange(state, self);

        std::vector<std::wstring> paths;
        int typeIndex = 0;
        const PickResult result = RunPicker(request, paths, typeIndex);

        if (result == PickResult::Cancelled) {
            Wh_Log(L"modern %s: cancelled", state.save ? L"save" : L"open");
            return HRESULT_FROM_WIN32(ERROR_CANCELLED);
        }

        if (result != PickResult::Picked) {
            Wh_Log(L"modern: no copy of the app was found, showing the original dialog");
            return ShowNativeDialog(owner, state);
        }

        state.results = paths;

        // Report the type the user ended on; the caller reads it from GetFileTypeIndex.
        if (typeIndex > 0)
            state.filterIndex = static_cast<UINT>(typeIndex);

        if (state.save) {
            // The caller asks where the file is going, not just which picker was opened.
            state.name = FileNameOf(paths.front());
            state.folder = FolderOf(paths.front());
        }

        Wh_Log(L"modern %s: picked %s", state.save ? L"save" : L"open", paths.front().c_str());

        if (RaiseFileOk(state, self))
            return S_OK;

        state.results.clear();
        request.Initial = request.Folder ? paths.front() : FolderOf(paths.front());
        request.Name = state.name;
    }

    Wh_Log(L"modern: the caller refused every choice");
    return HRESULT_FROM_WIN32(ERROR_CANCELLED);
}

class PickerDialog;

/// The IFileDialog methods, shared by the three faces the real object exposes. The faces share
/// the dialog state and its reference count, so whatever interface the caller holds sees the same
/// dialog.
template <typename TInterface>
class DialogFace : public TInterface {
  public:
    DialogFace(PickerDialog* owner, ModernDialogState* state) : owner_(owner), state_(state) {}

    HRESULT STDMETHODCALLTYPE QueryInterface(REFIID riid, void** object) override;
    ULONG STDMETHODCALLTYPE AddRef() override;
    ULONG STDMETHODCALLTYPE Release() override;

    HRESULT STDMETHODCALLTYPE Show(HWND owner) override {
        return ComposeShow(*state_, owner, this);
    }

    HRESULT STDMETHODCALLTYPE SetFileTypes(UINT count, const COMDLG_FILTERSPEC* specs) override {
        state_->fileTypes.clear();

        for (UINT i = 0; specs && i < count; i++) {
            ModernFileType type;
            type.label = specs[i].pszName ? specs[i].pszName : L"";
            type.spec = specs[i].pszSpec ? specs[i].pszSpec : L"";
            type.extensions = ExtensionList(specs[i].pszSpec);
            state_->fileTypes.push_back(std::move(type));
        }

        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE SetFileTypeIndex(UINT index) override {
        state_->filterIndex = index;
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE GetFileTypeIndex(UINT* index) override {
        if (!index)
            return E_POINTER;

        *index = state_->filterIndex;
        return S_OK;
    }

    /// Qt refuses to go on when Advise fails, and comdlg32 falls back to its legacy dialog.
    HRESULT STDMETHODCALLTYPE Advise(IFileDialogEvents* events, DWORD* cookie) override {
        if (!cookie)
            return E_POINTER;

        *cookie = 0;
        if (!events)
            return E_INVALIDARG;

        events->AddRef();
        const DWORD value = ++state_->nextCookie;
        state_->listeners.push_back({value, events});
        *cookie = value;

        Wh_Log(L"modern: event handler accepted (cookie %u)", value);
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE Unadvise(DWORD cookie) override {
        for (auto listener = state_->listeners.begin(); listener != state_->listeners.end(); ++listener) {
            if (listener->first != cookie)
                continue;

            if (listener->second)
                listener->second->Release();

            state_->listeners.erase(listener);
            return S_OK;
        }

        return E_INVALIDARG;
    }

    HRESULT STDMETHODCALLTYPE SetOptions(FILEOPENDIALOGOPTIONS options) override {
        state_->options = options;
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE GetOptions(FILEOPENDIALOGOPTIONS* options) override {
        if (!options)
            return E_POINTER;

        *options = state_->options;
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE SetDefaultFolder(IShellItem* folder) override {
        state_->folder = ItemPath(folder);
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE SetFolder(IShellItem* folder) override {
        state_->folder = ItemPath(folder);
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE GetFolder(IShellItem** folder) override {
        if (!folder)
            return E_POINTER;

        *folder = nullptr;
        if (state_->folder.empty())
            return E_FAIL;

        return ItemFromPath(state_->folder, folder);
    }

    HRESULT STDMETHODCALLTYPE GetCurrentSelection(IShellItem** item) override {
        if (!item)
            return E_POINTER;

        *item = nullptr;
        if (!state_->results.empty())
            return CreateItem(state_->results.front(), item);

        return state_->folder.empty() ? E_FAIL : ItemFromPath(state_->folder, item);
    }

    HRESULT STDMETHODCALLTYPE SetFileName(LPCWSTR name) override {
        state_->name = name ? name : L"";
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE GetFileName(LPWSTR* name) override {
        if (!name)
            return E_POINTER;

        *name = nullptr;
        if (state_->name.empty())
            return S_FALSE;

        const size_t bytes = (state_->name.size() + 1) * sizeof(wchar_t);
        auto buffer = static_cast<LPWSTR>(CoTaskMemAlloc(bytes));
        if (!buffer)
            return E_OUTOFMEMORY;

        memcpy(buffer, state_->name.c_str(), bytes);
        *name = buffer;
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE SetTitle(LPCWSTR title) override {
        state_->title = title ? title : L"";
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE SetOkButtonLabel(LPCWSTR) override {
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE SetFileNameLabel(LPCWSTR) override {
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE GetResult(IShellItem** item) override {
        if (!item)
            return E_POINTER;

        *item = nullptr;
        if (state_->results.empty())
            return E_UNEXPECTED;

        return CreateItem(state_->results.front(), item);
    }

    HRESULT STDMETHODCALLTYPE AddPlace(IShellItem*, FDAP) override {
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE SetDefaultExtension(LPCWSTR extension) override {
        state_->extension = extension ? extension : L"";
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE Close(HRESULT) override {
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE SetClientGuid(REFGUID) override {
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE ClearClientData() override {
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE SetFilter(IShellItemFilter*) override {
        return S_OK;
    }

  protected:
    PickerDialog* owner_;
    ModernDialogState* state_;
};

/// The real save dialog also answers IFileOpenDialog, which is how Qt and Chromium read the
/// chosen paths even for Save As.
class OpenFace : public DialogFace<IFileOpenDialog> {
  public:
    using DialogFace::DialogFace;

    HRESULT STDMETHODCALLTYPE GetResults(IShellItemArray** results) override {
        if (!results)
            return E_POINTER;

        *results = nullptr;
        if (state_->results.empty())
            return E_UNEXPECTED;

        *results = new (std::nothrow) PathShellItemArray(state_->results);
        return *results ? S_OK : E_OUTOFMEMORY;
    }

    HRESULT STDMETHODCALLTYPE GetSelectedItems(IShellItemArray** items) override {
        return GetResults(items);
    }
};

class SaveFace : public DialogFace<IFileSaveDialog> {
  public:
    using DialogFace::DialogFace;

    HRESULT STDMETHODCALLTYPE SetSaveAsItem(IShellItem*) override {
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE SetProperties(IPropertyStore*) override {
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE SetCollectedProperties(IPropertyDescriptionList*, BOOL) override {
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE GetProperties(IPropertyStore** properties) override {
        if (properties)
            *properties = nullptr;
        return E_NOTIMPL;
    }

    HRESULT STDMETHODCALLTYPE ApplyProperties(IShellItem*, IPropertyStore*, HWND,
                                              IFileOperationProgressSink*) override {
        return S_OK;
    }
};

class Dialog2Face : public DialogFace<IFileDialog2> {
  public:
    using DialogFace::DialogFace;

    HRESULT STDMETHODCALLTYPE SetCancelButtonLabel(LPCWSTR) override {
        return S_OK;
    }

    HRESULT STDMETHODCALLTYPE SetNavigationRoot(IShellItem*) override {
        return S_OK;
    }
};

class PickerDialog {
  public:
    explicit PickerDialog(bool save) : state_(), open_(this, &state_), save_(this, &state_), dialog2_(this, &state_) {
        state_.save = save;
    }

    ~PickerDialog() {
        for (auto& listener : state_.listeners) {
            if (listener.second)
                listener.second->Release();
        }
    }

    HRESULT QueryInterface(REFIID riid, void** object) {
        if (!object)
            return E_POINTER;

        if (IsEqualIID(riid, IID_IUnknown) || IsEqualIID(riid, IID_IModalWindow) ||
            IsEqualIID(riid, IID_IFileDialog)) {
            *object = static_cast<IFileDialog*>(&open_);
        } else if (IsEqualIID(riid, IID_IFileOpenDialog)) {
            *object = static_cast<IFileOpenDialog*>(&open_);
        } else if (IsEqualIID(riid, IID_IFileSaveDialog)) {
            *object = static_cast<IFileSaveDialog*>(&save_);
        } else if (IsEqualIID(riid, IID_IFileDialog2)) {
            *object = static_cast<IFileDialog2*>(&dialog2_);
        } else {
            *object = nullptr;
            return E_NOINTERFACE;
        }

        AddRef();
        return S_OK;
    }

    ULONG AddRef() {
        return InterlockedIncrement(&references_);
    }

    ULONG Release() {
        const ULONG left = InterlockedDecrement(&references_);
        if (left == 0)
            delete this;
        return left;
    }

  private:
    LONG references_ = 1;
    ModernDialogState state_;
    OpenFace open_;
    SaveFace save_;
    Dialog2Face dialog2_;
};

template <typename TInterface>
HRESULT DialogFace<TInterface>::QueryInterface(REFIID riid, void** object) {
    return owner_->QueryInterface(riid, object);
}

template <typename TInterface>
ULONG DialogFace<TInterface>::AddRef() {
    return owner_->AddRef();
}

template <typename TInterface>
ULONG DialogFace<TInterface>::Release() {
    return owner_->Release();
}

static HRESULT WINAPI CoCreateInstance_Hook(REFCLSID clsid, LPUNKNOWN outer, DWORD context, REFIID riid,
                                            LPVOID* object) {
    if (!g_replaceModern || outer || !object || !CoCreateInstance_Original)
        return CoCreateInstance_Original(clsid, outer, context, riid, object);

    const bool open = g_replaceOpen && IsEqualCLSID(clsid, CLSID_FileOpenDialog);
    const bool save = g_replaceSave && IsEqualCLSID(clsid, CLSID_FileSaveDialog);

    if (!open && !save)
        return CoCreateInstance_Original(clsid, outer, context, riid, object);

    auto* dialog = new (std::nothrow) PickerDialog(save);
    if (!dialog)
        return CoCreateInstance_Original(clsid, outer, context, riid, object);

    const HRESULT hr = dialog->QueryInterface(riid, object);
    dialog->Release();

    if (FAILED(hr)) {
        Wh_Log(L"modern: the caller asked for an interface the picker does not have, using the original");
        return CoCreateInstance_Original(clsid, outer, context, riid, object);
    }

    Wh_Log(L"modern %s: handed out the picker", save ? L"save" : L"open");
    return hr;
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

    // A program that opens a folder does not call a dialog at all: it hands the path to the
    // shell. Both entry points are taken, and TryOpenWithApp decides what is a folder or a file
    // the shell would have given to Explorer.
    InstallHook(shell, "ShellExecuteExW", reinterpret_cast<void*>(ShellExecuteExW_Hook),
        reinterpret_cast<void**>(&ShellExecuteExW_Original));
    InstallHook(shell, "ShellExecuteW", reinterpret_cast<void*>(ShellExecuteW_Hook),
        reinterpret_cast<void**>(&ShellExecuteW_Original));
    InstallHook(shell, "ShellExecuteExA", reinterpret_cast<void*>(ShellExecuteExA_Hook),
        reinterpret_cast<void**>(&ShellExecuteExA_Original));
    InstallHook(shell, "ShellExecuteA", reinterpret_cast<void*>(ShellExecuteA_Hook),
        reinterpret_cast<void**>(&ShellExecuteA_Original));

    // "Show in folder" in a browser or an editor never reaches the shell's execute entry points.
    InstallHook(shell, "SHOpenFolderAndSelectItems", reinterpret_cast<void*>(SHOpenFolderAndSelectItems_Hook),
        reinterpret_cast<void**>(&SHOpenFolderAndSelectItems_Original));

    // explorer.exe started with a path, which is how the programs that do not use the shell at all
    // ask for a window. The hook checks the program name before it looks at anything else.
    InstallHook(GetModuleHandleW(L"kernel32.dll"), "CreateProcessW",
        reinterpret_cast<void*>(CreateProcessW_Hook), reinterpret_cast<void**>(&CreateProcessW_Original));
    InstallHook(GetModuleHandleW(L"kernel32.dll"), "CreateProcessA",
        reinterpret_cast<void*>(CreateProcessA_Hook), reinterpret_cast<void**>(&CreateProcessA_Original));

    // The Common Item Dialog is handed out by COM, so the only place to take it is the
    // activation itself; every other class falls straight through to the original.
    HMODULE combase = LoadLibraryW(L"combase.dll");
    InstallHook(combase, "CoCreateInstance", reinterpret_cast<void*>(CoCreateInstance_Hook),
        reinterpret_cast<void**>(&CoCreateInstance_Original));

    return TRUE;
}

void Wh_ModSettingsChanged() {
    ReadSettings();
}

void Wh_ModUninit() {
}
