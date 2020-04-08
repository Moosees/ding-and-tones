import React from 'react';
import { connect } from 'react-redux';
import { BeatContainer } from './beat.styles';

const Beat = ({ barId, updateId, beat, currentBar, currentBeat }) => {
  // find the bar to update with this Id
  console.log(updateId);

  return (
    <BeatContainer isPlaying={barId === currentBar && beat.id === currentBeat}>
      {beat.tone}
    </BeatContainer>
  );
};

const mapStateToProps = ({ song }) => ({
  currentBar: song.currentBar,
  currentBeat: song.currentBeat,
});

export default connect(mapStateToProps)(Beat);
