# DING AND TONES TODO LIST

## Current tasks

* Save/load scale - in progress
* Connect to backend
* Auth/Users - only if you want to save
* Songwriter backend
* Errors display on inputs
* Rework controls - remove play button, rethink what buttons are needed
* Select drum type - pan or tongue, etc.
* Check text inputs for bad words

## Bugs

* Play song logic should be moved somewhere else?
* Play song logic should be reworked with less forEach
* What happens when you change to a scale with less notes than pattern needs?
* App crash when trying to save invalid scale
* What to do with deleted bars? Save song only gathers bars "in use"?

## Design

* Responsive design
* Loading spinners?
* Distinct confirm and cancel buttons
* Svgs instead of iconfont?

## SIDEBAR

### Drum

* Taks or other sounds

### Controls

* Printing, format?
* Save to .pdf?

## MAIN CONTENT

### Chords

* ID and cache chords?

### Songwriter

* Chords
* Dropdown list show all dyads and ding + note combinations?
* Plus and minus one for bpm
* Share song through link?
* Web worker?
* Show "song has unsaved changes"?

### Find songs

* Sorting/searching
* Likes and/or comments?

## OTHER

### State/Routes

* Persist working state through local storage?
* Prevent transition away from page if data isn't saved?
* useRouter might not be best solution for navigation?
* Merge ui reducer actions?

### Backend

* GDPR
* Analytics?
* Hosting

### Low priority

* Add play scale button and function
* Keyboard shortcuts?
* Handle extra/bottom notes
* Custom chord inputs
* Play chords, also play them as arpeggios?
* Sort chords by type?
* Ability to loop songs or repeat bars
* Link drum and songwriter
* Left and right hand recommendations for songwriter?
* Solo bars
* Interval colors for compound intervals
* Create scale from name and string
* Dropdowns open even if clicking label (difficulty)

### Even lower priority

* Triplets, flams, etc.
* Custom metres
* Comparing scales using tables or other presentations
* Logic for figuring out if a note is a sharp or flat - only flats for now
* Multiple drums for chords, songs etc.
* Swing?
* More drum alternatives?
* Style dropdowns
* Animations on drum
* Full screen songwriter?
* One-e-and-a style phonetic rhythm notation on bars?
* Custom line-break bars for users to add to songwriter?
* Songwriter bars alignment should change with big songs
