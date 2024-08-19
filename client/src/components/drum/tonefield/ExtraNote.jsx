import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { makeSelectIsHowlReady } from '../../../redux/scale/scale.selectors';
import { ExtraContainer } from './tonefield.styles';

const ExtraNote = ({
  color,
  handlePlay,
  hasFocus,
  isPlaying,
  localIndex,
  note,
  showNote,
  text,
}) => {
  const selectIsHowlReady = useMemo(makeSelectIsHowlReady, []);

  const isHowlReady = useSelector((state) => selectIsHowlReady(state, note));
  const position = useSelector(
    ({ scale }) => scale.notes.extra[localIndex].pos,
  );

  return (
    <ExtraContainer
      onClick={showNote && isHowlReady ? handlePlay : null}
      $color={color}
      $isPlaying={isPlaying}
      $isReady={isHowlReady}
      $showNote={showNote}
      $hasFocus={hasFocus}
      $position={position}
    >
      {text}
    </ExtraContainer>
  );
};

export default ExtraNote;
