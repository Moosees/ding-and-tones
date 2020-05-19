# DING AND TONES TODO LIST

## SIDEBAR

### Drum

* Play the correct note
* Handle non round layouts
* Handle extra/bottom notes
* Keyboard shortcuts?

### Controls

* Design control panel
* Select drum type - pan or tongue, etc.
* Connect to backend
* Printing, format?
* Save to .pdf?
* Web worker?
* Pre-load sounds when loading scale or playing song?

### Intervals

* Make Legend work with chords
* Indicate currently focused interval and ability to switch focus

## MAIN CONTENT

### Scale

* Save/load scale
* Create scale from name and string
* Constants for layouts?
* What happens when you change to a scale with less notes than pattern needs?

### Chords

* Select chords from list
* Chords change displayedNote to root of chord?
* Play chords, also play them as arpeggios?

### Songwriter

* Metre is just informational and default for new bars?
* Only use subdivision for individual bars?
* Debounce and validate bpm
* Rearrange arrangement
* Build custom component instead of html select?
* Modify time signature and subdivision on existing bars
* Chords
* Dropdown list show all dyads and ding + note combinations?
* How do we know if bars are linked?
* Repeats instead of linked bars?

### Find songs

* Sorting/searching
* Likes and/or comments?
* Share song through link?

## OTHER

### State/Redux

* Figure out chord sorting
* Persist working state through local storage?
* Delete bars from bar state or use them as a bank or undo functionality?
* Rename and refactor toggle_show_intervals

### Backend

* Server - express?
* Database - mongoDB?
* Auth/Users - only if you want to save?
* GDPR
* Analytics?
* Hosting

### Sound

* Taks or other sounds
* More drum alternatives?

### Design

* Colors, fonts and stuff
* Responsive design

### Low priority

* Multiple drums for chords, songs etc.
* Comparing scales using tables or other presentations
* Ability to loop songs
* Custom metres
* Custom chord inputs
* ID and cache chords?
* Rethink interval colors, color blindness safe and better bigger intervals
* Logic for figuring out if a note is a sharp or flat - only flats for now
* Show played note on drum?
* Clean up scaleFull array?
* Triplets, flams, etc.
* Swing?
