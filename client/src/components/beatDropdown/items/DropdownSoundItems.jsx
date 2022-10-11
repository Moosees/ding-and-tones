import React from 'react';
import { connect } from 'react-redux';
import { MAX_NOTES_IN_BEAT } from '../../../assets/constants';
import { updateSoundForBeat } from '../../../redux/song/song.actions';
import { setCurrentlyPlaying } from '../../../redux/ui/ui.actions';
import { DropdownItem } from './dropdownItems.styles';

const DropdownSoundItems = ({
  beatId,
  beats,
  hasNonScaleNote,
  howls,
  multiSelect,
  setCurrentlyPlaying,
  soundList,
  updateSoundForBeat,
}) => {
  const { sound } = beats[beatId];

  const soundItems = soundList.map(({ howl, label, option }) => {
    const selected = sound.includes(option);

    const isDisabled =
      multiSelect && sound.length >= MAX_NOTES_IN_BEAT && !selected;

    const handleClick = () => {
      if (!howls[howl] || howls[howl].status !== 'ready') return;

      updateSoundForBeat(beatId, option);
      setCurrentlyPlaying({
        currentBeat: null,
        currentBar: null,
        currentSound: [option],
      });
      howls[howl].play();
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 32 || e.keyCode === 13) {
        e.preventDefault();
        handleClick();
      }
    };

    return hasNonScaleNote && !selected ? null : (
      <DropdownItem
        tabIndex={isDisabled ? -1 : 0}
        disabled={isDisabled}
        selected={selected}
        key={option}
        hasNonScaleNote={hasNonScaleNote}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {`${option} - ${label}`}
      </DropdownItem>
    );
  });

  return <>{soundItems}</>;
};

const mapStateToProps = ({ howls, song, ui }) => ({
  howls: howls.data,
  beats: song.beats,
  multiSelect: ui.multiSelect,
});

export default connect(mapStateToProps, {
  updateSoundForBeat,
  setCurrentlyPlaying,
})(DropdownSoundItems);
