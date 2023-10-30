// controls how far tonefield are from center of the drum
export const TRANSLATE_BASE = 6.6;
export const TRANSLATE_TAK = TRANSLATE_BASE / 2 + 0.5;

// C2 to C5
export const MIN_NOTE_VALUE = 24;
export const MAX_NOTE_VALUE = 72;

// songwriter
export const MAX_NOTES_IN_BEAT = 3;
export const AUTO_MOVE_DELAY = 1000;

// alerts
export const ALERT_TIMEOUT = 5000;

// app values
export const optionsDifficulty = [
  { value: 1, label: 'Beginner' },
  { value: 3, label: 'Confident' },
  { value: 5, label: 'Advanced' },
  { value: 10, label: 'Exercise' },
];

export const difficultyByValue = optionsDifficulty.reduce((acc, current) => {
  acc[current.value] = current.label;
  return acc;
}, {});

export const scaleLayout = [{ value: 1, label: 'Round' }];

export const hands = [
  { value: 1, name: 'Right', short: 'R' },
  { value: 2, name: 'Left', short: 'L' },
  { value: 3, name: 'Both', short: 'RL' },
  // { value: 4, hand: 'Right flam', short: 'Rl' },
];

export const handByValue = hands.reduce((acc, current) => {
  acc[current.value] = current.name;
  return acc;
}, {});

export const handShortByValue = hands.reduce((acc, current) => {
  acc[current.value] = current.short;
  return acc;
}, {});
