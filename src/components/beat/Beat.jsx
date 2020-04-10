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
  options,
}) => {
  const handleChange = (evt) => {
    updateBeat(updateId, beat.id, Number(evt.target.value));
  };

  return (
    <BeatContainer isPlaying={barId === currentBar && beat.id === currentBeat}>
      <select
        value={beat.tone}
        disabled={isSongPlaying}
        onChange={handleChange}
      >
        {options}
      </select>
    </BeatContainer>
  );
};

const mapStateToProps = ({ song }) => ({
  currentBar: song.currentBar,
  currentBeat: song.currentBeat,
  isSongPlaying: song.isSongPlaying,
});

export default connect(mapStateToProps, { updateBeat })(Beat);
