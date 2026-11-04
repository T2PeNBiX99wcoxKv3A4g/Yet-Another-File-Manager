# Files and views

## Tabs

Each tab is its own folder with its own history. Use the `+` button, `Ctrl+T`, or the middle mouse
button on a folder to open one. Drag a tab to reorder it, and close it with `Ctrl+W` or the `×`.

A new tab starts on the overview; a tab opened from a folder starts in that folder.

A closed tab is not gone: `Ctrl+Shift+T` opens it again where it was.

## Split view

Press the split button in the title bar, or `F3`, to show the next file tab beside the current one.
Both sides navigate independently, and the divider can be dragged; double-click it to reset the
width. Closing split view keeps the tab you were working in.

## List and grid

The view menu in the title bar switches between a list and a grid, and sets the icon size (list) or
the tile height (grid). Each folder remembers the mode and size it was last shown with; the values
in [Settings](Settings-and-Shortcuts) are only the defaults for folders that have no opinion yet.

The list is virtualized, so a folder with tens of thousands of entries scrolls without building a
row for every one of them.

## Columns and sorting

Click a column header to sort by it and again to reverse. The view menu chooses which columns are
visible: type, size, modified, created, items, links, link status and tags, plus an optional link
target after the name. The choice is global, while the sort order belongs to the folder.

## Preview panel

Pictures, video, PDFs and text files can be previewed beside the list (details panel) or under it
(preview strip). The details panel also lists size, dates, link targets and attributes for the
selection. Video previews are muted unless you enable audio in
[Settings](Settings-and-Shortcuts).

## File operations

Right-click a file, a folder or the empty background:

- **Open**, **Open in new tab**, **Open with** (including the shell's own *Open with* dialog).
- **Cut**, **Copy**, **Paste**, **Paste into folder**.
- **Rename** (`F2`), **Delete** (`Del`), **Delete permanently** (`Shift+Del`).
- **New folder** (`F10`), **Compress to ZIP**, **Copy as path**.
- **Show in Explorer**, **Open in Terminal**, **Properties**.

Delete moves items to the recycle bin by default; permanent deletion is a separate action and can be
made to ask first in [Settings](Settings-and-Shortcuts). Undo and redo cover the operations made in
the current session.
