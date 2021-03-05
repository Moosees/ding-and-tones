# DING AND TONES TODO LIST

## Current tasks

* One-e-and-a style phonetic rhythm notation on bars?
* Typescript
* Use thunk and separate dispatches for alert
* Play song logic should be moved somewhere else?
* Play song logic should be reworked with less forEach?

## Bugs

* React-to-print document.write warnings
* Scale name edit remembers input even if scales changes - fix with scale save changes update?
* User can tab select :active outside of popups
* Login popup and blockers...

## Design

* Better Loading component - big spinner? Spinner on account page save
* Dynamic size for tonefields
* Load song button can be seen through table header
* Line breaks inside bars? Only for printing? User added line breaks?
* Errors from backend display on inputs instead of alert?
* New buttons for loading songs and confirm/cancel
* Hover on drum shows all information about hovered note?
* Refactor styled-components more, mix-ins or css variables?
* Print footer on every page - print margins?
* Checkbox hover effect, all transform: scale hovers...
* Bar numbers on song viewer? Only long songs?

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
* Select chords to show in beat dropdown?
* Play chords from chords page, also play them as arpeggios?

## Songwriter

* Dropdown list show all dyads and ding + note combinations?
* Solo bars? Invert mute/solo?
* Show latest changes (useful when copying and moving bars)
* Undo changes
* Looping
* Get default hand when adding bars?
* Check if loaded songs has saved hands and set hands open accordingly?
* Transpose all notes of type? Some other way to handle scales that don't fit loaded song?
* Plus and minus one for bpm

## State

* Persist working state through local storage? In session?
* Merge ui reducer actions? Rework actions?
* Merge api status states (isFetching etc.) in client?
* Remove isOwner from scale ui state or add ability to save scale changes
* Save scale on client should be more functional? Promise based redirects like when loading and saving songs? Sign in should update scale ownership
* Rework scale reducer, max note limit on buttons in scale edit, min note limit in reducer, consolidate!
* Move position map to reducer?

## Back/frontend logic

* Prevent/warn transition away from page if data isn't saved?
* DRY up search logic - reset search with button or empty search field (cache initial search?)
* Change query string to keyword search? Add difficulty filter to searches
* Infinite scroll on songs (and scales?) - show "load more" if more songs match query?
* Split save song controller?
* Sorting search results in table
* Session for logged in users
* Privacy date localization
* Select boxes dynamic width
* Web worker?
* Count number of bars for search results? Virtual field?

## Future plans

* Testing
* Find songs by user (other than current user)
* Chose between save and save as new?
* Disable save button if there are no changes
* Create scale from name and string
* Add play scale button and function
* Removing user should remove all users songs?
* Keyboard shortcuts on new song (and other?) popup
* Keyboard shortcuts for playing drum (or songwriter)
* Keyboard shortcuts for popups
* Likes and/or comments?
* Handle extra/bottom notes/mutant drums
* Custom chord inputs
* Custom metres
* Comparing scales using tables or other presentations
* Logic for figuring out if a note is a sharp or flat - only flats for now, circle of fifths?
* Multiple drums for chords, songs etc. Two track songwriter?
* More drum alternatives? Add synth/piano alternative?
* Percussive hits on handpan - normalize handpan samples
* Higher quality samples
* Link drum and songwriter - animations?
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
