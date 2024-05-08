import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MAX_NOTES_IN_BEAT } from '../../../assets/constants';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
import { howls } from '../../../assets/sound/howls';
import { updateSoundForBeat } from '../../../redux/song/song.slice';
import { setCurrentlyPlaying } from '../../../redux/ui/ui.actions';
import { DropdownItem } from './dropdownItems.styles';

const DropdownSoundItems = ({
  beatId,
  handleAutoMove,
  hasNonScaleNote,
  soundList,
}) => {
  const dispatch = useDispatch();
  const { status, sound, multiSelect } = useSelector(({ howls, song, ui }) => ({
    status: howls.status,
    sound: song.beats[beatId].sound,
    multiSelect: ui.multiSelect,
  }));

  const soundItems = soundList.map(({ howl, label, option }) => {
    const selected = sound.includes(option);

    const isDisabled =
      multiSelect && sound.length >= MAX_NOTES_IN_BEAT && !selected;

    const handleClick = () => {
      dispatch(updateSoundForBeat({ beatId, update: option }));

      if (howls[howl] && status[howl] === 'ready') {
        dispatch(
          setCurrentlyPlaying({
            currentBeat: null,
            currentBar: null,
            currentSound: [option],
          })
        );
        howls[howl].play();
      }

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
        key={option}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        $hasNonScaleNote={hasNonScaleNote}
        $selected={selected}
      >
        {`${option} - ${label}`}
      </DropdownItem>
    );
  });

  return <>{soundItems}</>;
};

export default DropdownSoundItems;
