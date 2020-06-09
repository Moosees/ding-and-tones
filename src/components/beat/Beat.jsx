import React from 'react';
import { connect } from 'react-redux';
import { updateBeat } from '../../redux/bars/bars.actions';
import ToneInput from '../toneInput/ToneInput';
import { BeatContainer } from './beat.styles';

const Beat = ({
  barId,
  beat,
  beatIndex,
  currentBar,
  currentBeat,
  isAccented,
  isEditingSong,
  updateBeat,
}) => {
  const handleChange = (e) => {
    updateBeat(barId, beat.beatId, beatIndex, e.target.value);
  };

  return (
    <BeatContainer
      isPlaying={barId === currentBar && beat.beatId === currentBeat}
      isAccented={isAccented}
    >
      {isEditingSong ? (
        <ToneInput selected={beat.sound} onChange={handleChange} />
      ) : (
        <span>{beat.sound}</span>
      )}
    </BeatContainer>
  );
};

const mapStateToProps = ({ ui }) => ({
  currentBar: ui.currentBar,
  currentBeat: ui.currentBeat,
  currentDropdown: ui.currentDropdown,
  isEditingSong: ui.isEditingSong,
});

export default connect(mapStateToProps, { updateBeat })(Beat);
