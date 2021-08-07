import React from 'react';
import { connect } from 'react-redux';
import { ExtraContainer } from './tonefield.styles';

const ExtraNote = ({
  audioPath,
  color,
  extra,
  hasFocus,
  isPlaying,
  localIndex,
  note,
  showNote,
  text,
}) => {
  const handlePlay = () => {
    new Audio(`${audioPath}/${note}.mp3`).play();
  };

  return (
    <ExtraContainer
      color={color}
      isPlaying={isPlaying}
      showNote={showNote}
      hasFocus={hasFocus}
      position={extra[localIndex].pos}
      onClick={showNote ? handlePlay : null}
    >
      {text}
    </ExtraContainer>
  );
};

const mapStateToProps = ({ drum, scale }) => ({
  audioPath: drum.audioPath,
  extra: scale.notes.extra,
});

export default connect(mapStateToProps)(ExtraNote);
