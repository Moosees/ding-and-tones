import React from 'react';
import { connect } from 'react-redux';
import { updateBeat } from '../../redux/bars/bars.actions';
import ToneInput from '../toneInput/ToneInput';
import { BeatContainer, BeatText } from './beat.styles';

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
  return (
    <BeatContainer
      isPlaying={barId === currentBar && beat.beatId === currentBeat}
      isAccented={isAccented}
    >
      {isEditingSong ? (
        <ToneInput
          sound={beat.sound}
          onChange={(value) => updateBeat(barId, beat.beatId, beatIndex, value)}
        />
      ) : (
        <BeatText>
          <span>{beat.sound}</span>
        </BeatText>
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
