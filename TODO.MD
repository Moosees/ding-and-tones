# DING AND TONES TODO LIST

## Current task

* Bars reducer set metre and subdivision
* Bars reducer update beat
* Dropdown update when beat updates
* Play song with new state
* Add 16ths to metre and everywhere

## SIDEBAR

### Drum

* Taks or other sounds
* Handle non round layouts - separate drum notes from extra notes

### Controls

* Select drum type - pan or tongue, etc.
* Connect to backend
* Printing, format?
* Save to .pdf?
* Web worker?
* Pre-load sounds when loading scale or playing song?

### Intervals

* Interval colors for compound intervals

## MAIN CONTENT

### Scale

* Save/load scale
* Create scale from name and string
* Constants for layouts?
* What happens when you change to a scale with less notes than pattern needs?

### Chords

* ID and cache chords?

### Songwriter

* Scale mode? Only on controls play button?
* Validate length on inputs
* Rearrange arrangement - drag handle?
* Chords
* Dropdown list show all dyads and ding + note combinations?
* Add back copyBarToNext?

### Find songs

* Sorting/searching
* Likes and/or comments?
* Share song through link?

## OTHER

### Bugs

* What to do with deleted bars?

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
* More drum alternatives?
