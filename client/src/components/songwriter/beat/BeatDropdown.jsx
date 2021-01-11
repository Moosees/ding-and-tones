import React from 'react';
import { connect } from 'react-redux';
import { updateBeat } from '../../../redux/song/song.actions';
import { setDropdownForBeat } from '../../../redux/ui/ui.actions';
import { Dropdown, DropdownItem } from './beat.styles';

const BeatDropdown = ({
  beatId,
  handleChange,
  hasNonScaleNote,
  options,
  setDropdownForBeat,
  sound,
  updateBeat,
}) => {
  const handleClick = (newSound, selected, e) => {
    e.stopPropagation();
    updateBeat(beatId, newSound, selected);
  };

  const renderOptions = () => {
    const { single, percussive, nonScale } = options;

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

  return <Dropdown>{renderOptions()}</Dropdown>;
};

const mapStateToProps = ({ ui }) => ({
  options: ui.soundOptions,
});

export default connect(mapStateToProps, { setDropdownForBeat, updateBeat })(
  BeatDropdown
);
