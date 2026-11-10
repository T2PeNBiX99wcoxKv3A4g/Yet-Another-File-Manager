// ==WindhawkMod==
// @id              yafm-win-e
// @name            Win+E opens Yet Another File Manager
// @description     Swallows Win+E and starts Yet Another File Manager instead of File Explorer
// @version         1.0.0
// @author          T2PeNBiX99wcoxKv3A4g
// @github          https://github.com/T2PeNBiX99wcoxKv3A4g
// @include         windhawk.exe
// @compilerOptions -ladvapi32 -lshell32
// ==/WindhawkMod==

// ==WindhawkModReadme==
/*
# Win+E opens Yet Another File Manager

Windows gives Win+E to File Explorer before any application sees it, so making
Yet Another File Manager the default file manager is not enough: the shell
hotkey still starts Explorer.

This mod runs a low-level keyboard hook in a dedicated process and takes Win+E
away from Explorer before the hotkey reaches it. The key is swallowed, the
Start menu is cancelled the same way AutoHotkey does it, and Yet Another File
Manager is started (or brought forward by its single-instance forwarding).

Extra modifiers are left alone: Ctrl+E, Shift+E and Alt+E still reach the
program that has focus.

## Where the app is found

1. The **File manager path** setting, when it points at an existing file.
2. The `yafm://` handler, if links are enabled in the app's settings.
3. The per-user install folder:
   `%LOCALAPPDATA%\Programs\Yet Another File Manager\YetAnotherFileManager.exe`,
   and the machine-wide `%ProgramFiles%\Yet Another File Manager\` variant.

When none of those exists, Win+E is passed through and Explorer opens as usual.

## Notes

- The mod only works while Windhawk is running, which is the normal state.
- Like every low-level keyboard hook, it cannot see keys while a window of
  higher integrity (an elevated program) has focus.
- If the app is uninstalled, remove the mod or point the setting at another
  copy; otherwise Win+E only goes back to Explorer after the mod is disabled.
*/
// ==/WindhawkModReadme==

// ==WindhawkModSettings==
/*
- Executable: ""
  $name: File manager path
  $description: >-
    Full path to the executable. Leave empty to use the yafm:// handler or the
    default install folder.
- Arguments: ""
  $name: Arguments
  $description: >-
    Command line arguments passed to the app, for example a folder to open.
    Leave empty to let the app restore its own tabs.
*/
// ==/WindhawkModSettings==

#include <windows.h>
#include <shellapi.h>

#include <string>

// The message the keyboard hook posts to its own thread, so the hook itself never
// waits for a process to start.
static constexpr UINT kLaunchMessage = WM_APP + 1;

static HHOOK g_hook = nullptr;
static DWORD g_threadId = 0;
static bool g_suppressE = false;
static std::wstring g_executable;
static std::wstring g_arguments;

static std::wstring GetStringSetting(PCWSTR name) {
    PCWSTR value = Wh_GetStringSetting(name);
    std::wstring result = value ? value : L"";
    if (value) {
        Wh_FreeStringSetting(value);
    }
    return result;
}

static std::wstring ExpandEnvironment(const std::wstring& value) {
    if (value.empty()) {
        return {};
    }

    wchar_t buffer[32768];
    DWORD length = ExpandEnvironmentStringsW(value.c_str(), buffer, ARRAYSIZE(buffer));
    return length > 0 && length <= ARRAYSIZE(buffer) ? std::wstring(buffer, length - 1) : value;
}

static bool FileExists(const std::wstring& path) {
    if (path.empty()) {
        return false;
    }

    DWORD attributes = GetFileAttributesW(path.c_str());
    return attributes != INVALID_FILE_ATTRIBUTES && !(attributes & FILE_ATTRIBUTE_DIRECTORY);
}

