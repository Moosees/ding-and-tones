import React from 'react';
import { connect } from 'react-redux';
import { hands } from '../../../assets/constants';
import useCloseOutside from '../../../hooks/useCloseOutside';
import {
  updateHandForBeat,
  updateSoundForBeat,
} from '../../../redux/song/song.actions';
import DividerLine from '../../shared/dividerLine/DividerLine';
import { Dropdown, DropdownColumn, DropdownItem } from './beat.styles';

const BeatDropdown = ({
  beatId,
  btnRef,
  hand,
  hasNonScaleNote,
  isOpenCb,
  options,
  sound,
  updateHandForBeat,
  updateSoundForBeat,
}) => {
  const { insideRef } = useCloseOutside(isOpenCb, btnRef);

  const parseOptions = (optionArray, hasNonScaleNote) =>
    optionArray.map(({ label, value }) => {
      const selected = sound.includes(value);

      return (
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
      {name}
    </DropdownItem>
  ));

  return (
    <Dropdown ref={insideRef}>
      <DropdownColumn>{parseOptions(options.single)}</DropdownColumn>
      <DropdownColumn>
        <DividerLine vertical small />
      </DropdownColumn>
      <DropdownColumn>
        {parseOptions(options.percussive)}
        <DividerLine small />
        {handItems}
        {hasNonScaleNote && (
          <>
            <DividerLine small />
            {parseOptions(options.nonScale, hasNonScaleNote)}
          </>
        )}
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
