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

  const parseOptions = (optionArray, hasNonScaleNote) =>
    optionArray.map(({ label, value }) => {
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
            {parseOptions(options.round)}
            {hasNonScaleNote && (
              <>
                <DividerLine small />
                {parseOptions(options.nonScale, hasNonScaleNote)}
              </>
            )}
          </DropdownColumn>
          <DropdownColumn>
            <DividerLine vertical small />
          </DropdownColumn>
          <DropdownColumn>
            {parseOptions(options.extra)}
            <DividerLine small />
            {parseOptions(options.percussive)}
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
