# DING AND TONES TODO LIST

## Current tasks

* Saving stuff needs minimal conditions?
* Errors display on inputs
* Check scales/users/songs for duplicates when saving? Limit scales (or songs) each user can save?
* Find songs by user
* Show your own scales/songs

## Bugs

* Why are buttons disabled on songwriter mount?
* Db connection error handler might not work
* Using input validators for save buttons still allows saving with unsaved inputs, and new song doesn't close title edit open
* Rare save scale bug (if db.scales is empty?)

## Design

* Responsive design
* Distinct confirm and cancel buttons
* New buttons for loading songs
* Dropdowns open when clicking label (difficulty and new song popup)
* User can tab select :active outside of popups
* Style text inputs when :focus
* Better Loading component
* Dynamic size for tonefields
* Style text inputs on popups and popups in general
* Always show placeholder for editOnly inputs?

## Drum

* Taks or other sounds
* Tongue drum sounds

## Controls

* Printing, format?
* Save to .pdf?

## Chords

* ID and cache chords?
* Check cache for possible chords to show in filter
* Intervals for chords should have better descriptions

## Songwriter

* Chords
* Dropdown list show all dyads and ding + note combinations?
* Web worker?

## State/Routes

* Persist working state through local storage?
* Prevent transition away from page if data isn't saved?
* Merge ui reducer actions? Rework actions?

## Low priority

* HTTP codes, 204 should be 404 or something else?
* DRY up search logic - reset search with button or empty search field (cache initial search?)
* Infinite scroll on songs (and scales?) - only show "load more" if there is more to load?
* Sorting search results in table

* GDPR and similar, analytics
* update google json file - hostedDomain on react-google-login?

* What happens when you change to a scale with less notes than pattern needs? Overflow notes doesn't play right now. What should happen? Move all notes of type?
* Derive lengthInBeats (and other values?) from metre instead of db?
* Rework metre template, split into beats?
* Check text inputs for bad words?
* Left and right hand recommendations for songwriter?

## Even lower priority

* Chose between save and save as new?
* Plus and minus one for bpm
* Split MetreControls component?
* Redirect to url without id on delete song/scale
* Move user sign in logic to reducer
* Create scale from name and string
* Ability to loop songs or repeat bars
* Add play scale button and function
* Play chords, also play them as arpeggios?
* Play song logic should be moved somewhere else?
* Play song logic should be reworked with less forEach?
* Removing user should remove all users songs?
* Keyboard shortcuts on new song (and other?) popup
* Keyboard shortcuts for playing drum (or songwriter)
* Likes and/or comments?
* Move position map to reducer?
* Update delete icons if user logs in after app is loaded
* Handle extra/bottom notes
* Triplets, flams, etc. Value 9, 17 for triplets?
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
* Sort chords by type?
* Svgs instead of iconfont?
* Interval colors for compound intervals?
* Multiple alerts on screen? or just reset timeout and show newest?
