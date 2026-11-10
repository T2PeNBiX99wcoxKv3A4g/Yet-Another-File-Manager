# Settings and shortcuts

Settings are saved as you change them; there is no Save button. They live in the app's settings
folder, next to the interface language and the tab that was open. The list on the left jumps to a
section.

## Application

- **Version**, **Platform** and **Logs**: the build, the runtime it targets, and a button that opens
  the log folder.
- **Language** switches the interface immediately. *System default* follows the operating system;
  English is the default.
- **Picker window size**: the size the folder and file picker opens at, in pixels.
- **Web server port**: *Random* asks the operating system for a free port when the first web share
  starts and keeps using it; *Custom port* always tries the number below.
- **Link paths**: relative links keep working when a link and its target move together; absolute
  links always store the full target path.
- **Global hotkey** brings the window forward from anywhere while the app runs.
- **Open yafm:// links**, **Use as the default file manager** and **Open archives with this app**
  register the app for links, folders and archive files on this account. The first two repair
  themselves at every launch while they are on.
- **Reopen the tabs that were open** restores the tabs and the folder each one showed. A folder
  passed on the command line takes over instead.

## Startup

**Start with the computer** adds the app to the login items, and **Start hidden in the tray** keeps
the window out of the way until it is opened. The entry belongs to this copy: when it points at
another folder, the setting reads **None**, and picking a mode again rewrites it for this copy.

## Fonts and time

Every part of the interface can use a font of its own; all installed fonts are listed, each drawn in
its own face. **Time format** follows the system, forces 24-hour or 12-hour time, or takes a pattern
of your own.

## Updates

The running version, the newest published one, and **Check for updates**.

## Colors and background

- **Presets** apply an accent and a secondary colour together. Eight are built in; **Add preset**
  saves the current pair under a name, and `×` removes a saved one. Presets are not translated.
- **Accent color** and **Secondary color** take any colour, with the recent colours beside the well
  for a quick revert; **Reset colors** returns to the default blue and indigo.
- **Wallpaper** puts a picture or video behind the whole window, from a file or a URL, with **Blur**,
  **Saturation** and **Brightness**.

## Safety

Deleting a **protected folder**, anything inside one, or a folder that contains one always waits for
an explicit confirmation. **Confirmation delay** is how long that confirmation waits before it can be
accepted.

## Tags

The catalogue of every tag: add one, rename it, change its colour, or remove it from every folder
that uses it. [Search, tags and the recycle bin](Search-Tags-Recycle) explains how a tag is applied.

## Files view

The defaults for folders that have not stored a view of their own:

- The default mode (list or grid), the list icon size and the grid tile height.
- **Selection checkboxes**, **Open with a single click** and **Confirm before deleting**.
- **Play audio in video previews** and **Autoplay video previews**.
- **Preview panel under the list**, and which **Columns** are visible.
- **Reset** returns the page to the values it shipped with.

A folder remembers its own mode, size and sort order from the title bar; the toggles marked *Global*
apply everywhere.

## Shortcuts

Click a combination to record a new one, and **Reset** to return every action to its default. The
defaults are:

| Action | Keys | Action | Keys |
| --- | --- | --- | --- |
| Back | `Alt+←` | Forward | `Alt+→` |
| Up one level | `Alt+↑` | Home folder | `Alt+Home` |
| Search | `Ctrl+F` | Edit location | `Ctrl+L` |
| New tab | `Ctrl+T` | Close tab | `Ctrl+W` |
| Next tab | `Ctrl+Tab` | Previous tab | `Ctrl+Shift+Tab` |
| Reopen closed tab | `Ctrl+Shift+T` | Open in a new tab | hold `Ctrl` |
| Copy | `Ctrl+C` | Cut | `Ctrl+X` |
| Paste | `Ctrl+V` | Undo | `Ctrl+Z` |
| Redo | `Ctrl+Shift+Z` | Select all | `Ctrl+A` |
| Invert selection | `Ctrl+Shift+A` | Open | `Enter` |
| New folder | `Ctrl+Shift+N` | Rename | `F2` |
| Move to recycle bin | `Del` | Delete permanently | `Shift+Del` |
| Properties | `Alt+Enter` | Icons view | `Ctrl+1` |
| Details view | `Ctrl+2` | Split view | `F3` |
| Open terminal | `F4` | Show hidden files | `Ctrl+H` |

## Memory

The page shows the process memory and the managed heap, and **Trim now** compacts the heap and
returns unused pages to the system.

## Overview and gallery

- **Recent items** is how many recently opened folders the overview lists; 0 hides the section.
- **Scan folders** are the folders the gallery reads, three levels deep. With none added it reads the
  Pictures folder. [Overview and gallery](Overview-and-Gallery) describes the panels.

## Icons

- **Use system file icons** asks the shell for each file type's icon instead of the built-in glyph.
- **Use custom folder icons** keeps the `desktop.ini` icon a folder defines for itself.
- **Icons by extension** maps one extension to one built-in icon or image file.
- **Folder icons** gives a single folder an icon of its own.

## Folder index

Every folder can keep a hidden `.yafm-index.db` holding its icons, cached sizes, tags and last
listing, so it opens instantly next time. Turn it off to keep folders free of extra files; the app
then keeps one database in its data folder instead. The blacklist rules keep chosen folders from ever
getting one, and the notice explains which drive the database is on.

## Index tasks

The background walks that measure folder sizes and item counts. Each one names the folder it is
working on and can be stopped from here.

## Files

**Hidden items** and **Protected operating system files** follow the file manager's own settings: they
are only listed when the operating system is set to show them. `Ctrl+H` toggles ordinary hidden files
for the session, and system files still follow Explorer.
