# DING AND TONES TODO LIST

## Current tasks

* Quick help buttons - started
* Add colors to intervals help
* Use "root/tonic" for all drum modes or use "click to set" for all
* Print help explains page scale
* Chords print also show current print list?
* Remove dynamic position from help tooltips? (tablet opens on top)
* Use Tooltip component for beat dropdown?

* Use new scaleFull outside print-chords - done?
* Print list change order of chords?
* Update react DnD
* Add on/off state for print chords Scale info lists?
* Fix primary button focus after click
* Fix select layouts and add space and enter
* Disable focus for icons attached to edit only text boxes
* Handle focus on modals
* Escape closes modals and beat dropdown
* Better keyboard navigation for table and dropdown
* Add x close button to popups
* Print keyboard shortcut

* Menu button margin is too small, menu button is confusing without text?
* Search hints should not be alerts
* Typescript
* Clean up reducers and actions
* Play song logic should be moved somewhere else?
* Play song logic should be reworked with less forEach?
* Remove measure subdivision count?
* Bar numbers on song viewer? Only long songs?
* Volume controls?
* Should print view only break before fourths?
* Change root note
* Hover and tab focus for intervals?
* Dry up print code
* Change ScrollBox to list?

## Bugs

* Print button tries to print before component is mounted - fixed?
* React-to-print document.write warnings
* Scale name edit remembers input even if scales changes - fix with scale save changes update?
* Login popup and blockers...
* Cannot read property 'clientHeight' of null at DropdownHandler onResize() - fixed?
* Why -1 in UPDATE_SCALE for scale label? Instead of false?
* Focus on extra notes on mobile doesn't really show up on drum
* Save scale name issues
* Safari print popup bug

## Design

* Better Loading component - big spinner? Spinner on account page save
* Dynamic size for tonefields
* Load song button can be seen through table header
* Errors from backend display on inputs instead of alert?
* New buttons for loading songs and confirm/cancel
* Hover on drum shows all information about hovered note?
* Refactor styled-components more, mix-ins or css variables?
* Checkbox hover effect, all transform: scale hovers...
* Only small divider lines?
* Interval list chord default cursor
* Extra notes look weird on mobile in portrait
* Delete hover color should be red

## User/Menu

* Help leads to facebook thread? Support this page? Discord? Help displays save limit, limits on sign in? Help videos?
* Active state for nav buttons might not need the full pathname
* Interval colors for compound intervals? Check if intervals are working as intended

## Chords

* ID and cache chords?
* Check cache for possible chords to show in filter
* Sort chords
* Show chord notes in scale in interval list?
* Select chords to show in beat dropdown?
* Play chords from chords page, also play them as arpeggios?
* All root notes in chords should be focused?

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
* Move add bar controls to end of bar list?
* User can add line breaks in songwriter?

## State

* Persist working state through local storage? Redis?
* Merge api status states (isFetching etc.) in client?
* Remove isOwner from scale ui state or add ability to save scale changes
* Save scale on client should be more functional? Promise based redirects like when loading and saving songs? Sign in should update scale ownership
* Rework scale reducer, max note limit on buttons in scale edit, min note limit in reducer, consolidate!
* Scale layout prop - not needed? used for double ding?

## Back/frontend logic

* Prevent/warn transition away from page if data isn't saved?
* DRY up search logic - reset search with button or empty search field (cache initial search?)
* Change query string to keyword search? Add difficulty filter to searches
* Infinite scroll on songs (and scales?) - show "load more" if more songs match query?
* Sorting search results in table
* Privacy date localization
* Select boxes dynamic width
* Web worker?
* Count number of bars for search results? Virtual field?
* Clean up getNoteText() and Tonefield in general
* Beat hasNonScaleNote function should retry if soundOptions is not generated on mount
* Save song as JSON?

## Future plans

* Testing
* Find songs by user (other than current user)
* Chose between save and save as new?
* Disable save button if there are no changes - done for scales
* Create scale from name and string
* Add play scale button and function
* Removing user should remove all users songs?
* Keyboard shortcuts on new song (and other?) popup
* Keyboard shortcuts for playing drum (or songwriter)
* Keyboard shortcuts for popups
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
* Show name for your songs as "you"?
* Print multiple songs on same page
* Double dings and mutant drums
* Print with notes instead of numbers
* Color for hands on tablature
