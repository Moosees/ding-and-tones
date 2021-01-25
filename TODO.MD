# DING AND TONES TODO LIST

## Current tasks

* New mobile menu layout
* Chords, find and songwriter should mirror MobileDrum layout on smaller screens?
* Transpose all notes of type? Some other way to handle scales that don't fit loaded song?
* One-e-and-a style phonetic rhythm notation on bars?
* Left and right hand recommendations for songwriter?
* Print - Lazy load. Add more margins (with smaller bars)?

## Bugs

* React-to-print document.write warnings
* Scale name edit remembers input even if scales changes - fix with scale save changes update?
* Drag and drop need testing, drop target size for 16ths
* User can tab select :active outside of popups
* Signing in randomly breaks, problem with getGoogleCode?
* Select offsetWidth doesn't set correctly on first load

## Design

* Better Loading component - big spinner? Spinner on account page save
* Dynamic size for tonefields
* Remake scale grid layout
* Load song button can be seen through table header
* Line breaks inside bars? Only for printing? User added line breaks?
* Errors from backend display on inputs (new user email in use, no songs/scales found etc.) add type prop to responses?
* Scale edit hover effect
* New buttons for loading songs and confirm/cancel
* Transition mixin, border radius mixin? All the mix-ins!
* Hover on drum shows all information about hovered note?
* Refactor styled-components

## User/Menu

* Help leads to facebook thread? Support this page? Discord? Help displays save limit, limits on sign in? Help videos?
* Active state for nav buttons might not need the full pathname
* Don't render popups as children of buttons (no close and active state stuck)?
* Interval color legend?
* Interval colors for compound intervals? Check if intervals are working as intended

## Chords

* ID and cache chords?
* Check cache for possible chords to show in filter
* Sort chords
* Show chord notes in scale in interval list?

## Songwriter

* Web worker?
* Count number of bars for search results? Virtual field?
* Dropdown list show all dyads and ding + note combinations?
* Dropdown opens where there's space instead of just below beat
* Solo bar
* Show latest changes (useful when copying and moving bars)
* Undo changes

## State/Backend

* Persist working state through local storage? In session?
* Prevent/warn transition away from page if data isn't saved?
* Merge ui reducer actions? Rework actions?
* DRY up search logic - reset search with button or empty search field (cache initial search?)
* Change query string to keyword search? Add difficulty filter to searches
* Infinite scroll on songs (and scales?) - show "load more" if more songs match query?
* Sorting search results in table
* Split save song controller?
* Remove isOwner from scale ui state or add ability to save scale changes
* Redirect between chords and drum when resizing? Use same route for all screens?
* Save scale on client should be more functional? Promise based redirects like when loading and saving songs? Sign in should update scale ownership
* Merge api status states (isFetching etc.) in client?
* Rework scale reducer, max note limit on buttons in scale edit, min note limit in reducer, consolidate!
* Move position map to reducer?
* Session for logged in users

## Future plans

* Typescript and testing
* Find songs by user (other than current user)
* Chose between save and save as new?
* Disable save button if there are no changes
* Plus and minus one for bpm
* Create scale from name and string
* Loop songs or bars
* Add play scale button and function
* Play chords from chords page, also play them as arpeggios?
* Play song logic should be moved somewhere else?
* Play song logic should be reworked with less forEach?
* Removing user should remove all users songs?
* Keyboard shortcuts on new song (and other?) popup
* Keyboard shortcuts for playing drum (or songwriter)
* Keyboard shortcuts for popups
* Likes and/or comments?
* Handle extra/bottom notes/mutant drums
* Custom chord inputs
* Custom metres
* Comparing scales using tables or other presentations
* Logic for figuring out if a note is a sharp or flat - only flats for now
* Multiple drums for chords, songs etc.
* More drum alternatives? Add synth/piano alternative?
* Percussive hits on handpan - normalize handpan samples
* Higher quality samples
* Link drum and songwriter - animations?
* Songwriter bars alignment should change with big songs
* Multiple alerts on screen? or just reset timeout and show newest? Timeout scales with length of alert?
* Triplets, flams, etc. Value 9, 17 for triplets?
* Swing? Accents?
* Automate created and updates posts for db documents
* Increase max save limits for older accounts
* Favorite songs/scales
* Merge db updates so if one fails both fail (scales/songs for user), must use transactions?
* Check text inputs for bad words?
* Show name for your songs as "you"?
* Print multiple songs on same page
* Bar numbers on song viewer? Only long songs?
