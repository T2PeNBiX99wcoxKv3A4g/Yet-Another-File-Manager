# Settings and shortcuts

Settings are saved as you change them; there is no Save button. They live in the app's settings
folder, next to the interface language and the tab that was open.

## Application

- **Version** and **Platform** are read-only.
- **Language** switches the interface immediately. *System default* follows the operating system;
  English is the default.
- **Open yafm:// links** registers the app for `yafm://` links for the current user, and repairs the
  registration at every launch while it is on.
- **Reopen the tabs that were open** restores the tabs and the folder each one showed. A folder
  passed on the command line takes over instead.

## Appearance

- **Presets** apply an accent and a secondary colour together. Eight are built in.
- **Add preset** saves the current pair under a name of your choice; the `×` removes a saved preset.
  Presets are stored in the settings file and are not translated.
- **Accent color** and **Secondary color** take any colour, with the recent colours beside the well
  for a quick revert.
- **Reset colors** returns to the default blue and indigo.

## Files view

These are the defaults for folders that have not stored a view of their own:

- The default mode (list or grid), the list icon size and the grid tile height.
- **Selection checkboxes**, **Open with a single click** and **Confirm before deleting**.
- **Play audio in video previews** and **Autoplay video previews**.
- **Preview panel under the list**, and which **Columns** are visible.

A folder remembers its own mode, size and sort order from the title bar; the checkboxes and the
other toggles marked *Global* apply everywhere.

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
| Copy | `Ctrl+C` | Cut | `Ctrl+X` |
| Paste | `Ctrl+V` | Undo | `Ctrl+Z` |
| Redo | `Ctrl+Shift+Z` | Select all | `Ctrl+A` |
| Invert selection | `Ctrl+Shift+A` | Open | `Enter` |
| New folder | `Ctrl+Shift+N` | Rename | `F2` |
| Move to recycle bin | `Del` | Delete permanently | `Shift+Del` |
| Properties | `Alt+Enter` | Refresh | `F5` |
| Icons view | `Ctrl+1` | Details view | `Ctrl+2` |
| Split view | `F3` | Open terminal | `F4` |
| Show hidden files | `Ctrl+H` | Open in a new tab | hold `Ctrl` |

`Ctrl+Shift+T` reopens the tab you closed last, folder and all.

## Icons

- **Use system file icons** asks the shell for each file type's icon instead of the built-in glyph.
- **Use custom folder icons** keeps the `desktop.ini` icon a folder defines for itself.
- **Icons by extension** maps one extension to one built-in icon or image file.
- **Folder icons** gives a single folder an icon of its own.

## Folder index

Every folder can keep a hidden `.yafm-index.db` holding its icons, cached sizes, tags and last
listing, so it opens instantly next time. Turn it off to keep folders free of extra files; the app
then keeps one database in its data folder instead. The notice explains which drive that is.

## Memory

The page shows the process memory and the managed heap, and **Trim now** compacts the heap and
returns unused pages to the system.
