const playBeat = (beat, timeout) =>
  new Promise(resolve => {
    if (beat === '1') new Audio('audio/rav/test.wav').play();
    setTimeout(() => {
      resolve();
    }, timeout);
  });

const playBar = async (bar, bpm) => {
  const [, value] = bar.timeSignature.split('/');
  const timeoutMultiplier = bar.gridValue / value;
  const timeout = 60000 / bpm / timeoutMultiplier;

  for (let beat of bar.pattern) {
    await playBeat(beat, timeout);
  }
};

export const playSong = async song => {
  for (let bar of song.bars) {
    await playBar(bar, song.bpm);
  }
};
