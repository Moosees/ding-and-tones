export const helpTopics = {
  CHORDS: 'chords',
  INTERVALS: 'intervals',
  BEATS: 'beats',
};

export const helpContent = {
  chords: {
    title: 'Chords tips',
    content: [
      'Use the filters on the left side to select what chords you want to find.',
      'Click "view" in the list on the right to show a chord on the drum.',
      'After adding at least one chord to the print list, click "Print Chords" to print a page with diagrams of your selected scale and chords.',
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
      'Keyboard shortcuts help when adding notes:',
      'Use "d" for ding and "a" or "s" for taks.',
      '"1" - "9" for normal tonefields.',
      'Use "q" - "p" for extra/bottom notes,',
      '"c" toggles chord mode and "b", "n", "m" changes hands.',
    ],
  },
};
