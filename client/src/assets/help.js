export const helpTopics = {
  CHORDS: 'chords',
  INTERVALS: 'intervals',
  BEATS: 'beats',
  SCALE: 'scale',
};

export const helpContent = {
  chords: {
    title: 'Chords tips',
    content: [
      'Use the filters on the left side to select what type of chords you want to see.',
      'Click "View" in the list on the right to show a chord on the drum.',
      'Click "Print List" on the far right of a chord to toggle if that chord should be printed or not.',
      'Click "Print Chords" to print a page with diagrams of your selected scale and chords.',
      'You can use the scale option in the print dialog if you need bigger diagrams or if you want to fit more chords on a single page',
      'You can also use the print button to save the diagrams as a PDF.',
    ],
  },
  intervals: {
    title: 'Intervals tips',
    content: [
      'Use the arrow or click the current drum mode to cycle through what information is displayed on the drum.',
      'Click on an interval in the list to see intervals relative to that tone.',
      'Red to orange colors indicate consonance, using them in chords or succession creates harmonic and pleasant sounds.',
      'Orange to white to blue colors indicate dissonance, using them can create tension or add character to your music.',
      "The colors are only guidelines, don't let them limit how you play!",
    ],
  },
  beats: {
    title: 'Note selection tips',
    content: [
      'Keyboard shortcuts for songwriter:',
      'Digit row: "` | §" next beat, "1" - "9" add central notes.',
      'Top alpha row: "q | a" - "p" add extra/bottom notes,',
      'Mid alpha row: "a | q" - "s" add taks, "d" add ding.',
      'Bottom left: "c" chord, "v" auto, "b" "n" "m" hands.',
      'Bottom right "/ | - | §" next to right shift clears beat.',
      'Movement: "," - "." or Arrows left and right.',
    ],
  },
  scale: {
    title: 'Scale tips',
    content: [
      'Normal notes are added around the drum in ascending pitch with the lowest note as Ding.',
      'Extra notes can be moved around and can be lower, higher or mixed in with your normal notes.',
      'Use your keyboard to play the drum, try "1" - "0", "q" - "p" for notes, "a" - "s" for taks and "d" to play the Ding.',
    ],
  },
};
