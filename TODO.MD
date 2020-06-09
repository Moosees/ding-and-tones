# DING AND TONES TODO LIST

## SIDEBAR

### Drum

* Taks or other sounds
* Handle non round layouts - separate drum notes from extra notes
* Rethink negative and big intervals? Start with small intervals only?

### Controls

* Select drum type - pan or tongue, etc.
* Connect to backend
* Printing, format?
* Save to .pdf?
* Web worker?
* Pre-load sounds when loading scale or playing song?

### Intervals

* Indicate currently focused interval and ability to switch focus?
* Toggle between big intervals and compound intervals?

## MAIN CONTENT

### Scale

* Save/load scale
* Create scale from name and string
* Constants for layouts?
* What happens when you change to a scale with less notes than pattern needs?

### Chords

* ID and cache chords?

### Songwriter

* Start in scale mode - only write songs after new song is clicked!
* Only use subdivision for individual bars?
* Validate length on inputs
* Rearrange arrangement - drag handle?
* Modify time signature and subdivision on existing bars
* Chords
* Dropdown list show all dyads and ding + note combinations?
* Add back copyBarToNext?

### Find songs

* Sorting/searching
* Likes and/or comments?
* Share song through link?

## OTHER

### Bugs

* Note range should be hardwired to prevent chords or scales from trying to go outside it. Temporary(?) solution in chords.utils line 35 fix and bring back full range in intervals.data
* Bug when changing scale after a chord has been selected. Can't replicate, maybe be sure to clear displayedChord before changing scale? drum.utils nameShort (or color) returns undefined

### State/Routes

* Persist working state through local storage?
* Prevent transition away from page if data isn't saved?
* useRouter might not be best solution for navigation?
* Refactor update found chord in chords reducer to new function

### Backend

* Server - express?
* Database - mongoDB?
* Auth/Users - only if you want to save?
* GDPR
* Analytics?
* Hosting

### Design

* Colors, fonts and stuff
* Responsive design
* Favicon - drum smiley?
* Loading spinners?

### Low priority

* Keyboard shortcuts?
* Triplets, flams, etc.
* Show played note on drum?
* Handle extra/bottom notes
* Custom metres
* Custom chord inputs
* Play chords, also play them as arpeggios?
* Sort chords by type?

### Even lower priority

* Ability to loop songs
* Comparing scales using tables or other presentations
* Logic for figuring out if a note is a sharp or flat - only flats for now
* Multiple drums for chords, songs etc.
* Swing?
* Clean up scaleFull array?
* More drum alternatives?
