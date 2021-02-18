import React from 'react';
import { connect } from 'react-redux';
import useCloseOutside from '../../../hooks/useCloseOutside';
import { updateBeat } from '../../../redux/song/song.actions';
import { Dropdown, DropdownItem } from './beat.styles';

const BeatDropdown = ({
  beatId,
  btnRef,
  handleChange,
  hasNonScaleNote,
  isOpenCb,
  options,
  sound,
  updateBeat,
}) => {
  const { insideRef } = useCloseOutside(isOpenCb, btnRef);
  const { single, percussive, nonScale } = options;

  const handleClick = (newSound, selected) => {
    updateBeat(beatId, newSound, selected);
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
            onClick={(e) => handleClick(value, selected, e)}
          >
            {label}
          </DropdownItem>
        );
      });
    };

    return [
      ...parseOptionArray(percussive),
      ...parseOptionArray(single),
      ...parseOptionArray(nonScale, hasNonScaleNote),
    ];
  };

  return <Dropdown ref={insideRef}>{renderOptions()}</Dropdown>;
};

const mapStateToProps = ({ ui }) => ({
  options: ui.soundOptions,
});

export default connect(mapStateToProps, { updateBeat })(BeatDropdown);
