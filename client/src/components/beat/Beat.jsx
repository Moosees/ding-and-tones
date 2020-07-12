import React from 'react';
import { connect } from 'react-redux';
import { setDropdownForBeat } from '../../redux/ui/ui.actions';
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
}) => {
  const { value, sound } = beats[beatId];
  const isBeatPlaying = beatId === currentBeat;
  const isDropdownOpen = beatId === dropdownBeatId;

  const openDropdown = (e) => {
    e.stopPropagation();
    if (!isSongPlaying && isEditingSong) {
      setDropdownForBeat(beatId);
    }
  };

  return (
    <BeatContainer
      disabled={isSongPlaying}
      isBeatPlaying={isBeatPlaying}
      value={value}
      onClick={openDropdown}
    >
      <BeatText isBeatPlaying={isBeatPlaying} value={value}>
        {sound}
      </BeatText>
      {isDropdownOpen && <BeatDropdown beatId={beatId} sound={sound} />}
    </BeatContainer>
  );
};

const mapStateToProps = ({ song, ui }) => ({
  beats: song.beats,
  currentBeat: ui.currentBeat,
  dropdownBeatId: ui.dropdownBeatId,
  isEditingSong: ui.isEditingSong,
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps, { setDropdownForBeat })(Beat);
