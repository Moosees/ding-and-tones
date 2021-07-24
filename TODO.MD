# DING AND TONES TODO LIST

## Beat dropdown keyboard

* Use new keyboard listeners
* useEffect dependency warning? Split dropdown and dropdown item components?
* Escape close dropdown
* Add help for keyboard shortcuts
* Clean up code

## Typescript client update

* Update state
* Update components
* Play song logic should be moved somewhere else?
* Play song logic should be reworked with less forEach? Play song class

## Updates in need of planning

* Styled-components, mix-ins and css variables
* Testing

## Bugs

* Save scale name issues
* Scale name edit remembers input even if scales changes - fix with scale save changes update?
* Why -1 in UPDATE_SCALE for scale label? Instead of false?
* Safari print popup bug - print dialog is not blocking/waiting
* Song search results doesn't update if save song changes assigned scale

## Design

* Better Loading component - big spinner? Spinner on account page save
* Load song button can be seen through table header
* Errors from backend display on inputs instead of alert?
* New buttons for loading songs and confirm/cancel
* Checkbox hover effect, all transform: scale hovers...
* Only small divider lines?
* Delete hover color should be red
* Add more text labels like in Edit scale component?
* Search hints should not be alerts
* Change ScrollBox to list?
* Use drop shadows for tonefield focus?

## Focus and keyboard

* Disable focus for icons attached to edit only text boxes
* Add x close button to popups and esc closes
* Fix primary button focus after click
* Handle focus on modals
* Escape closes modals
* Fix select layouts and add space and enter
* Better keyboard navigation for table and dropdown
* Print keyboard shortcut
* Keyboard shortcuts on new song (and other?) popup
* Keyboard shortcuts for playing drum

## User/Menu

* Help leads to facebook thread? Support this page? Discord? Help displays save limit, limits on sign in? Help videos?
* Active state for nav buttons might not need the full pathname

## Drum

* Dynamic size for tonefields
* Hover on drum shows all information about hovered note?
* Extra notes look weird on mobile in portrait

## Intervals

* Hover and tab focus for intervals?
* Add "big" intervals mode
* Add colors to intervals help
* One less plus for octaves in interval list?

## Scale

* Change root note
* Double ding and mutant scales
* Add play scale button and function
* Create scale from name and string

## Chords

* ID and cache chords?
* Check cache for possible chords to show in filter
* Sort chords
* Show chord notes in scale in interval list?
* Select chords to show in beat dropdown?
* Play chords from chords page, also play them as arpeggios?
* Print chords scale relative steps should be negative before tonic?
* All root notes in chords should be focused on drum (or none)?
* Print list change order of chords?
* Print chords without scale info?

## Songwriter

* Dropdown list show all dyads and ding + note combinations?
* Use Tooltip component for beat dropdown?
* Make dropdown higher z than controls, remove need for padding
* Solo bars? Invert mute/solo?
* Show latest changes (useful when copying and moving bars)
* Undo changes
* Looping
* Get default hand when adding bars?
* Check if loaded songs has saved hands and set hands open accordingly?
* Transpose all notes of type? Some other way to handle scales that don't fit loaded song?
* Plus and minus one for bpm
* Move add bar controls to end of bar list?
* User can add line breaks in songwriter?
* Add drag and drop
* Bar numbers on song viewer? Only long songs?
* Volume controls?
* Should print view only break before fourths?
* Color for hands on tablature
* Remember saved scale option for save song popup

## State

* Persist working state through local storage? Redis?
* Merge api status states (isFetching etc.) in client?
* Remove isOwner from scale ui state or add ability to save scale changes
* Save scale on client should be more functional? Promise based redirects like when loading and saving songs? Sign in should update scale ownership
* Rework scale reducer, max note limit on buttons in scale edit, min note limit in reducer, consolidate!
* Scale layout prop - not needed? used for double ding?
* Prevent/warn transition away from page if data isn't saved?
* DRY up search logic - reset search with button or empty search field (cache initial search?)
* Infinite scroll on songs (and scales?) - show "load more" if more songs match query?
* Sorting search results in table
* Privacy date localization
* Select boxes dynamic width
* Clean up getNoteText() and Tonefield in general
* Beat hasNonScaleNote function should retry if soundOptions is not generated on mount
* Save song as JSON?
* Use new scaleFull outside print-chords - done?
* Remove measure subdivision count?
* Clean up rootIndex in parseScaleData
* Trim titles and names before checking length

## API

* Change query string to keyword search? Add difficulty filter to searches
* Count number of bars for search results? Virtual field?
* Auth middleware populates current user
* Cache users in scale searches
* Add option persist session for 30 days
* Deal with deleted composers
* Warn user if trying to save or load a song with a deleted scale
* Typescript

## Future plans

* Web worker?
* Find songs by user (other than current user)
* Chose between save and save as new?
* Disable save button if there are no changes - done for scales
* Removing user should remove all users songs?
* Likes and/or comments?
* Custom chord inputs
* Custom metres
* Custom count for metres, more count styles
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
* Print multiple songs on same page
* Print with notes instead of numbers
* Dark mode
