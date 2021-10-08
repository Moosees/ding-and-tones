# DING AND TONES TODO LIST

## Sorted

### Sound update

* Make patterns an array of beats with everything needed to play that beat
* Update pattern player to use new format
* Clean up song to pattern builder
* Use a single redux action to update barId, beatId, sound and anything else needed for ui (repeats, volume?)
* Stop pattern bar loop if song is stopped - new format solves this
* Value in both beat and bar state, remove one?

* Sound player using howler - tweak playHowl function?
* New sounds
* Master volume
* Chord volume (dynamic volume when more than one note played at the same time)?
* Make sure sounds are loaded before playing pattern - howler solves?
* Use or delete isPreparingSong - related to above
* Split assets folder into constants and utils?
* Move howls to state?
* Stop default sounds from loading when using a scale id url
* Set howl pool to match size of scale?
* Bpm for scales and chords? Always constant?
* Stopping and isPlaying for scales and chords?
* Key to stop any playing sound? Space?
* Clean up code

### Compare scales

* Table with base scale and one or more scales to compare against
* Logic for figuring out if a scale/note is a sharp or flat - circle of fifths + maj/min detection
* Change root note of scale
* Add play scale button and function
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
* Clean up Tak logic
* Use new scaleFull outside print-chords - done?
* Clean up getNoteText() and Tonefield in general
* Merge api status states (isFetching etc.) in client?
* Clean up rootIndex in parseScaleData
* Remove measure subdivision count?

### Updates in need of planning

* Validate scales before saving, at least 5 tones?
* Styled-components, mix-ins and css variables - portrait mq as mixin - mobile first?
* Testing
* Bar numbers on song viewer? Only long songs?
* Should print view only break before fourths?

## Unsorted

### Bugs

* Safari print popup bug - print dialog is not blocking/waiting
* Why -1 in UPDATE_SCALE for scale label? Instead of false?
* Song search results doesn't update if save song changes assigned scale
* If scale is deleted when loading song with scale null is sent back as scale just as if song was loaded without scale. Attach a message to client when this happens.
* Songs without users show up without composer name (and not Anonymous either)
* Violation 'click' handler took xxx ms when going to song route (big songs)
* Scale/song url not found alerts not showing
* Printing on mobile prints entire app and not just iframe
* Songs with deleted scales can still be found in song searches with scale name
* Song query strings and (changed) scale broken?

### Design

* Search result hints should not be alerts
* Errors from backend display on inputs instead of alert?
* Better Loading component - big spinner? Spinner on account page save
* Load song button can be seen through table header
* Red borders on errors?
* Checkbox hover effect, all transform: scale hovers...
* Only small divider lines?
* Add more text labels like in Edit scale component?
* Use drop shadows for tonefield focus?
* Custom ref for popup anchor
* Add x close button to popups?
* Select boxes dynamic width
* Found chords styles on smaller screens
* New buttons for loading songs and confirm/cancel
* BtnPrimary on mobile
* Explanation for disabled buttons
* Slider disabled cursor
* Sign in with privacy open on mobile messed up layout

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
* Prevent soft and loud taks on same beat?
* Add central Tak for non assigned hand taks? For all Taks?
* Animation for tonefields being played

### Intervals

* Hover and tab focus for intervals?
* Add "big" intervals mode
* Add colors to intervals help
* One less plus for octaves in interval list?

### Scale

* Double ding and mutant scales
* Remove isOwner from scale ui state or add ability to save scale changes
* Sign in should update scale ownership
* Rework scale reducer, max note limit on buttons in scale edit, min note limit in reducer, consolidate!
* Scale layout prop - not needed? used for double ding?
* Save scale on client should be more functional? Promise based redirects like when loading and saving songs? - done?

### Chords

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
* Scale degrees as chord prefix. And sorting? And filters?

### Songwriter

* Use Tooltip component for beat dropdown?
* Make dropdown higher z than controls, remove need for padding
* Show latest changes (useful when copying and moving bars)
* Undo changes
* Looping, named bars? Sequencer?
* Get default hand when adding bars?
* Check if loaded songs has saved hands and set hands open accordingly?
* Transpose all notes of type? Some other way to handle scales that don't fit loaded song?
* Plus and minus one for bpm
* User can add line breaks in songwriter?
* Add drag and drop
* Color for hands on tablature
* Option to add note names to tablature
* Clicks on sounds in beat dropdown plays sound selected
* Help covers solo and mute bars

### State and search

* DRY up search logic - reset search with button or empty search field (cache initial search?)
* Infinite scroll on songs (and scales?) - show "load more" if more songs match query?
* Sorting search results in table
* Privacy date localization
* Beat hasNonScaleNote function should retry if soundOptions is not generated on mount
* Save song as JSON?
* Show if owned song is private in search results?

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
* Automate created and updates posts for db documents, timestamps
* Increase max save limits for older accounts
* Favorite songs/scales
* Merge db updates so if one fails both fail (scales/songs for user), must use transactions?
* Print multiple songs on same page
* Print with notes instead of numbers
* Dark mode
* Markdown for help topics
* Percussive hits on handpan
