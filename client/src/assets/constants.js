// controls how far tonefield are from center of the drum
export const TRANSLATE_BASE = 6.6;

// C2 to C5
export const MIN_NOTE_VALUE = 24;
export const MAX_NOTE_VALUE = 60;

// alerts
export const ALERT_TIMEOUT = 5000;

// reactDnD
export const ItemTypes = {
  BAR: 'bar',
};

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
