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
  handleChange,
  hasNonScaleNote,
  isOpenCb,
  options,
  sound,
  updateHandForBeat,
  updateSoundForBeat,
}) => {
  const { insideRef } = useCloseOutside(isOpenCb, btnRef);
  const { single, percussive, nonScale } = options;

  const handleClick = (newSound, selected) => {
    updateSoundForBeat(beatId, newSound, selected);
  };

  const renderOptions = () => {
    const parseOptionArray = (optionArray, hasNonScaleNote) => {
      return optionArray.map(({ label, value }) => {
        const selected = sound.includes(value);

        return (
          <DropdownItem
            disabled={sound.length >= 2 && !selected}
            selected={selected}
            key={value}
            hasNonScaleNote={hasNonScaleNote}
            onClick={() => handleClick(value, selected)}
          >
            {label}
          </DropdownItem>
        );
      });
    };

    const parseHands = () => {
      return hands.map(({ name, value }) => (
        <DropdownItem
          selected={value === hand}
          key={value}
          onClick={() => updateHandForBeat(beatId, value, value === hand)}
        >
          {name}
        </DropdownItem>
      ));
    };

    return (
      <>
        <DropdownColumn>{parseOptionArray(single)}</DropdownColumn>
        <DropdownColumn>
          <DividerLine vertical small />
        </DropdownColumn>
        <DropdownColumn>
          {parseOptionArray(percussive)}
          {parseOptionArray(nonScale, hasNonScaleNote)}
          <DividerLine small />
          {parseHands()}
        </DropdownColumn>
      </>
    );
  };

  return <Dropdown ref={insideRef}>{renderOptions()}</Dropdown>;
};

const mapStateToProps = ({ ui }) => ({
  options: ui.soundOptions,
});

export default connect(mapStateToProps, {
  updateHandForBeat,
  updateSoundForBeat,
})(BeatDropdown);
