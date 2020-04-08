import React from 'react';
import { connect } from 'react-redux';
import { updateBeat } from '../../redux/bars/bars.actions';
import { BeatContainer } from './beat.styles';

const Beat = ({
  barId,
  updateId,
  beat,
  currentBar,
  currentBeat,
  isSongPlaying,
  updateBeat,
}) => {
  const handleChange = (evt) => {
    // add debounce
    // chords needs updated logic
    updateBeat(updateId, beat.id, Number(evt.target.value));
  };

  return (
    <BeatContainer isPlaying={barId === currentBar && beat.id === currentBeat}>
      <input
        type="text"
        maxLength="2"
        size="2"
        value={beat.tone}
        onChange={handleChange}
        disabled={isSongPlaying}
      />
    </BeatContainer>
  );
};

const mapStateToProps = ({ song }) => ({
  currentBar: song.currentBar,
  currentBeat: song.currentBeat,
  isSongPlaying: song.isSongPlaying,
});

export default connect(mapStateToProps, { updateBeat })(Beat);
