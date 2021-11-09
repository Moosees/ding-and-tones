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

  const soundItems = optionList.map(({ label, labelSharp, value }) => {
    const selected = sound.includes(value);

    const isDisabled = multiSelect && sound.length >= 2 && !selected;

    const handleClick = () => {
      updateSoundForBeat(beatId, value);
      howlOptionCbs[value]?.play();
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
        {sharpNotes ? labelSharp : label}
      </DropdownItem>
    );
  });

  return <>{soundItems}</>;
};

const mapStateToProps = ({ howls, scale, song, ui }) => ({
  howlOptionCbs: howls.howlOptionCbs,
  sharpNotes: scale.info.sharpNotes,
  beats: song.beats,
  multiSelect: ui.multiSelect,
});

export default connect(mapStateToProps, { updateSoundForBeat })(SoundItems);
