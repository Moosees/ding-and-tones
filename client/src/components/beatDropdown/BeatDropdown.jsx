import React, { useContext, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import useCloseOnEsc from '../../hooks/useCloseOnEsc';
import useCloseOutside from '../../hooks/useCloseOutside';
import {
  updateHandForBeat,
  updateSoundForBeat,
} from '../../redux/song/song.actions';
import DividerLine from '../shared/dividerLine/DividerLine';
import { DropdownContext } from './handler/DropdownHandler';
import DropdownHandItems from './items/DropdownHandItems';
import DropdownSoundItems from './items/DropdownSoundItems';
import {
  Arrow,
  Dropdown,
  DropdownColumn,
  DropdownContent,
} from './beatDropdown.styles';
import { createKeyboardCbs, createSoundLists } from './beatDropdown.utils.js';
import DropdownControls from './controls/DropdownControls';
import { beatOptionToKeyCode } from '../../assets/keyCodes';

const BeatDropdown = ({
  beatId,
  btnRef,
  dropdownPosRef,
  nonScaleNotes,
  scale,
  sharpNotes,
  toggleMultiSelect,
  updateHandForBeat,
  updateSoundForBeat,
}) => {
  // useCloseOnEsc(() => isOpenCb(false));
  // const { insideRef } = useCloseOutside(isOpenCb, btnRef);
  const { borderHeight, borderWidth, listScroll } = useContext(DropdownContext);
  const { offsetTop, offsetLeft } = dropdownPosRef.current;
  const openTop = offsetTop - listScroll - 20 > borderHeight / 2;
  const openLeft = offsetLeft > borderWidth / 2;

  const { round, extra, dings, percussive } = useMemo(
    () => createSoundLists(scale, sharpNotes),
    [scale, sharpNotes]
  );

  const keyboardCbs = useMemo(
    () =>
      createKeyboardCbs(beatId, updateSoundForBeat, updateHandForBeat, scale),
    [beatId, updateSoundForBeat, updateHandForBeat, scale]
  );

  useEffect(() => {
    const keyboardListener = (e) => {
      if (e.keyCode === beatOptionToKeyCode['chord']) {
        toggleMultiSelect();
        return;
      }

      if (!keyboardCbs[e.keyCode]) return;

      keyboardCbs[e.keyCode]();
    };

    document.addEventListener('keydown', keyboardListener);

    return () => document.removeEventListener('keydown', keyboardListener);
  }, [keyboardCbs, toggleMultiSelect]);
  // }, [keyboardCbs, isOpenCb, toggleMultiSelect]);

  return (
    <>
      <Arrow openTop={openTop} />
      <Dropdown openLeft={openLeft} openTop={openTop}>
      {/* <Dropdown ref={insideRef} openLeft={openLeft} openTop={openTop}> */}
        <DropdownControls beatId={beatId} />
        <DividerLine small />
        <DropdownContent>
          <DropdownColumn>
            <DropdownSoundItems beatId={beatId} soundList={dings} />
            <DropdownSoundItems beatId={beatId} soundList={round} />
            {!!nonScaleNotes.length && (
              <>
                <DividerLine small />
                <DropdownSoundItems
                  beatId={beatId}
                  soundList={nonScaleNotes}
                  nonScaleNotes
                />
              </>
            )}
          </DropdownColumn>
          <DropdownColumn>
            <DividerLine vertical small />
          </DropdownColumn>
          <DropdownColumn>
            <DropdownSoundItems beatId={beatId} soundList={extra} />
            <DividerLine small />
            <DropdownSoundItems beatId={beatId} soundList={percussive} />
            <DividerLine small />
            <DropdownHandItems beatId={beatId} />
          </DropdownColumn>
        </DropdownContent>
      </Dropdown>
    </>
  );
};

const mapStateToProps = ({ scale }) => ({
  sharpNotes: scale.info.sharpNotes,
  scale: scale.parsed.pitched,
});

export default connect(mapStateToProps, {
  updateHandForBeat,
  updateSoundForBeat,
})(BeatDropdown);
