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
  isAccented,
  isSongPlaying,
  isEditingSong,
  options,
  updateBeat,
}) => {
  const handleChange = (e) => {
    updateBeat(barId, beat.beatId, beatIndex, e.target.value);
  };

  return (
    <BeatContainer
      isPlaying={arrangementId === currentBar && beat.beatId === currentBeat}
      isAccented={isAccented}
    >
      {isEditingSong ? (
        <select
          value={beat.sound}
          disabled={isSongPlaying}
          onChange={handleChange}
        >
          {options}
        </select>
      ) : (
        <span>{beat.sound}</span>
      )}
    </BeatContainer>
  );
};

const mapStateToProps = ({ ui }) => ({
  currentBar: ui.currentBar,
  currentBeat: ui.currentBeat,
  isSongPlaying: ui.isSongPlaying,
  isEditingSong: ui.isEditingSong,
});

export default connect(mapStateToProps, { updateBeat })(Beat);
