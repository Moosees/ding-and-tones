import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { hands, TRANSLATE_TAK } from '../../../assets/constants';

const Tak = ({ beats, currentBeat, currentSound, hand }) => {
  const validHandValues = useMemo(() => {
    const oppositeHand = hand === 'L' ? 'R' : 'L';

    const values = hands
      .filter((hand) => hand.short !== oppositeHand)
      .map((hand) => hand.value);

    hand === 'L' && values.push(undefined);

    return values;
  }, [hand]);

  const isSoftTak = currentSound.includes('t');
  const isLoudTak = currentSound.includes('T');
  const isTak = isSoftTak || isLoudTak;

  const isPlaying =
    isTak && validHandValues.includes(beats[currentBeat]?.hand ?? 2);

  return (
    <circle
      r={isLoudTak ? '1.1' : '0.9'}
      cx="0"
      cy="0"
      transform={`translate(${
        hand === 'R' ? TRANSLATE_TAK : TRANSLATE_TAK * -1
      })`}
      fill={isPlaying ? '#ccc' : 'transparent'}
    />
  );
};

const mapStateToProps = ({ song, ui }) => ({
  beats: song.beats,
  currentBeat: ui.currentBeat,
  currentSound: ui.currentSound,
});

export default connect(mapStateToProps)(Tak);
