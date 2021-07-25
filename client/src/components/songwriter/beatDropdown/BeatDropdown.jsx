import React, { useContext, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import useCloseOutside from '../../../hooks/useCloseOutside';
import {
  updateHandForBeat,
  updateSoundForBeat
} from '../../../redux/song/song.actions';
import { toggleMultiSelect } from '../../../redux/ui/ui.actions';
import Checkbox from '../../shared/checkbox/Checkbox';
import DividerLine from '../../shared/dividerLine/DividerLine';
import { DropdownContext } from '../dropdownHandler/DropdownHandler';
import HandItems from '../dropdownItems/HandItems';
import SoundItems from '../dropdownItems/SoundItems';
import {
  Arrow,
  Dropdown,
  DropdownColumn,
  DropdownContent
} from './beatDropdown.styles';
import { createKeyboardCbs } from './beatDropdown.utils.js';

const BeatDropdown = ({
  beatId,
  btnRef,
  dropdownPosRef,
  hand,
  hasNonScaleNote,
  isOpenCb,
  multiSelect,
  options,
  sound,
  toggleMultiSelect,
  updateHandForBeat,
  updateSoundForBeat,
  value,
}) => {
  const { insideRef } = useCloseOutside(isOpenCb, btnRef);
  const { borderHeight, borderWidth, listScroll } = useContext(DropdownContext);
  const { offsetTop, offsetLeft } = dropdownPosRef.current;
  const openTop = offsetTop - listScroll - 20 > borderHeight / 2;
  const openLeft = offsetLeft > borderWidth / 2;

  const keyboardCbs = useMemo(() => {
    return createKeyboardCbs(beatId, updateSoundForBeat, updateHandForBeat, {
      round: options.round,
      extra: options.extra,
      percussive: options.percussive,
    });
  }, [
    beatId,
    updateSoundForBeat,
    updateHandForBeat,
    options.round,
    options.extra,
    options.percussive,
  ]);

  useEffect(() => {
    const keyboardListener = (e) => {
      if (!keyboardCbs[e.keyCode]) return;

      keyboardCbs[e.keyCode]();
    };

    document.addEventListener('keydown', keyboardListener);

    return () => document.removeEventListener('keydown', keyboardListener);
  }, [keyboardCbs]);

  return (
    <>
      <Arrow openTop={openTop} />
      <Dropdown
        ref={insideRef}
        openLeft={openLeft}
        openTop={openTop}
        value={value}
      >
        <Checkbox
          small
          checked={multiSelect}
          label="Chord"
          onChange={toggleMultiSelect}
        />
        <DividerLine small />
        <DropdownContent>
          <DropdownColumn>
            <SoundItems
              multiSelect={multiSelect}
              sound={sound}
              beatId={beatId}
              optionList={options.round}
            />
            {hasNonScaleNote && (
              <>
                <DividerLine small />
                <SoundItems
                  multiSelect={multiSelect}
                  sound={sound}
                  beatId={beatId}
                  optionList={options.nonScale}
                  hasNonScaleNote
                />
              </>
            )}
          </DropdownColumn>
          <DropdownColumn>
            <DividerLine vertical small />
          </DropdownColumn>
          <DropdownColumn>
            <SoundItems
              multiSelect={multiSelect}
              sound={sound}
              beatId={beatId}
              optionList={options.extra}
            />
            <DividerLine small />
            <SoundItems
              multiSelect={multiSelect}
              sound={sound}
              beatId={beatId}
              optionList={options.percussive}
            />
            <DividerLine small />
            <HandItems beatId={beatId} hand={hand} />
          </DropdownColumn>
        </DropdownContent>
      </Dropdown>
    </>
  );
};

const mapStateToProps = ({ ui }) => ({
  multiSelect: ui.multiSelect,
  options: ui.soundOptions,
});

export default connect(mapStateToProps, {
  toggleMultiSelect,
  updateHandForBeat,
  updateSoundForBeat,
})(BeatDropdown);
