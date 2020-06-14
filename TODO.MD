# DING AND TONES TODO LIST

## Current task

* Inputs for title, etc. Validation
* Style popup

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
* Rearrange arrangement - drag handle?
* Chords
* Dropdown list show all dyads and ding + note combinations?
* Add back copyBarToNext?
* Add back 16ths subdivision
* Plus and minus one for bpm

### Find songs

* Sorting/searching
* Likes and/or comments?
* Share song through link?

## OTHER

### Bugs

* Play song logic should be moved somewhere else?
* Preloading audio needs testing

### State/Routes

* Persist working state through local storage?
* Prevent transition away from page if data isn't saved?
* useRouter might not be best solution for navigation?
* Refactor update found chord in chords reducer to new function
* What to do with deleted bars? Save song only gathers bars "in use"?
* Create selectors and use them for copying bars etc.

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
* Show played note on drum?
* Handle extra/bottom notes
* Custom chord inputs
* Play chords, also play them as arpeggios?
* Sort chords by type?
* Ability to loop songs or repeat bars

### Even lower priority

* Triplets, flams, etc.
* Custom metres
* Comparing scales using tables or other presentations
* Logic for figuring out if a note is a sharp or flat - only flats for now
* Multiple drums for chords, songs etc.
* Swing?
* More drum alternatives?
