import React from 'react';
import { connect } from 'react-redux';
import { setDropdownForBeat } from '../../../redux/ui/ui.actions';
import { BeatContainer, BeatText } from './beat.styles';
import BeatDropdown from './BeatDropdown';

const Beat = ({
  beatId,
  beats,
  currentBeat,
  dropdownBeatId,
  isEditingSong,
  isSongPlaying,
  setDropdownForBeat,
  soundOptions,
}) => {
  const { value, sound } = beats[beatId];
  const isBeatPlaying = beatId === currentBeat;
  const isDropdownOpen = beatId === dropdownBeatId;

  const hasNonScaleNote = !sound.every((hit) => {
    const numericHit = Number(hit);
    return isNaN(numericHit) || numericHit < soundOptions.numNotesInScale;
  });

  const openDropdown = (e) => {
    e.stopPropagation();
    if (!isSongPlaying && isEditingSong) setDropdownForBeat(beatId);
  };

  return (
    <BeatContainer
      hasNonScaleNote={hasNonScaleNote}
      isLocked={!isEditingSong || isSongPlaying}
      isBeatPlaying={isBeatPlaying}
      value={value}
      onClick={openDropdown}
    >
      <BeatText isBeatPlaying={isBeatPlaying} value={value}>
        {sound.join('+')}
      </BeatText>
      {isDropdownOpen && (
        <BeatDropdown
          beatId={beatId}
          sound={sound}
          hasNonScaleNote={hasNonScaleNote}
        />
      )}
    </BeatContainer>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  beats: song.beats,
  currentBeat: ui.currentBeat,
  dropdownBeatId: ui.dropdownBeatId,
  isEditingSong: ui.isEditingSong,
  isSongPlaying: ui.isSongPlaying,
  soundOptions: ui.soundOptions,
});

export default connect(mapStateToProps, { setDropdownForBeat })(Beat);
