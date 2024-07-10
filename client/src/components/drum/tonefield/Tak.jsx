import React from 'react';
import { useSelector } from 'react-redux';
import { TRANSLATE_TAK } from '../../../assets/constants';

const Tak = ({ hand, handlePlay, note }) => {
  const currentHand = useSelector(({ song }) => song.songPlayer.currentHand);
  const currentSound = useSelector(({ song }) => song.songPlayer.currentSound);
  const status = useSelector(({ scale }) => scale.howls.status);

  const isReady = status[note] === 'ready';
  const isPlaying =
    [hand, 3].includes(currentHand) &&
    (currentSound.includes('t') || currentSound.includes('T'));

  return (
    <g
      cx="0"
      cy="0"
      transform={`translate(${hand === 1 ? TRANSLATE_TAK : TRANSLATE_TAK * -1
        })`}
      onClick={isReady ? handlePlay : null}
      opacity={isReady ? 1 : 0.1}
      style={{ cursor: 'pointer' }}
    >
      <circle r={hand === 1 ? '0.85' : '0.7'} fill="rgba(255, 255, 255, 0.5)" />
      <circle
        r={currentSound.includes('T') ? '1.1' : '0.9'}
        fill={isPlaying ? '#ddd' : 'transparent'}
      />
    </g>
  );
};

export default Tak;
