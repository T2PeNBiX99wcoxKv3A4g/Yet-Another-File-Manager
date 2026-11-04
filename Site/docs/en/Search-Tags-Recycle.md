# Search, tags and the recycle bin

## Search

`Ctrl+F` opens a floating find bar over the current folder. It filters as you type, and typing a
letter with a folder focused opens it too.

- `Enter` jumps to the next match, `Shift+Enter` to the previous one.
- **Aa** matches case, `.*` treats the query as a regular expression.
- The mode button switches between **Dim** (non-matching rows fade) and **Hide** (they disappear).
- `Esc` closes the bar and restores the folder.

Search only looks at the folder on screen; it does not walk subfolders.

## Tags

Tags are stored per folder, in that folder's index, and the catalogue in
[Settings](Settings-and-Shortcuts) → Tags lists every tag the app has seen.

- Click the tag cell of a row, or use the tag button in the details panel, to open the picker.
- Tick the tags you want, add a new one in the text box, and pick a colour per tag.
- Renaming or removing a tag in the catalogue updates every folder that used it.
- A tag's colour is remembered in the folder it was set in, so the same tag can look different in
  another folder if you choose so.

## Recycle bin

The recycle bin reads the system's own trash: the Windows Recycle Bin or the freedesktop trash on
Linux.

- **Restore** puts the selected items back where they came from.
- **Delete** removes the selected items permanently; **Empty** clears the whole bin.
- The **Orphans** switch shows records whose file is already gone, which can then be removed.
- **Show all (admin)** asks for administrator rights and lists the leftovers of every user profile;
  without it only your own entries are shown.

Restoring works when the original folder still exists; otherwise the item stays in the bin and the
row explains why. Deleting from the recycle bin cannot be undone.
