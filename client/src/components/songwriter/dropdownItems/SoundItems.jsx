import React from 'react';
import { connect } from 'react-redux';
import useHowls from '../../../hooks/useHowls';
import { updateSoundForBeat } from '../../../redux/song/song.actions';
import { DropdownItem } from './dropdownItems.styles';

const SoundItems = ({
  beatId,
  beats,
  hasNonScaleNote,
  multiSelect,
  optionList,
  sharpNotes,
  updateSoundForBeat,
}) => {
  const { sound } = beats[beatId];
  const { howlOptionCbs } = useHowls();

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

const mapStateToProps = ({ scale, song, ui }) => ({
  sharpNotes: scale.info.sharpNotes,
  beats: song.beats,
  multiSelect: ui.multiSelect,
});

export default connect(mapStateToProps, { updateSoundForBeat })(SoundItems);
