import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MAX_NOTES_IN_BEAT } from '../../../assets/constants';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
import { updateSoundForBeat } from '../../../redux/song/song.actions';
import { setCurrentlyPlaying } from '../../../redux/ui/ui.actions';
import { DropdownItem } from './dropdownItems.styles';

const DropdownSoundItems = ({
  beatId,
  handleAutoMove,
  hasNonScaleNote,
  soundList,
}) => {
  const dispatch = useDispatch();
  const { howls, beats, multiSelect } = useSelector(({ howls, song, ui }) => ({
    howls: howls.data,
    beats: song.beats,
    multiSelect: ui.multiSelect,
  }));

  const { sound } = beats[beatId];

  const soundItems = soundList.map(({ howl, label, option }) => {
    const selected = sound.includes(option);

    const isDisabled =
      multiSelect && sound.length >= MAX_NOTES_IN_BEAT && !selected;

    const handleClick = () => {
      if (!howls[howl] || howls[howl].status !== 'ready') return;

      dispatch(updateSoundForBeat(beatId, option));
      dispatch(
        setCurrentlyPlaying({
          currentBeat: null,
          currentBar: null,
          currentSound: [option],
        })
      );
      howls[howl].play();

      handleAutoMove();
    };

    const handleKeyDown = (e) => {
      if (
        e.code === beatOptionToKeyCode['enter'] ||
        e.code === beatOptionToKeyCode['space']
      ) {
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

export default DropdownSoundItems;
