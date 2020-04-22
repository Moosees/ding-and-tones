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
  isEditing,
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
      {isEditing ? (
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

const mapStateToProps = ({ song }) => ({
  currentBar: song.currentBar,
  currentBeat: song.currentBeat,
  isSongPlaying: song.isSongPlaying,
  isEditing: song.isEditing,
});

export default connect(mapStateToProps, { updateBeat })(Beat);
