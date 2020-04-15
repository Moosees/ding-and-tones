import React from 'react';
import { connect } from 'react-redux';
import { updateBeat } from '../../redux/bars/bars.actions';
import { BeatContainer } from './beat.styles';

const Beat = ({
  arrangementId,
  barId,
  beat,
  beatIndex,
  currentBar,
  currentBeat,
  isSongPlaying,
  updateBeat,
  options,
  isAccented,
}) => {
  const handleChange = (evt) => {
    updateBeat(barId, beat.beatId, beatIndex, evt.target.value);
  };

  return (
    <BeatContainer
      isPlaying={arrangementId === currentBar && beat.beatId === currentBeat}
      isAccented={isAccented}
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
