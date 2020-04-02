const dummySong = {
  bpm: 120,
  bars: [
    {
      timeSignature: '4/4',
      gridValue: 8,
      pattern: ['1', '', '1', '', '1', '', '1', '']
    },
    {
      timeSignature: '3/4',
      gridValue: 16,
      pattern: ['1', '', '', '', '1', '', '', '', '1', '', '1', '']
    }
  ]
};

const playBeat = (beat, timeout) =>
  new Promise(resolve => {
    console.log({ beat });
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

const playSong = async song => {
  for (let bar of song.bars) {
    await playBar(bar, song.bpm);
  }
};

playSong(dummySong);
