import React from 'react';
import { connect } from 'react-redux';
import { updateSoundForBeat } from '../../../redux/song/song.actions';
import { DropdownItem } from './dropdownItems.styles';

const SoundItems = ({
  beatId,
  hasNonScaleNote,
  multiSelect,
  optionList,
  sound,
  updateSoundForBeat,
}) => {
  const soundItems = optionList.map(({ label, value }) => {
    const selected = sound.includes(value);

    const isDisabled = multiSelect && sound.length >= 2 && !selected;

    const handleClick = () => {
      updateSoundForBeat(beatId, value);
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
        key={value}
        hasNonScaleNote={hasNonScaleNote}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {label}
      </DropdownItem>
    );
  });

  return <>{soundItems}</>;
};

export default connect(null, { updateSoundForBeat })(SoundItems);