/// The executable inside a shell command line: a quoted path, or the first token.
static std::wstring ExecutableIn(const std::wstring& command) {
    if (command.empty()) {
        return {};
    }

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

    if (status != ERROR_SUCCESS || (type != REG_SZ && type != REG_EXPAND_SZ)) {
        return {};
    }

    std::wstring command(value, size / sizeof(wchar_t));
    while (!command.empty() && command.back() == L'\0') {
        command.pop_back();
    }

    return ExecutableIn(ExpandEnvironment(command));
}

static std::wstring ResolveExecutable() {
    std::wstring configured = ExpandEnvironment(GetStringSetting(L"Executable"));
    if (FileExists(configured)) {
        return configured;
    }

    std::wstring registered = FromYafmHandler();
    if (FileExists(registered)) {
        return registered;
    }

    const wchar_t* candidates[] = {
        L"%LOCALAPPDATA%\\Programs\\Yet Another File Manager\\YetAnotherFileManager.exe",
        L"%ProgramFiles%\\Yet Another File Manager\\YetAnotherFileManager.exe",
    };

    for (const wchar_t* candidate : candidates) {
        std::wstring path = ExpandEnvironment(candidate);
        if (FileExists(path)) {
            return path;
        }
    }

    return {};
}

static bool KeyDown(int key) {
    return (GetAsyncKeyState(key) & 0x8000) != 0;
}

/// Releasing Win after a swallowed Win+E would open the Start menu; the unassigned
/// key tells the shell the combination was used, the same trick AutoHotkey uses.
static void CancelStartMenu() {
    INPUT input[2] = {};
    input[0].type = input[1].type = INPUT_KEYBOARD;
    input[0].ki.wVk = input[1].ki.wVk = 0xFF;
    input[1].ki.dwFlags = KEYEVENTF_KEYUP;
    SendInput(ARRAYSIZE(input), input, sizeof(INPUT));
}

static void Launch() {
    if (g_executable.empty()) {
        g_executable = ResolveExecutable();
    }

    if (g_executable.empty()) {
        Wh_Log(L"No Yet Another File Manager executable found");
        return;
    }

    SHELLEXECUTEINFOW info = {};
    info.cbSize = sizeof(info);
    info.fMask = SEE_MASK_FLAG_NO_UI | SEE_MASK_NOASYNC;
    info.lpVerb = L"open";
    info.lpFile = g_executable.c_str();
    info.lpParameters = g_arguments.empty() ? nullptr : g_arguments.c_str();
    info.nShow = SW_SHOWNORMAL;

    if (!ShellExecuteExW(&info)) {
        Wh_Log(L"Could not start %s (error %u)", g_executable.c_str(), GetLastError());
    }
}

static LRESULT CALLBACK KeyboardHook(int code, WPARAM message, LPARAM param) {
    if (code != HC_ACTION) {
        return CallNextHookEx(nullptr, code, message, param);
    }

    const auto* key = reinterpret_cast<const KBDLLHOOKSTRUCT*>(param);
    if (key->vkCode != 'E' || (key->flags & LLKHF_INJECTED)) {
        return CallNextHookEx(nullptr, code, message, param);
    }

    const bool down = message == WM_KEYDOWN || message == WM_SYSKEYDOWN;
    const bool up = message == WM_KEYUP || message == WM_SYSKEYUP;

    if (g_suppressE) {
        if (up) {
            g_suppressE = false;
        }
        return 1;
    }

    // Only a bare Win+E is ours; every other combination keeps its meaning.
    if (!down || (!KeyDown(VK_LWIN) && !KeyDown(VK_RWIN)) ||
        KeyDown(VK_CONTROL) || KeyDown(VK_SHIFT) || KeyDown(VK_MENU)) {
        return CallNextHookEx(nullptr, code, message, param);
    }

    // Without a copy to start, Explorer keeps the key.
    if (!FileExists(g_executable) && (g_executable = ResolveExecutable()).empty()) {
        return CallNextHookEx(nullptr, code, message, param);
    }

    g_suppressE = true;
    CancelStartMenu();
    PostThreadMessageW(g_threadId, kLaunchMessage, 0, 0);
    return 1;
}

