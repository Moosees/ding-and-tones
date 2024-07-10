import React from 'react';
import { useSelector } from 'react-redux';
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
  const isReady = useSelector(({ scale }) => scale.howls.status[note] === 'ready')
  const position = useSelector(({ scale }) => scale.notes.extra[localIndex].pos)

  return (
    <ExtraContainer
      onClick={showNote && isReady ? handlePlay : null}
      $color={color}
      $isPlaying={isPlaying}
      $isReady={isReady}
      $showNote={showNote}
      $hasFocus={hasFocus}
      $position={position}
    >
      {text}
    </ExtraContainer>
  );
};

export default ExtraNote;
