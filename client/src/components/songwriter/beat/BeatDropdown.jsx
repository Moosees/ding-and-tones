import React, { useContext, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { hands } from '../../../assets/constants';
import { beatOptionToKeyCode } from '../../../assets/keyCodes';
import useCloseOutside from '../../../hooks/useCloseOutside';
import {
  updateHandForBeat,
  updateSoundForBeat,
} from '../../../redux/song/song.actions';
import { toggleMultiSelect } from '../../../redux/ui/ui.actions';
import Checkbox from '../../shared/checkbox/Checkbox';
import DividerLine from '../../shared/dividerLine/DividerLine';
import { DropdownContext } from '../dropdownHandler/DropdownHandler';
import {
  Arrow,
  Dropdown,
  DropdownColumn,
  DropdownContent,
  DropdownItem,
  HandIcon,
} from './beat.styles';
import { createKeyboardCbs } from './beat.utils';

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

  const cbs = useMemo(() => {
    console.log('memo');
    createKeyboardCbs(beatId, updateSoundForBeat, updateHandForBeat, {
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

  const keyboardCbs = {};

  useEffect(() => {
    const keyboardListener = (e) => {
      if (!keyboardCbs[e.keyCode]) return;

      keyboardCbs[e.keyCode]();
    };

    document.addEventListener('keydown', keyboardListener);

    return () => document.removeEventListener('keydown', keyboardListener);
  }, []);

  const parseOptions = (optionArray, hasNonScaleNote) =>
    optionArray.map(({ label, value }) => {
      const selected = sound.includes(value);

      const isDisabled = multiSelect && sound.length >= 2 && !selected;

      const handleClick = () => {
        updateSoundForBeat(beatId, value);
      };

      if (!hasNonScaleNote) {
        keyboardCbs[beatOptionToKeyCode[value]] = handleClick;
      }

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

  const handItems = hands.map(({ name, value }) => {
    const handleClick = () => {
      updateHandForBeat(beatId, value);
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 32 || e.keyCode === 13) {
        e.preventDefault();
        handleClick();
      }
    };

    return (
      <DropdownItem
        tabIndex={0}
        selected={value === hand}
        key={value}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <span>{name}</span>
        <HandIcon className="material-icons">pan_tool</HandIcon>
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
            {handItems}
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
