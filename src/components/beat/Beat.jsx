import React from 'react';
import { connect } from 'react-redux';
import { BeatContainer } from './beat.styles';

const Beat = ({ beat, currentBeat }) => {
  return (
    <BeatContainer isPlaying={beat.id === currentBeat}>
      {beat.tone}
    </BeatContainer>
  );
};

const mapStateToProps = ({ song }) => ({
  currentBeat: song.currentBeat,
});

export default connect(mapStateToProps)(Beat);
