# DING AND TONES TODO LIST

## DRUM

### Drum controls

* Save/load scale
* Create scale from name and string
* Constants for layouts?
* Fix the drumInfo mess!
* Make Legend work with chords

### Drum view

* Handle non round layouts
* Handle extra/bottom notes
* Show legend for colors and interval names

## CHORDS

### Chords controls

* Select chords from list
* Chords is a part of drum controls?
* Chords change displayedNote to root of chord?

### Chords view

* Play chords, also play them as arpeggios?

## SONG / BARS

### Song info

* Metre is just informational and default for new bars?
* Only use subdivision for individual bars?

### Song controls

* Debounce and validate bpm

### Bar controls

* Modify time signature and subdivision on existing bars
* Rearrange arrangement

### Bars / arrangement view

* Chords
* Triplets, flams, etc.
* What happens when you change to a scale with less notes than pattern needs?
* Dropdown list show all dyads and ding + note combinations?
* How do we know if bars are linked?
* Repeats instead of linked bars?

## LOGIC

### Sound player

* Keyboard shortcuts
* Swing?
* Play the correct note
* Taks or other sounds
* Select drum type - pan or tongue
* Web worker?
* Pre-load sounds as needed

### State/Redux

* Figure out chord sorting
* Persist data through local storage?
* Delete bars from bar state or use them as a bank or undo?
* Rename and refactor toggle_show_intervals

### Exporting
  
* Printing, format?
* Save to .pdf?

### Backend

* Everything
* Analytics
* Hosting
* Database
* Auth/Users
* GDPR
* Extra features - comments?
* Share song through link?

## DESIGN / OTHER

### Design

* Responsive design
* Logo
* Build custom component instead of html select?

### Low priority

* Multiple drums for chords, songs etc.
* Comparing scales using tables or other presentations
* Ability to loop songs
* Rework app and data structuring?
* Custom metres
* Custom chord inputs
* ID and cache chords?
* Rethink interval colors, color blindness safe and better bigger intervals
* Logic for figuring out if a note is a sharp or flat - only flats for now
* Show played note on drum?
* Clean up scaleFull array?