static DWORD WINAPI HookThread(void*) {
    MSG message;
    PeekMessageW(&message, nullptr, WM_USER, WM_USER, PM_NOREMOVE);

    g_hook = SetWindowsHookExW(WH_KEYBOARD_LL, KeyboardHook, nullptr, 0);
    if (!g_hook) {
        Wh_Log(L"SetWindowsHookExW failed: %u", GetLastError());
        return 0;
    }

    while (GetMessageW(&message, nullptr, 0, 0) > 0) {
        if (message.message == kLaunchMessage) {
            Launch();
        }
    }

    UnhookWindowsHookEx(g_hook);
    g_hook = nullptr;
    return 0;
}

BOOL WhTool_ModInit() {
    g_executable = ResolveExecutable();
    g_arguments = GetStringSetting(L"Arguments");

    HANDLE thread = CreateThread(nullptr, 0, HookThread, nullptr, 0, &g_threadId);
    if (!thread) {
        Wh_Log(L"CreateThread failed: %u", GetLastError());
        return FALSE;
    }

    return TRUE;
}

void WhTool_ModSettingsChanged() {
    g_executable = ResolveExecutable();
    g_arguments = GetStringSetting(L"Arguments");
}

void WhTool_ModUninit() {
    if (g_threadId) {
        PostThreadMessageW(g_threadId, WM_QUIT, 0, 0);
        g_threadId = 0;
    }
}

////////////////////////////////////////////////////////////////////////////////
// Windhawk tool mod implementation for mods which don't need to inject to other
// processes or hook other functions. Context:
// https://github.com/ramensoftware/windhawk/wiki/Mods-as-tools:-Running-mods-in-a-dedicated-process
//
// The mod will load and run in a dedicated windhawk.exe process.
//
// Paste the code below as part of the mod code, and use these callbacks:
// * WhTool_ModInit
// * WhTool_ModSettingsChanged
// * WhTool_ModUninit
//
// Currently, other callbacks are not supported.

bool g_isToolModProcessLauncher;
HANDLE g_toolModProcessMutex;

void WINAPI EntryPoint_Hook() {
    Wh_Log(L">");
    ExitThread(0);
}

BOOL Wh_ModInit() {
    DWORD sessionId;
    if (ProcessIdToSessionId(GetCurrentProcessId(), &sessionId) && sessionId == 0) {
        return FALSE;
    }

    bool isExcluded = false;
    bool isToolModProcess = false;
    bool isCurrentToolModProcess = false;
    int argc;
    LPWSTR* argv = CommandLineToArgvW(GetCommandLine(), &argc);
    if (!argv) {
        Wh_Log(L"CommandLineToArgvW failed");
        return FALSE;
    }

    for (int i = 1; i < argc; i++) {
        if (wcscmp(argv[i], L"-service") == 0 || wcscmp(argv[i], L"-service-start") == 0 ||
            wcscmp(argv[i], L"-service-stop") == 0) {
            isExcluded = true;
            break;
        }
    }

    for (int i = 1; i < argc - 1; i++) {
        if (wcscmp(argv[i], L"-tool-mod") == 0) {
            isToolModProcess = true;
            if (wcscmp(argv[i + 1], WH_MOD_ID) == 0) {
                isCurrentToolModProcess = true;
            }
            break;
        }
    }

    LocalFree(argv);

    if (isExcluded) {
        return FALSE;
    }

    if (isCurrentToolModProcess) {
        g_toolModProcessMutex = CreateMutex(nullptr, TRUE, L"windhawk-tool-mod_" WH_MOD_ID);
        if (!g_toolModProcessMutex) {
            Wh_Log(L"CreateMutex failed");
            ExitProcess(1);
        }

        if (GetLastError() == ERROR_ALREADY_EXISTS) {
            Wh_Log(L"Tool mod already running (%s)", WH_MOD_ID);
            ExitProcess(1);
        }

        if (!WhTool_ModInit()) {
            ExitProcess(1);
        }

        IMAGE_DOS_HEADER* dosHeader = (IMAGE_DOS_HEADER*)GetModuleHandle(nullptr);
        IMAGE_NT_HEADERS* ntHeaders = (IMAGE_NT_HEADERS*)((BYTE*)dosHeader + dosHeader->e_lfanew);

        DWORD entryPointRVA = ntHeaders->OptionalHeader.AddressOfEntryPoint;
        void* entryPoint = (BYTE*)dosHeader + entryPointRVA;

        Wh_SetFunctionHook(entryPoint, (void*)EntryPoint_Hook, nullptr);
        return TRUE;
    }

    if (isToolModProcess) {
        return FALSE;
    }

    g_isToolModProcessLauncher = true;
    return TRUE;
}

