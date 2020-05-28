# DING AND TONES TODO LIST

## SIDEBAR

### Drum

* Play the correct note
* Handle non round layouts
* Keyboard shortcuts?
* Rethink negative and big intervals?

### Controls

* Select drum type - pan or tongue, etc.
* Connect to backend
* Printing, format?
* Save to .pdf?
* Web worker?
* Pre-load sounds when loading scale or playing song?

### Intervals

* Indicate currently focused interval and ability to switch focus?

## MAIN CONTENT

### Scale

* Save/load scale
* Create scale from name and string
* Debounce inputs?
* Transpose up/down
* Constants for layouts?
* What happens when you change to a scale with less notes than pattern needs?
* Intervals and root instead of absolute notes for scaleSimple?

### Chords

* Play chords, also play them as arpeggios?
* Sort chords by type?
* ID and cache chords?

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

### State/Routes

* Persist working state through local storage?
* Prevent transition away from page if data isn't saved?
* Delete bars from bar state or use them as a bank or undo functionality?
* useRouter might not be best solution for navigation?

### Backend

* Server - express?
* Database - mongoDB?
* Auth/Users - only if you want to save?
* GDPR
* Analytics?
* Hosting

### Sound

* Taks or other sounds

### Design

* Colors, fonts and stuff
* Responsive design
* Favicon
* Loading spinners?
* Rethink interval colors, color blindness safe

### Low priority

* Triplets, flams, etc.
* Show played note on drum?
* Handle extra/bottom notes
* Custom metres
* Custom chord inputs
* Select all, select no chords

### Even lower priority

* Ability to loop songs
* Comparing scales using tables or other presentations
* Logic for figuring out if a note is a sharp or flat - only flats for now
* Multiple drums for chords, songs etc.
* Swing?
* Clean up scaleFull array?
* More drum alternatives?
