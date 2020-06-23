import React from 'react';
import { connect } from 'react-redux';
import { updateBeat } from '../../redux/bars/bars.actions';
import { setDropdownForBeat } from '../../redux/ui/ui.actions';
import { Dropdown } from './beat.styles';

const BeatDropdown = ({
  beatId,
  handleChange,
  options,
  setDropdownForBeat,
  sound,
  updateBeat,
}) => {
  const handleClick = (newSound, e) => {
    e.stopPropagation();
    updateBeat(beatId, newSound);
    setDropdownForBeat(null);
  };

  return (
    <Dropdown>
      {options.single &&
        options.single.map(({ label, value }, i) => (
          <div
            selected={value === sound}
            key={i}
            onClick={(e) => handleClick(value, e)}
          >
            {label}
          </div>
        ))}
    </Dropdown>
  );
};

const mapStateToProps = ({ ui }) => ({
  options: ui.options,
});

export default connect(mapStateToProps, { setDropdownForBeat, updateBeat })(
  BeatDropdown
);
