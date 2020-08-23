# DING AND TONES TODO LIST

## Current tasks

* Tweak text inputs, add length where needed
* Rework controls - remove play button, rethink what buttons are needed
* Infinite scroll on songs (and scales?) - only show "load more" if there is more to load?
* Sorting and searching
* Errors display on inputs
* Move position map to reducer?
* Play song logic should be moved somewhere else?
* Play song logic should be reworked with less forEach?
* Move error handling to react error boundaries
* Loading indicator if needed before song starts playing
* Saving stuff needs minimal conditions?
* Check scales/users/songs for duplicates when saving?

## Bugs

* Problem with loading songs (userId problem in parseGetResponse?)
* Logo svg gets requested on all route changes
* Db connection error handler might not work
* Using input validators for save buttons still allows saving with unsaved inputs, and new song doesn't close title edit open
* Removing user should remove all users songs?

## Design

* Responsive design
* Distinct confirm and cancel buttons
* New buttons for loading songs
* Style songwriter dropdowns
* Dropdowns open when clicking label (difficulty and new song popup)
* Remove line on find songs route? Sticky footer?

## Drum

* Taks or other sounds
* Tongue drum sounds

## Controls

* Printing, format?
* Save to .pdf?

## Chords

* ID and cache chords?

## Songwriter

* Chords
* Dropdown list show all dyads and ding + note combinations?
* Plus and minus one for bpm
* Web worker?

## State/Routes

* Persist working state through local storage?
* Prevent transition away from page if data isn't saved?
* Merge ui reducer actions? Rework actions?

## Backend

* GDPR
* Hosting
* update google json file - hostedDomain on react-google-login?

## Low priority

* What happens when you change to a scale with less notes than pattern needs? Overflow notes doesn't play right now. What should happen? Move all notes of type?
* Update delete icons if user logs in after app is loaded
* Derive lengthInBeats (and other values?) from metre instead of db?
* Dynamic size for tonefields
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
* Add virtual label field for songs and use it for search results?
* Better Loading component
* Likes and/or comments?
* Show your own scales/songs
* Move user sign in logic to reducer

## Even lower priority

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
