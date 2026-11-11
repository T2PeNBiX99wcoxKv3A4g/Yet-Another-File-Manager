# Search, tags and the recycle bin

## Search

`Ctrl+F` opens a floating find bar over the current folder. It filters as you type, and typing a
letter with a folder focused opens it too.

- `Enter` jumps to the next match, `Shift+Enter` to the previous one.
- **Aa** matches case, `.*` treats the query as a regular expression.
- The mode button switches between **Dim** (non-matching rows fade) and **Hide** (they disappear).
- The check button selects every matching entry, ready for a copy, move or delete.
- `Esc` closes the bar and restores the folder.

Search only looks at the folder on screen; it does not walk subfolders.

## Tags

Every tag lives in one global catalogue, and each has a colour. A folder's index stores the tag's
id, so renaming or recolouring it changes it everywhere at once.

- Click the tag cell of a row to open the picker, which lists every tag in the catalogue.
- Tick the tags you want; a new name typed in the box creates a tag with the colour beside it.
- [Settings](Settings-and-Shortcuts) → Tags is the catalogue: add a tag, rename one, change its
  colour, or remove it from every folder that uses it.
- A tag looks the same in every folder, because the colour belongs to the tag, not to the folder.

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
