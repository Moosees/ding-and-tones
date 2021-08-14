# DING AND TONES TODO LIST

## Mobile design update

* Scale - split into two routes? Vertical layout?
* Chords/drum - list and filters, vertical layout?
* Songwriter - controls/bars, scroll or fixed pos?
* Find songs - only minor changes?
* Mobile alert position
* Mobile copyright message position
* Mobile menu position
* Possible to use app in portrait mode
* Extra notes look weird on mobile in portrait
* Drum displayed on all routes? Show/hide drum?
* Play button as icon (on mobile drum route)? Not needed after update?

## Typescript client update

* Update state
* Update components
* Play song logic should be moved somewhere else?
* Play song logic should be reworked with less forEach? Play song class
* Validation types enum

## Updates in need of planning

* Styled-components, mix-ins and css variables
* Testing
* Private songs

## Bugs

* Why -1 in UPDATE_SCALE for scale label? Instead of false?
* Safari print popup bug - print dialog is not blocking/waiting
* Song search results doesn't update if save song changes assigned scale
* If scale is deleted when loading song with scale null is sent back as scale just as if song was loaded without scale. Attach a message to client when this happens.
* Songs without users show up without composer name (and not Anonymous either)

## Design

* Search result hints should not be alerts
* Errors from backend display on inputs instead of alert?
* Better Loading component - big spinner? Spinner on account page save
* Load song button can be seen through table header
* Red borders on errors?
* New buttons for loading songs and confirm/cancel
* Checkbox hover effect, all transform: scale hovers...
* Only small divider lines?
* Add more text labels like in Edit scale component?
* Change ScrollBox to list?
* Use drop shadows for tonefield focus?
* Custom ref for popup anchor
* Add x close button to popups?
* Select boxes dynamic width

## Focus and keyboard

* Disable focus for icons attached to edit only text boxes
* Fix primary button focus after click
* Handle focus on modals - enter should confirm modal? enter should exit from input?
* Better keyboard navigation for table and dropdown
* Print keyboard shortcut
* Keyboard shortcuts on new song (and other?) popup - done?
* Move focus to beat when closing dropdown?
* Only show keyboard help on non touch?

## User/Menu

* Help leads to facebook thread? Support this page? Discord? Help displays save limit, limits on sign in? Help videos?
* Active state for nav buttons might not need the full pathname

## Drum

* Dynamic size for tonefields
* Hover on drum shows all information about hovered note?
* Option to turn off/use same color for tonefield borders
* Clean up tonefield logic
* Clean up Tak logic
* Prevent soft and loud taks on same beat?
* Add central Tak for non assigned hand taks? For all Taks?
* Animation for tonefields being played

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
* Remove isOwner from scale ui state or add ability to save scale changes
* Save scale on client should be more functional? Promise based redirects like when loading and saving songs? Sign in should update scale ownership
* Rework scale reducer, max note limit on buttons in scale edit, min note limit in reducer, consolidate!
* Scale layout prop - not needed? used for double ding?

## Chords

* ID and cache chords?
* Check cache for possible chords to show in filter
* Sort chords
* Show chord notes in scale in interval list?
* Select chords to show in beat dropdown?
* Play chords from chords page, also play them as arpeggios?
* Print chords scale relative steps should be negative before tonic? Remove 0 steps?
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
* Clicks on sounds in beat dropdown plays sound selected

## State and search

* Persist working state through local storage? Redis?
* Merge api status states (isFetching etc.) in client?
* Prevent/warn transition away from page if data isn't saved?
* DRY up search logic - reset search with button or empty search field (cache initial search?)
* Infinite scroll on songs (and scales?) - show "load more" if more songs match query?
* Sorting search results in table
* Privacy date localization
* Clean up getNoteText() and Tonefield in general
* Beat hasNonScaleNote function should retry if soundOptions is not generated on mount
* Save song as JSON?
* Use new scaleFull outside print-chords - done?
* Remove measure subdivision count?
* Clean up rootIndex in parseScaleData

## API

* Change query string to keyword search? Atlas search?
* Add difficulty filter to searches
* Count number of bars for search results? Virtual field?
* Auth middleware populates current user
* Cache users in scale searches
* Deal with deleted composers
* Warn user if trying to save or load a song with a deleted scale
* Typescript
* Better profanity filter on save requests

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
* Multiple alerts on screen? or just reset timeout and show newest? Timeout scales with length of alert?
* Triplets, flams, etc. Value 9, 17 for triplets?
* Swing? Accents?
* Automate created and updates posts for db documents
* Increase max save limits for older accounts
* Favorite songs/scales
* Merge db updates so if one fails both fail (scales/songs for user), must use transactions?
* Print multiple songs on same page
* Print with notes instead of numbers
* Dark mode
* Markdown for help topics
