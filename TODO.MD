# TODO

## Design

* Everything
* Menu
* Responsible design
* Logo
* Better .svgs, rotate base svg instead of each tonefield?
* Build custom component instead of html select?
* Popup for bar controls?

## Song builder

* Chords
* Triplets, flams, etc.
* What happens when you change to a scale with less notes than pattern needs?
* Subdivide measures unevenly (4/4 could be 3-3-2 eight notes)
* Verify that subdivision is not less than time signature demands
* Dropdown list all dyads and ding combinations

## Bar controls

* Modify time signature and subdivision
* Rearrange arrangement
* Copy patterns - to end or to next, to new bar or to linked bar
* Link/unlink patterns

## Song info

* Song-info component to show song name, time signature and subdivision
* Difficulty for current song?
* Only allow changing global time signature and subdivision on new song?

## Song controls

* Debounce and validate bpm
* Edit mode with on/off button for moving patterns?
* Refactor song control buttons to new component?
* Dry up code if song and bar controls share markup

## Chords

* Custom chord inputs
* Select chords from list
* Merge triads and 7s/9s?
* Display notes in chord
* Play chords

## Drum

* Handle double dings
* Handle double high notes
* Handle extra/bottom notes
* Show intervals on drum
* Show legend for colors
* Show played note on drum

## Drum controls

* Play/intervals mode
* Edit scale, save/load scale, etc.

## Sound player

* Keyboard shortcuts
* Swing?
* Play the correct note
* Taks or other sounds
* Select drum type
* Web worker?
* Use strings across app for patterns and what sound to play?

## State/Redux

* Clean up scaleFull array
* Figure out chord sorting
* Persist data through local storage?

## Exporting
  
* Printing, format?
* Save to .pdf?

## Backend

* Everything
* Analytics
* Hosting
* Database
* Auth/Users
* GDPR
* Extra features - comments?
* Share song through link?

## Future goals

* Multiple drums for chords, songs etc.
* Comparing scales using tables or other presentations
* Ability to loop songs
