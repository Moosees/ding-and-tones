import React, { useContext, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
import useCloseOnEsc from '../../../hooks/useCloseOnEsc';
import useCloseOutside from '../../../hooks/useCloseOutside';
import {
  updateHandForBeat,
  updateSoundForBeat,
} from '../../../redux/song/song.actions';
import DividerLine from '../../shared/dividerLine/DividerLine';
import { DropdownContext } from '../dropdownHandler/DropdownHandler';
import HandItems from '../dropdownItems/HandItems';
import SoundItems from '../dropdownItems/SoundItems';
import {
  Arrow,
  Dropdown,
  DropdownColumn,
  DropdownContent,
} from './beatDropdown.styles';
import { createKeyboardCbs, createSoundLists } from './beatDropdown.utils.js';
import BeatDropdownControls from './BeatDropdownControls';

const BeatDropdown = ({
  beatId,
  btnRef,
  dropdownPosRef,
  isOpenCb,
  nonScaleNotes,
  scale,
  sharpNotes,
  toggleMultiSelect,
  updateHandForBeat,
  updateSoundForBeat,
}) => {
  useCloseOnEsc(() => isOpenCb(false));
  const { insideRef } = useCloseOutside(isOpenCb, btnRef);
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
  }, [keyboardCbs, isOpenCb, toggleMultiSelect]);

  return (
    <>
      <Arrow openTop={openTop} />
      <Dropdown ref={insideRef} openLeft={openLeft} openTop={openTop}>
        <BeatDropdownControls />
        <DividerLine small />
        <DropdownContent>
          <DropdownColumn>
            <SoundItems beatId={beatId} soundList={dings} />
            <SoundItems beatId={beatId} soundList={round} />
            {!!nonScaleNotes.length && (
              <>
                <DividerLine small />
                <SoundItems
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
            <SoundItems beatId={beatId} soundList={extra} />
            <DividerLine small />
            <SoundItems beatId={beatId} soundList={percussive} />
            <DividerLine small />
            <HandItems beatId={beatId} />
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
