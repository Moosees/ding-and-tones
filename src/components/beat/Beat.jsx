import React from 'react';
import { connect } from 'react-redux';
import { updateBeat } from '../../redux/bars/bars.actions';
import { BeatContainer } from './beat.styles';

const Beat = ({
  arrangementId,
  barId,
  beat,
  currentBar,
  currentBeat,
  isSongPlaying,
  updateBeat,
  options,
}) => {
  const handleChange = (evt) => {
    updateBeat(barId, beat.beatId, evt.target.value);
  };

  return (
    <BeatContainer
      isPlaying={arrangementId === currentBar && beat.beatId === currentBeat}
    >
      <select
        value={beat.sound}
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
