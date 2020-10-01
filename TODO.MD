# DING AND TONES TODO LIST

## Current tasks

* Handle denied save requests on client
* Add limit to scales too
* Add way to switch between playing drum and changing interval focus on smaller screens (on all screens). NavSide! NavBtnSide!
* Beat Dropdown text and anchor?
* Saving stuff needs minimal conditions? At least one bar? Max x bars?
* Check scales/users/songs for duplicates when saving? Unique names? Unique usernames? Unique other?
* Send messages back from backend

## Bugs

* Use touch compatible drag and drop

## Minor Bugs

* "not found" alert if initial songs/scales fetch returns empty array, should not happen in real life
* Rare save scale bug (if db.scales is empty?) first save doesn't add itself to results array?
* Res status 400 might not be accurate for some responses, same for 204?
* Load song button can be seen through table header
* Logging in should check scales/songs if you are owner? - and it looks like it does already
* Redirect between chords and drum when resizing? Use same route for all screens?

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
* Divider line css DRY! Container mix-ins
* Remake scale grid layout
* Chords, find and songwriter should mirror MobileDrum layout on smaller screens?
* Nicer shadows
* Svgs instead of iconfont?
* Owner info and C etc.

## Drum

* Taks or other sounds
* Tongue drum sounds

## User/Menu

* Printing, format?
* Save to .pdf?
* Help leads to facebook thread? Support this page? Discord?
* Active state for nav buttons might not need the full pathname
* Don't render popups as children of buttons (no close and active state stuck)?
* Alerts when signing in or out, show alert on load if user has active session?
* Show songs/scales saved and max to user when signing in?

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
* Bar names or index visible (when not locked?)
* Count number of bars for search results? Virtual field?
* Options handling should be moved from arrangement.utils to constants or redux?

## State/Backend

* Persist working state through local storage?
* Prevent transition away from page if data isn't saved?
* Merge ui reducer actions? Rework actions?
* DRY up search logic - reset search with button or empty search field (cache initial search?)
* Infinite scroll on songs (and scales?) - show "load more" if more songs match query?
* Sorting search results in table
* Favorite songs/scales
* Merge db updates so if one fails both fail (scales/songs for user), must use transactions?
* Split save song controller?
* Save scale on client should be more functional?
* Merge api status states (isFetching etc.) in client?
* GDPR and similar, analytics
* update google json file - hostedDomain on react-google-login?
* Derive lengthInBeats (and other values?) from metre instead of db?
* Rework metre template, split into beats?
* Remove isOwner from scale ui state or add ability to save scale changes

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
* Percussive hits on handpan - normalize handpan samples
* Higher quality samples
* Link drum and songwriter - animations?
* Custom line-break bars for users to add to songwriter? Only for printing?
* Songwriter bars alignment should change with big songs
* Sort chords by type?
* Interval colors for compound intervals?
* Multiple alerts on screen? or just reset timeout and show newest?
* Triplets, flams, etc. Value 9, 17 for triplets?
* Swing? Accents?
* Automate created and updates posts for db documents
