# DING AND TONES TODO LIST

## Current tasks

* Sign out on button click - add back button
* Rework and add back sign in boundary?
* Session, JWT?
* Lazy load popup or app depending on route?
* Style sign in button

* New buttons for loading songs and confirm/cancel
* Redesign "select drum mode"
* Margin for info boxes
* Transition mixin, border radius mixin?

* Print - add bar numbers every 4? bars, add scale? Lazy load. Add more margins (with smaller bars)

* One-e-and-a style phonetic rhythm notation on bars?
* Left and right hand recommendations for songwriter?
* Load song without scale
* Save scale on client should be more functional?
* Merge api status states (isFetching etc.) in client?
* Rework scale reducer, max note limit on buttons in scale edit, min note limit in reducer, consolidate!
* Solo bar
* Make lock song more useful for playing song from screen, rename "lock" to something better
* Numbers ('Index') for tonefields

## Bugs

* React-to-print document.write warnings
* Scale name edit remembers input even if scales changes - fix with scale save changes update?
* Drag and drop need testing, drop target size for 16ths
* User can tab select :active outside of popups

## Design

* Better Loading component - big spinner? Spinner on account page save
* Dynamic size for tonefields
* Remake scale grid layout
* Chords, find and songwriter should mirror MobileDrum layout on smaller screens?
* Load song button can be seen through table header
* Line breaks inside bars? Only for printing? User added line breaks?
* Errors from backend display on inputs
* Scrap gradient layout? New layout for bar info?

## User/Menu

* Help leads to facebook thread? Support this page? Discord? Help displays save limit, limits on sign in? Help videos?
* Active state for nav buttons might not need the full pathname
* Don't render popups as children of buttons (no close and active state stuck)?

## Chords

* ID and cache chords?
* Check cache for possible chords to show in filter
* Sort chords

## Songwriter

* Web worker?
* What happens when you change to a scale with less notes than pattern needs? Overflow notes doesn't play right now. What should happen?
* Transpose all notes of type?
* Count number of bars for search results? Virtual field?
* Dropdown list show all dyads and ding + note combinations?
* Dropdown opens where there's space instead of just below beat

## State/Backend

* Persist working state through local storage?
* Prevent/warn transition away from page if data isn't saved?
* Merge ui reducer actions? Rework actions?
* DRY up search logic - reset search with button or empty search field (cache initial search?)
* Change query string to keyword search? Add difficulty filter to searches
* Infinite scroll on songs (and scales?) - show "load more" if more songs match query?
* Sorting search results in table
* Split save song controller?
* Remove isOwner from scale ui state or add ability to save scale changes
* Redirect between chords and drum when resizing? Use same route for all screens?

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
* Move position map to reducer?
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
* Interval colors for compound intervals?
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
