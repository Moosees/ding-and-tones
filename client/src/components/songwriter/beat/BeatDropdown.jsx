import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { hands } from '../../../assets/constants';
import useCloseOutside from '../../../hooks/useCloseOutside';
import {
  updateHandForBeat,
  updateSoundForBeat,
} from '../../../redux/song/song.actions';
import DividerLine from '../../shared/dividerLine/DividerLine';
import { DropdownContext } from '../dropdownHandler/DropdownHandler';
import {
  Dropdown,
  DropdownColumn,
  DropdownItem,
  HandIcon,
} from './beat.styles';

const BeatDropdown = ({
  beatId,
  btnRef,
  dropdownPosRef,
  hand,
  hasNonScaleNote,
  isOpenCb,
  options,
  sound,
  updateHandForBeat,
  updateSoundForBeat,
  value,
}) => {
  const { insideRef } = useCloseOutside(isOpenCb, btnRef);
  const { borderHeight, borderWidth, listScroll } = useContext(DropdownContext);
  const { offsetTop, offsetLeft } = dropdownPosRef.current;
  const openTop = offsetTop - listScroll > borderHeight / 2;
  const openLeft = offsetLeft > borderWidth / 2;

  const parseOptions = (optionArray, hasNonScaleNote) =>
    optionArray.map(({ label, value }) => {
      const selected = sound.includes(value);

      return hasNonScaleNote && !selected ? null : (
        <DropdownItem
          disabled={sound.length >= 2 && !selected}
          selected={selected}
          key={value}
          hasNonScaleNote={hasNonScaleNote}
          onClick={() => updateSoundForBeat(beatId, value, selected)}
        >
          {label}
        </DropdownItem>
      );
    });

  const handItems = hands.map(({ name, value }) => (
    <DropdownItem
      selected={value === hand}
      key={value}
      onClick={() => updateHandForBeat(beatId, value, value === hand)}
    >
      <span>{name}</span>
      <HandIcon className="material-icons">pan_tool</HandIcon>
    </DropdownItem>
  ));

  return (
    <Dropdown
      ref={insideRef}
      openLeft={openLeft}
      openTop={openTop}
      value={value}
    >
      <DropdownColumn>
        {parseOptions(options.single)}
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
        {parseOptions(options.percussive)}
        <DividerLine small />
        {handItems}
      </DropdownColumn>
    </Dropdown>
  );
};

const mapStateToProps = ({ ui }) => ({
  options: ui.soundOptions,
});

export default connect(mapStateToProps, {
  updateHandForBeat,
  updateSoundForBeat,
})(BeatDropdown);
