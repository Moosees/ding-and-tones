const tempos = {
  0: 'Grave',
  45: 'Largo',
  60: 'Adagio',
  70: 'Andante',
  90: 'Moderato',
  110: 'Allegro',
  140: 'Vivace',
  160: 'Presto',
};

const thresholds = Object.keys(tempos).sort((a, b) => a - b);

export const getTempoText = (bpm) => {
  const tempo = thresholds.reduce((prev, current) =>
    bpm >= current ? current : prev
  );
  return tempos[tempo];
};
