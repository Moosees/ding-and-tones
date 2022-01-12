import React from 'react';
import { connect } from 'react-redux';
import { updateSoundForBeat } from '../../../redux/song/song.actions';
import { DropdownItem } from './dropdownItems.styles';

const SoundItems = ({
  beatId,
  beats,
  hasNonScaleNote,
  howlOptionCbs,
  multiSelect,
  optionList,
  sharpNotes,
  updateSoundForBeat,
}) => {
  const { sound } = beats[beatId];

  const soundItems = optionList.map(({ note, noteSharp, option }) => {
    const selected = sound.includes(option);

    const isDisabled = multiSelect && sound.length >= 2 && !selected;

    const handleClick = () => {
      updateSoundForBeat(beatId, option);
      howlOptionCbs[option]?.play();
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
        {`${option} - ${sharpNotes ? noteSharp : note}`}
      </DropdownItem>
    );
  });

  return <>{soundItems}</>;
};

const mapStateToProps = ({ howls, scale, song, ui }) => ({
  howlOptionCbs: howls.optionCbs,
  sharpNotes: scale.info.sharpNotes,
  beats: song.beats,
  multiSelect: ui.multiSelect,
});

export default connect(mapStateToProps, { updateSoundForBeat })(SoundItems);
