# DING AND TONES TODO LIST

## Current tasks

* Check isDeleting state for scales and songs
* Errors display on inputs
* Rework controls - remove play button, rethink what buttons are needed
* Add account page - prompt to change name if new user
* Select drum type - pan or tongue, etc.
* Move position map to reducer?
* What happens when you change to a scale with less notes than pattern needs?
* Remove devtools in production
* Play song logic should be moved somewhere else?
* Play song logic should be reworked with less forEach
* Move error handling to react error boundaries?
* Add headings to search results, or just make a better table

## Bugs

* Fetching scales/songs infinite loop
* App crash when trying to save invalid scale - prevent with validation
* Logo svg gets requested on all route changes - logo is gone sometimes?
* flushDrumState should not be needed
* Db connection error handler might not work
* Using input validators for save buttons still allows saving with unsaved inputs
* Trim scale search results and add api requests instead of loadScale?

## Design

* Responsive design
* Distinct confirm and cancel buttons
* Style songwriter dropdowns
* Dropdowns open even if clicking label (difficulty)

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
* Show your own scales/songs

## OTHER

### State/Routes

* Persist working state through local storage?
* Prevent transition away from page if data isn't saved?
* Merge ui reducer actions? Rework actions?

### Backend

* GDPR
* Hosting
* update google json file - hostedDomain on react-google-login?

### Low priority

* Check text inputs for bad words?
* Update url when loading things and/or share by link - check param vs id?
* Keyboard shortcuts on new song (and other?) popup
* Rework metre template, split into beats?
* Triplets, flams, etc. Value 9, 17 for triplets?
* Pagination for search results, infinite scroll?
* Add play scale button and function
* Keyboard shortcuts for playing drum (or songwriter)
* Handle extra/bottom notes
* Play chords, also play them as arpeggios?
* Sort chords by type?
* Ability to loop songs or repeat bars
* Left and right hand recommendations for songwriter?
* Interval colors for compound intervals
* Create scale from name and string
* Analytics
* Svgs instead of iconfont?
* Multiple alerts on screen? or just reset timeout and show newest?
* Check scales for duplicates when saving?
* Add virtual label field for songs and use it for search results?
* Better Loading component

### Even lower priority

* Solo bars
* Only show save buttons if there are changes
* Custom chord inputs
* Custom metres
* Comparing scales using tables or other presentations
* Logic for figuring out if a note is a sharp or flat - only flats for now
* Multiple drums for chords, songs etc.
* Swing?
* More drum alternatives?
* Link drum and songwriter
* Animations on drum
* Full screen songwriter?
* One-e-and-a style phonetic rhythm notation on bars?
* Custom line-break bars for users to add to songwriter?
* Songwriter bars alignment should change with big songs
