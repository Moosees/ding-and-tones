# DING AND TONES TODO LIST

## Sorted by release

### Fixes update

* Fix dropdown opening position and change on scroll or resize
* Better dropdown handler?
* Add bass octave
* Save scale on client should be more functional? Promise based redirects like when loading and saving songs? - done?
* "Value" exists in both beat and bar state, remove one?
* Disable play button if no bars or all bars are muted
* for of instead of forEach?
* Check useSelects where beat, song, bar, etc. ids are used for unnecessary rerenders
* Should updateMeasureAndBeats run even if new and old subdivision lengths match? Only run update on a beat to beat basis?
* Use new scaleFull outside print-chords - done?

### Home page and nav update

* Add home page with recent changes, user info etc.
* Active state for nav buttons might not need the full pathname
* Faulty routes navigate to safe routes, find/:id navigates to song/:id
* create keyboard layout image? use dynamic key names?
* Show save limits for scale and song

### Logic and state update

* Callbacks for setState
* Refactor scale.utils (redux)?
* Abort states for all axios requests
* SongById try catch?
* Clean up tonefield logic
* Clean up getNoteText() and Tonefield in general
* Merge api status states (isFetching etc.) in client?
* Middleware driven state reducers?
* Clean up rootIndex in parseScaleData
* Why -1 in UPDATE_SCALE for scale label? Instead of false?
* Rework scale reducer, max note limit on buttons in scale edit, min note limit in reducer, consolidate!
* Scale and song state should mirror models more closely
* Clean up UI state and reduce number of actions (also for other reducers?)
* Use separate currentSound for patterns and play with clicks or keys?
* Rework and simplify logic for setCurrentlyPlaying

### Layout update

* Semantic html and less nesting
* More visible toggle buttons
* Full screen songwriter?
* Style EditSubdivision - done? - split up component? grid? Open state for icon?
* Page numbers? Add header with page number and title for every page, better spacing?
* Bar numbers on song viewer? Only long songs?
* Found chords styles on smaller screens
* Styled-components, mix-ins and css variables - portrait mq as mixin - mobile first?
* Disable focus for icons attached to edit only text boxes
* Fix primary button focus after click
* Handle focus on modals - enter should confirm modal? enter should exit from input?
* Line breaks or scroll for big bars in songwriter
* Icons show as text before icon is loaded - new icons?
* Use Tooltip component for beat dropdown?
* Show dropdown over song controls - portal? z? html dialog? anchor browser support?
* Close on outside click for dropdown?
* Allow to skip from last to first beat and opposite
* Dark mode

### Song patchwork update

* move createNewBar and songToBarSubdivision to metre assets?
* User selectable bar and beat layouts (some optimized for single hit beats etc)
* Sheet music style subdivisions (all based on note length instead of beat start)?
* Rename metreList/subdivisions values as they are mostly for ui styles?
* Custom subdivision for new x/x?
* Quintuplets?
* New bar/song default sounds/hands?
* Edit name on save song as popup?
* More metres (and add to select list if not dynamic)?
* Remember muted bars when navigating?

### Scale and chord sound update

* Play chords from chords page, arpeggio and unison - how to handle inversions?
* Play scale preview from scale page - up and down scale? How to handle temporary howls?
* Bpm for scales and chords? Always constant?
* Stopping and isPlaying for scales and chords? Needed for scales at least - use status state instead of bool (for pattern player to understand what is playing)?
* Key to stop any playing song/scale/chord/sound? Space (reserve for song recorder skips)? Esc?
* Dynamic volume when more than one note played at the same time?

### Compare scales update

* Table with base scale and one or more scales to compare against
* Logic for figuring out if a scale/note is a sharp or flat - circle of fifths + maj/min detection
* Change root note of scale
* Play scale preview from search results - how are howls handled? Low quality for speed?
* Create scale from name and string
* Dynamically create scales from range and root note and skip scaleFull.intervalMap?

### Local storage update

