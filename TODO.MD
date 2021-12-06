# DING AND TONES TODO LIST

## Sorted

### Sound update

* All howls cleanup
* Don't set already loaded howls to status loading when changing scale
* Clean up code

### SoundOptions and howls state rework

* BeatDropdown, keys, drum get round, extra and percussive notes from scale state
* BeatDropdown, keys, drum use howls state when playing sound
* Howls state only handle sound playing and doesn't know about scales and notes
* Howls load and unload as needed
* Handle changing sound sources
* Handle non scale notes in songs in ui state
* Remove old soundOption listeners

### Scale and chord sound

* Play chords from chords page, arpeggio and unison - how to handle inversions?
* Play scale preview from scale page - up and down scale? How to handle temporary howls?
* Bpm for scales and chords? Always constant?
* Stopping and isPlaying for scales and chords? Needed for scales at least - use status state instead of bool (for pattern player to understand what is playing)?
* Key to stop any playing song/scale/chord/sound? Space (reserve for song recorder skips)? Esc?
* Found chords styles on smaller screens
* Dynamic volume when more than one note played at the same time?

### Compare scales

* Table with base scale and one or more scales to compare against
* Logic for figuring out if a scale/note is a sharp or flat - circle of fifths + maj/min detection
* Change root note of scale
* Play scale preview from search results - how are howls handled? Low quality for speed?
* Create scale from name and string

### Local storage

* Local storage hook
* Detect if song has unsaved changes
* Disable save button if there are no changes
* Save to ls if song has unsaved changes
* Debounce ls saves?
* Don't clear songId if song is changed? Only on save?
* Persist changes on redis session? Viable? Interval?
* Prevent/warn transition away from page if data isn't saved?

### Typescript client update

* Update state
* Update components
* Middleware driven state reducers?
* Validation types enum
* Clean up tonefield logic
* Use new scaleFull outside print-chords - done?
* Clean up getNoteText() and Tonefield in general
* Merge api status states (isFetching etc.) in client?
* Clean up rootIndex in parseScaleData
* Remove measure subdivision count?
* Why -1 in UPDATE_SCALE for scale label? Instead of false?
* Save scale on client should be more functional? Promise based redirects like when loading and saving songs? - done?
* Rework scale reducer, max note limit on buttons in scale edit, min note limit in reducer, consolidate!
* Scale and song state should mirror models more closely
* Clean up UI state and reduce number of actions (also for other reducers?)
* Use separate currentSound for patterns and play with clicks or keys?
* "Value" exists in both beat and bar state, remove one?

### Updates in need of planning

* Validate scales before saving, at least 5 tones?
* Styled-components, mix-ins and css variables - portrait mq as mixin - mobile first?
* Testing
* Bar numbers on song viewer? Only long songs?
* Should print view only break before fourths?
* Song recording mode, wait for next key or click, space (or button) skips? How to handle hands?
* Master volume controls
* React router 6

## Unsorted

### Bugs

* Safari print popup bug - print dialog is not blocking/waiting
* Song search results doesn't update if save song changes assigned scale
* If scale is deleted when loading song with scale null is sent back as scale just as if song was loaded without scale. Attach a message to client when this happens.
* Songs without users show up without composer name (and not Anonymous either)
* Violation 'click' handler took xxx ms when going to song route (big songs)
* Scale/song url not found alerts not showing
* Printing on mobile prints entire app and not just iframe
* Songs with deleted scales can still be found in song searches with scale name
* Song query strings and (changed) scale broken?
* Deleting scale (and song?) blocks ability to save scale
* Icons show as text before icon is loaded

### Design

* Errors from backend display on inputs instead of alert?
* Form input errors instead of disabled buttons
* Red borders on errors?
* Checkbox hover effect, all transform: scale hovers...
* Pseudo elements instead of costly transitions
* Use drop shadows for tonefield focus?
* Search result hints should not be alerts
* Better Loading component - big spinner? Spinner on account page save
* Load song button can be seen through table header
* Only small divider lines?
* Add more text labels like in Edit scale component?
* Custom ref for popup anchor
* Add x close button to popups?
* Select boxes dynamic width
* New buttons for loading songs and confirm/cancel
* BtnPrimary on mobile
* Slider disabled default cursor
* Sign in with privacy open on mobile messed up layout
* Height of app on low res laptops

