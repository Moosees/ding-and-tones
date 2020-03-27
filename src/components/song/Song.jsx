import React, { useState } from 'react';
import Bar from '../bar/Bar';
import BarControls from '../barControls/BarControls';
import { BarsContainer } from './song.styles';

const createBarsFromSong = song => {
  const { timeSignature, gridValue } = song;
  return song.bars.map((bar, i) => (
    <Bar
      key={i}
      timeSignature={timeSignature}
      gridValue={gridValue}
      bar={bar}
    />
  ));
};

const Song = ({ song }) => {
  const [timeSignature, setTimeSignature] = useState(
    song ? song.timeSignature : '3/4'
  );
  const [gridValue, setGridValue] = useState(song ? song.gridValue : 4);

  return (
    <div>
      <BarControls
        timeSignature={timeSignature}
        setTimeSignature={setTimeSignature}
        gridValue={gridValue}
        setGridValue={setGridValue}
      />
      <BarsContainer>
        {song ? (
          createBarsFromSong(song)
        ) : (
          <Bar timeSignature={timeSignature} gridValue={gridValue} />
        )}
      </BarsContainer>
    </div>
  );
};

export default Song;