* Local storage hook
* Detect if song has unsaved changes
* Disable save button if there are no changes
* Save to ls if song has unsaved changes
* Debounce ls saves?
* Don't clear songId if song is changed? Only on save?
* Persist changes on redis session? Viable? Interval?
* Prevent/warn transition away from page if data isn't saved?

## Focuses for upcoming release updates

### From user feedback

* Note numbers and rotated drum?

### Minor updates

* findSongs/Results.jsx promise in render rows expanded and getSongById, better solution?
* Allow saving scale with song save
* Validate scales before saving, at least 5 tones?
* Memoize (scale)Notes to prevent rerender when changing between add round and add extra
* add safe Ids to default song
* Discord

### Major updates

* Testing
* Master volume controls - location and styles
* React-to-print functional components (SongView and PrintView, set documentTitle)
* Song state update, mirror db model and state
* Lazy loading with priorities, ui -> controls -> sounds?
* custom keybindings
* Markdown or other solution for help topics
* TypeScript

### Dependencies updates

* React-table 8
* Redux with redux toolkit? reselect? memoize selectors somehow
* Update to redis 4 when connect-redis is supported
* New react 18 features?
* Stop using CRA?
* react query?
* Update and DRY up rc-slider
* mongoose 8 - strictQuery will set to false by default

## Not yet planned for release updates

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
* It's possible to load scale or song while song is playing (no crash but leads to silence while song continues playing)
* Changing between trip8 and trip16 or asymmetrical subdivisions can move beat around
* Fix composer name when you are the composer when printing - sometimes shows "you" as composer, cannot reproduce
* Failing to save song (inside popup) gives no feedback to user

### Design

* Scale page and find songs page overflows in smaller screens
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
* Make focused note more visible?
* Mouse pointer for Intervals circles

### Focus and keyboard

* Better keyboard navigation for table
* Print keyboard shortcut
* Keyboard shortcuts on new song (and other?) popup - done?
* Move focus to beat when closing dropdown?
* Only show keyboard help on non touch?

### Drum

* Dynamic size for tonefields
* Hover on drum shows all information about hovered note?
* Option to turn off/use same color for tonefield borders
* Animation for tonefields being played
* Clicks on sounds in beat dropdown animate on drum?
* Move currentSound and currentHand from ui state to drum state?

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
* Change how scale labels look? Double ding styles?
* Dynamic and centralized percussive sounds
* Stop extra notes from updating positions when adding extra notes?
* Rewrite parsed scale and position map
* New scale wizard, select notes, select rotation, select layout/position etc.

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
* Print chords with numbers instead of note names
* Scale degrees as chord prefix. And sorting? And filters?

### Songwriter

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
* Swing? Accents? Flams?
* Softer or louder drum hits in songwriter?

### State and search

* DRY up search logic - reset search with button or empty search field (cache initial search?)
* Infinite scroll on songs (and scales?) - show "load more" if more songs match query? pages?
* Sorting search results in table
* Privacy date localization
* Save song as JSON?
* Show if owned song is private in search results?
* Split howls loading status into loaded and error (and error msg)?
* createFullScaleFromNames handles new createScaleLabel and returns label with scale? Needs updated new scale action. Function used separately when toggling sharps and flats

### API

* Change query string to keyword search? Atlas search?
* Add difficulty filter to searches
* Count number of bars for search results? Virtual field?
* Auth middleware populates current user
* Cache users in scale searches
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
* Custom count for metres, more count styles - konnakol?
* Multiple drums for chords, songs etc. Two track songwriter?
* More drum alternatives? Add synth/piano alternative?
* Multiple alerts on screen? or just reset timeout and show newest? Timeout scales with length of alert?
* Alert mouse over or tap inside stops timer?
* Automate created and updates posts for db documents, timestamps
* Increase max save limits for older accounts
* Favorite songs/scales
* Merge db updates so if one fails both fail (scales/songs for user), must use transactions?
* Print multiple songs on same page
* Print with notes instead of numbers
* Add scale to printed song?
* Percussive handpan sound samples
* Replace setInterval in login popup
* Set howl pool to match size of scale?
* Four note chords
