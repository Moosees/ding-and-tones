import React from 'react';
import { connect } from 'react-redux';
import { ExtraContainer } from './tonefield.styles';

const ExtraNote = ({
  color,
  extra,
  handlePlay,
  hasFocus,
  isPlaying,
  localIndex,
  showNote,
  text,
}) => {
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

const mapStateToProps = ({ scale }) => ({
  extra: scale.notes.extra,
});

export default connect(mapStateToProps)(ExtraNote);
