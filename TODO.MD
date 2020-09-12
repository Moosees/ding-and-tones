# DING AND TONES TODO LIST

## Current tasks

* Responsive design - started
* Saving stuff needs minimal conditions? At least one bar?
* Check scales/users/songs for duplicates when saving? Limit scales (or songs) each user can save?
* Send messages back from backend

## Bugs

* Db connection error handler might not work
* Rare save scale bug (if db.scales is empty?) first save doesn't add itself to results array?
* "not found" alert if initial songs/scales fetch returns empty array
* Logged out user can still own scales/songs? Update delete icons when logging out - perform a new search when logging out?
* Subdivision dropdown for beats doesn't shrink
* Composer in song state doesn't update when saving songs

## Inputs and useValidate

* Scale name edit remembers input even if scales changes
* Using input validators for save buttons still allows saving with unsaved inputs, and new song doesn't close title edit open
* Why are buttons disabled on songwriter mount? They are waiting for text validation, minor issue for now
* Check text inputs for bad words?
* Errors display on inputs

## Design

* Distinct confirm and cancel buttons
* New buttons for loading songs
* Dropdowns open when clicking label (difficulty and new song popup)
* User can tab select :active outside of popups
* Style text inputs when :focus
* Better Loading component
* Dynamic size for tonefields
* Style text inputs on popups and popups in general
* Always show placeholder for editOnly inputs?
* Full screen songwriter? Or just hide drum on command?

## Drum

* Taks or other sounds
* Tongue drum sounds

## Controls

* Printing, format?
* Save to .pdf?
* Help leads to facebook thread?

## Chords

* ID and cache chords?
* Check cache for possible chords to show in filter
* Intervals for chords should have better descriptions

## Songwriter

* Chords/multiple notes on one beat
* Dropdown list show all dyads and ding + note combinations?
* Web worker?
* What happens when you change to a scale with less notes than pattern needs? Overflow notes doesn't play right now. What should happen? Move all notes of type?
* Left and right hand recommendations for songwriter?
* One-e-and-a style phonetic rhythm notation on bars?

## State/Backend

* Persist working state through local storage?
* Prevent transition away from page if data isn't saved?
* Merge ui reducer actions? Rework actions?
* HTTP codes, 204 should be 404 or something else?
* DRY up search logic - reset search with button or empty search field (cache initial search?)
* Infinite scroll on songs (and scales?) - only show "load more" if there is more to load?
* Sorting search results in table
* Favorite songs/scales
* Merge db updates so if one fails both fail (scales/songs for user), must use transactions?
* Split save song controller
* Save scale on client should be more functional?
* Merge api status states (isFetching etc.) in client?
* GDPR and similar, analytics
* update google json file - hostedDomain on react-google-login?
* Derive lengthInBeats (and other values?) from metre instead of db?
* Rework metre template, split into beats?

## Future plans

* Typescript and testing
* Find songs by user (other than current user)
* Chose between save and save as new?
* Plus and minus one for bpm
* Split MetreControls component?
* Move user sign in logic to reducer
* Create scale from name and string
* Ability to loop songs or repeat/solo bars
* Add play scale button and function
* Play chords, also play them as arpeggios?
* Play song logic should be moved somewhere else?
* Play song logic should be reworked with less forEach?
* Removing user should remove all users songs?
* Keyboard shortcuts on new song (and other?) popup
* Keyboard shortcuts for playing drum (or songwriter)
* Keyboard shortcuts for popups
* Likes and/or comments?
* Move position map to reducer?
* Handle extra/bottom notes/mutant drums
* Disable save button if there are no changes
* Custom chord inputs
* Custom metres
* Comparing scales using tables or other presentations
* Logic for figuring out if a note is a sharp or flat - only flats for now
* Multiple drums for chords, songs etc.
* More drum alternatives?
* Link drum and songwriter - animations?
* Custom line-break bars for users to add to songwriter? Only for printing?
* Songwriter bars alignment should change with big songs
* Sort chords by type?
* Svgs instead of iconfont?
* Interval colors for compound intervals?
* Multiple alerts on screen? or just reset timeout and show newest?
* Triplets, flams, etc. Value 9, 17 for triplets?
* Swing? Accents?
