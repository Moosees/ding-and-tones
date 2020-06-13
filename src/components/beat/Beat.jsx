import React from 'react';
import { connect } from 'react-redux';
import { updateBeat } from '../../redux/bars/bars.actions';
import ToneInput from '../toneInput/ToneInput';
import { BeatContainer, BeatText } from './beat.styles';

const Beat = ({ beatId, beats, currentBeat, isEditingSong, updateBeat }) => {
  const { value, sound } = beats[beatId];

  return (
    <BeatContainer isPlaying={beatId === currentBeat} isAccented={value === 4}>
      {isEditingSong ? (
        <ToneInput
          sound={sound}
          onChange={(newSound) => updateBeat(beatId, newSound)}
        />
      ) : (
        <BeatText>
          <span>{sound}</span>
        </BeatText>
      )}
    </BeatContainer>
  );
};

const mapStateToProps = ({ bars, ui }) => ({
  beats: bars.beats,
  currentBeat: ui.currentBeat,
  currentDropdown: ui.currentDropdown,
  isEditingSong: ui.isEditingSong,
});

export default connect(mapStateToProps, { updateBeat })(Beat);