### Focus and keyboard

* Disable focus for icons attached to edit only text boxes
* Fix primary button focus after click
* Handle focus on modals - enter should confirm modal? enter should exit from input?
* Better keyboard navigation for table and dropdown
* Print keyboard shortcut
* Keyboard shortcuts on new song (and other?) popup - done?
* Move focus to beat when closing dropdown?
* Only show keyboard help on non touch?

### User/Menu

* Help leads to facebook thread? Support this page? Discord? Help displays save limit, limits on sign in? Help videos?
* Active state for nav buttons might not need the full pathname

### Drum

* Dynamic size for tonefields
* Hover on drum shows all information about hovered note?
* Option to turn off/use same color for tonefield borders
* Animation for tonefields being played
* Clicks on sounds in beat dropdown animate on drum?
* Loading (isHowlLoaded) animation for single tonefields?

### Intervals

* Hover and tab focus for intervals?
* Add "big" intervals mode
* Add colors to intervals help
* One less plus for octaves in interval list?

### Scale

* Double ding and mutant scales
* Remove isOwner from scale ui state or add ability to save scale changes
* Sign in should update scale ownership if isOwner is kept
* Scale layout prop - not needed? used for double ding?

### Chords

* ID and cache chords?
* Check cache for possible chords to show in filter
* Sort chords
* Show chord notes in scale in interval list?
* Select chords to show in beat dropdown?
* Print chords scale relative steps should be negative before tonic? Remove 0 steps?
* All root notes in chords should be focused on drum (or none)?
* Print list change order of chords?
* Print chords without scale info?
* Scale degrees as chord prefix. And sorting? And filters?

### Songwriter

* Use Tooltip component for beat dropdown?
* Make dropdown higher z than controls, remove need for padding
* Show latest changes (useful when copying and moving bars)
* Undo changes
* Looping/repeats, named bars? Sequencer?
* Get default hand when adding bars?
* Check if loaded songs has saved hands and set hands open accordingly?
* Transpose all notes of type? Some other way to handle scales that don't fit loaded song?
* Plus and minus one for bpm
* User can add line breaks in songwriter?
* Add drag and drop
* Color for hands on tablature
* Option to add note names to tablature
* Help covers solo and mute bars

### State and search

* DRY up search logic - reset search with button or empty search field (cache initial search?)
* Infinite scroll on songs (and scales?) - show "load more" if more songs match query?
* Sorting search results in table
* Privacy date localization
* Beat hasNonScaleNote function should retry if soundOptions is not generated on mount
* Save song as JSON?
* Show if owned song is private in search results?
* Split howls loading status into loaded and error (and error msg)?

### API

* Change query string to keyword search? Atlas search?
* Add difficulty filter to searches
* Count number of bars for search results? Virtual field?
* Auth middleware populates current user
* Cache users in scale searches
* Typescript
* Better profanity filter on save requests
* Store notes in db as note values instead of note names
* Store sharp notes in scale state?
* Clean up all sharp note functions
* mongoose sanitizeFilter instead of current sanitizer?

### Future plans

* Web worker?
* Find songs by user (other than current user)
* Remove users - Removing user should remove all users songs?
* Likes and/or comments?
* Custom chord inputs
* Custom metres
* Custom count for metres, more count styles
* Multiple drums for chords, songs etc. Two track songwriter?
* More drum alternatives? Add synth/piano alternative?
* Multiple alerts on screen? or just reset timeout and show newest? Timeout scales with length of alert?
* Alert mouse over or tap inside stops timer?
* Triplets, flams, etc. Value 9, 17 for triplets?
* Swing? Accents?
* Softer or louder drum hits in songwriter?
* Automate created and updates posts for db documents, timestamps
* Increase max save limits for older accounts
* Favorite songs/scales
* Merge db updates so if one fails both fail (scales/songs for user), must use transactions?
* Print multiple songs on same page
* Print with notes instead of numbers
* Dark mode
* Markdown for help topics
* Percussive handpan sound samples
* Replace setInterval in login popup
* Set howl pool to match size of scale?
* DRY up rc-slider
