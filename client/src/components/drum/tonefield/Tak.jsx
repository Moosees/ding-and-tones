import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { TRANSLATE_TAK } from '../../../assets/constants';
import { makeSelectIsHowlReady } from '../../../redux/scale/scale.selectors';

const Tak = ({ hand, handlePlay, note }) => {
  const selectIsHowlReady = useMemo(makeSelectIsHowlReady, []);

  const currentHand = useSelector(({ song }) => song.songPlayer.currentHand);
  const currentSound = useSelector(({ song }) => song.songPlayer.currentSound);
  const isHowlReady = useSelector((state) => selectIsHowlReady(state, note));

  const isPlaying =
    [hand, 3].includes(currentHand) &&
    (currentSound.includes('t') || currentSound.includes('T'));

  return (
    <g
      cx="0"
      cy="0"
      transform={`translate(${
        hand === 1 ? TRANSLATE_TAK : TRANSLATE_TAK * -1
      })`}
      onClick={isHowlReady ? handlePlay : null}
      opacity={isHowlReady ? 1 : 0.1}
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