void Wh_ModAfterInit() {
    if (!g_isToolModProcessLauncher) {
        return;
    }

    WCHAR currentProcessPath[MAX_PATH];
    switch (GetModuleFileName(nullptr, currentProcessPath, ARRAYSIZE(currentProcessPath))) {
        case 0:
        case ARRAYSIZE(currentProcessPath):
            Wh_Log(L"GetModuleFileName failed");
            return;
    }

    WCHAR commandLine[MAX_PATH + 2 + (sizeof(L" -tool-mod \"" WH_MOD_ID "\"") / sizeof(WCHAR)) - 1];
    swprintf_s(commandLine, L"\"%s\" -tool-mod \"%s\"", currentProcessPath, WH_MOD_ID);

    HMODULE kernelModule = GetModuleHandle(L"kernelbase.dll");
    if (!kernelModule) {
        kernelModule = GetModuleHandle(L"kernel32.dll");
        if (!kernelModule) {
            Wh_Log(L"No kernelbase.dll/kernel32.dll");
            return;
        }
    }

    using CreateProcessInternalW_t =
        BOOL(WINAPI*)(HANDLE hUserToken, LPCWSTR lpApplicationName, LPWSTR lpCommandLine,
                      LPSECURITY_ATTRIBUTES lpProcessAttributes, LPSECURITY_ATTRIBUTES lpThreadAttributes,
                      WINBOOL bInheritHandles, DWORD dwCreationFlags, LPVOID lpEnvironment,
                      LPCWSTR lpCurrentDirectory, LPSTARTUPINFOW lpStartupInfo,
                      LPPROCESS_INFORMATION lpProcessInformation, PHANDLE hRestrictedUserToken);
    CreateProcessInternalW_t createProcessInternalW = (CreateProcessInternalW_t)GetProcAddress(
        kernelModule, "CreateProcessInternalW");
    if (!createProcessInternalW) {
        Wh_Log(L"No CreateProcessInternalW");
        return;
    }

    STARTUPINFOW startupInfo{
        .cb = sizeof(STARTUPINFOW),
        .dwFlags = STARTF_FORCEOFFFEEDBACK,
    };
    PROCESS_INFORMATION processInformation;
    if (!createProcessInternalW(nullptr, currentProcessPath, commandLine, nullptr, nullptr, FALSE,
                                NORMAL_PRIORITY_CLASS, nullptr, nullptr, &startupInfo,
                                &processInformation, nullptr)) {
        Wh_Log(L"CreateProcess failed");
        return;
    }

    CloseHandle(processInformation.hProcess);
    CloseHandle(processInformation.hThread);
}

void Wh_ModSettingsChanged() {
    if (g_isToolModProcessLauncher) {
        return;
    }

    WhTool_ModSettingsChanged();
}

void Wh_ModUninit() {
    if (g_isToolModProcessLauncher) {
        return;
    }

    WhTool_ModUninit();
    ExitProcess(0);
}
