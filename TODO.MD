# DING AND TONES TODO LIST

## Current tasks

* Songwriter backend - started
* Errors display on inputs
* Rework controls - remove play button, rethink what buttons are needed
* Add account page - prompt to change name if new user
* Select drum type - pan or tongue, etc.
* Check text inputs for bad words
* Move position map to reducer?
* Show your own scales/songs
* Loading spinners, check for login tried, check for song/scale id param
* What happens when you change to a scale with less notes than pattern needs?

## Bugs

* Save song changes creates new sub docs instead of updating?
* Play song logic should be moved somewhere else?
* Play song logic should be reworked with less forEach
* App crash when trying to save invalid scale - prevent with validation
* Logo svg gets requested on all route changes

## Design

* Responsive design
* Distinct confirm and cancel buttons
* Style songwriter dropdowns

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
* Web worker?

### Find songs

* Sorting/searching
* Likes and/or comments?

## OTHER

### State/Routes

* Persist working state through local storage?
* Prevent transition away from page if data isn't saved?
* Merge ui reducer actions?

### Backend

* GDPR
* Hosting
* update google json file - hostedDomain on react-google-login?
* Handle errors sent to client

### Low priority

* Pagination
* Only show save buttons if there are changes
* Update url when loading things and/or share by link
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
* Analytics
* Svgs instead of iconfont?
* Multiple alerts on screen? or just reset timeout and show newest?
* Check scales for duplicates when saving?

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
