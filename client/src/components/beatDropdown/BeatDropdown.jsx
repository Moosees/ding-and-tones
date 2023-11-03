import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AUTO_MOVE_DELAY } from '../../assets/constants';
import { beatOptionToKeyCode } from '../../assets/keyCodes.js';
import { updateSoundForBeat } from '../../redux/song/song.actions.js';
import { setCurrentDropdown } from '../../redux/ui/ui.actions';
import DividerLine from '../shared/dividerLine/DividerLine';
import {
  Arrow,
  Dropdown,
  DropdownColumn,
  DropdownContent,
} from './beatDropdown.styles';
import { createSoundLists } from './beatDropdown.utils.js.js';
import DropdownControls from './controls/DropdownControls';
import DropdownMove from './controls/DropdownMove';
import { DropdownContext } from './handler/DropdownHandler';
import DropdownHandItems from './items/DropdownHandItems';
import DropdownSoundItems from './items/DropdownSoundItems';

const BeatDropdown = ({ beatId, dropdownPosRef, nonScaleNotes }) => {
  const [timeoutRef, setTimeoutRef] = useState(null);
  const dispatch = useDispatch();
  const { autoMove, multiSelect, nextBeatId, sharpNotes, scale } = useSelector(
    ({ ui, scale }) => ({
      autoMove: ui.autoMove,
      multiSelect: ui.multiSelect,
      nextBeatId: ui.autoMoveOrder[beatId].nextBeatId,
      sharpNotes: scale.info.sharpNotes,
      scale: scale.parsed.pitched,
    })
  );

  const { borderHeight, borderWidth, listScroll } = useContext(DropdownContext);
  const { offsetTop, offsetLeft } = dropdownPosRef.current;
  const openTop = offsetTop - listScroll - 20 > borderHeight / 2;
  const openLeft = offsetLeft > borderWidth / 2;

  const { round, extra, dings, percussive } = useMemo(
    () => createSoundLists(scale, sharpNotes),
    [scale, sharpNotes]
  );

  const handleAutoMove = () => {
    clearTimeout(timeoutRef); // not needed? edge cases?

    if (!autoMove || !nextBeatId) return;

    if (!multiSelect) {
      dispatch(setCurrentDropdown(nextBeatId));
      return;
    }

    setTimeoutRef(
      setTimeout(() => {
        dispatch(setCurrentDropdown(nextBeatId));
      }, AUTO_MOVE_DELAY * 2)
    );
  };

  useEffect(() => {
    if (!nonScaleNotes.length) return;

    const nonScaleKeyboardCbs = nonScaleNotes.reduce((acc, note) => {
      return {
        ...acc,
        [beatOptionToKeyCode[note.option]]: () =>
          dispatch(updateSoundForBeat(beatId, note.option)),
      };
    }, {});

    const nonScaleKeyboardListener = (e) => {
      if (!nonScaleKeyboardCbs[e.code]) return;

      nonScaleKeyboardCbs[e.code]();
    };

    document.addEventListener('keydown', nonScaleKeyboardListener);
    console.log({ nonScaleNotes });

    return () => {
      document.removeEventListener('keydown', nonScaleKeyboardListener);
    };
  });

  useEffect(
    () => () => {
      clearTimeout(timeoutRef);
    },
    [timeoutRef]
  );

  console.log({ nonScaleNotes, dings, round });

  return (
    <>
      <Arrow openTop={openTop} />
      <Dropdown openLeft={openLeft} openTop={openTop}>
        <DropdownControls beatId={beatId} />
        <DividerLine small />
        <DropdownContent>
          <DropdownColumn>
            <DropdownSoundItems
              beatId={beatId}
              soundList={dings}
              handleAutoMove={handleAutoMove}
            />
            <DropdownSoundItems
              beatId={beatId}
              soundList={round}
              handleAutoMove={handleAutoMove}
            />
            {!!nonScaleNotes.length && (
              <>
                <DividerLine small />
                <DropdownSoundItems
                  beatId={beatId}
                  soundList={nonScaleNotes}
                  handleAutoMove={handleAutoMove}
                  hasNonScaleNote
                />
              </>
            )}
          </DropdownColumn>
          <DropdownColumn>
            <DividerLine vertical small />
          </DropdownColumn>
          <DropdownColumn>
            <DropdownSoundItems
              beatId={beatId}
              soundList={extra}
              handleAutoMove={handleAutoMove}
            />
            <DividerLine small />
            <DropdownSoundItems
              beatId={beatId}
              soundList={percussive}
              handleAutoMove={handleAutoMove}
            />
            <DividerLine small />
            <DropdownHandItems
              beatId={beatId}
              stopTimeout={() => clearTimeout(timeoutRef)}
            />
          </DropdownColumn>
        </DropdownContent>
        <DividerLine small />
        <DropdownMove beatId={beatId} />
      </Dropdown>
    </>
  );
};

export default BeatDropdown;
