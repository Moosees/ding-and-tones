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
  updateBeat,
}) => {
  const handleChange = (evt) => {
    // add debounce
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
      />
    </BeatContainer>
  );
};

const mapStateToProps = ({ song }) => ({
  currentBar: song.currentBar,
  currentBeat: song.currentBeat,
});

export default connect(mapStateToProps, { updateBeat })(Beat);
