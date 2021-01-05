import React from 'react';
import { connect } from 'react-redux';
import { updateBeat } from '../../../redux/song/song.actions';
import { setDropdownForBeat } from '../../../redux/ui/ui.actions';
import { Dropdown, DropdownItem } from './beat.styles';

const BeatDropdown = ({
  beatId,
  handleChange,
  options,
  setDropdownForBeat,
  sound,
  updateBeat,
}) => {
  const { single, percussive, nonScale } = options;

  const handleClick = (newSound, selected, e) => {
    e.stopPropagation();
    updateBeat(beatId, newSound, selected);
  };

  const getOptions = () => {
    const allOptions = [...percussive, ...single, ...nonScale];
    if (allOptions.length)
      return allOptions.map(({ label, value }, i) => {
        const selected = sound.includes(value);

        return (
          <DropdownItem
            disabled={sound.length >= 2 && !selected}
            selected={selected}
            key={i}
            onClick={(e) => handleClick(value, selected, e)}
          >
            {label}
          </DropdownItem>
        );
      });
  };

  return <Dropdown>{getOptions()}</Dropdown>;
};

const mapStateToProps = ({ ui }) => ({
  options: ui.soundOptions,
});

export default connect(mapStateToProps, { setDropdownForBeat, updateBeat })(
  BeatDropdown
);
