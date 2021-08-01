import React from 'react';
import { connect } from 'react-redux';
import {
  SelectDropdown,
  SelectLabel,
  SelectLayoutSmall,
} from './select.styles';
import { parseOptions } from './select.utils';

const SelectSmall = ({
  handleChange,
  isSongPlaying,
  options,
  value,
}) => {
  return (
    <SelectLayoutSmall disabled={isSongPlaying} large={large}>
      <SelectLabel hasLabel={hasLabel} small={small} disabled={isSongPlaying}>
        <SelectDropdown
          small={small}
          hasLabel={hasLabel}
          disabled={isSongPlaying}
          value={value}
          labelWidth={small ? 20 : 52}
          onChange={(e) => handleChange(e.target.value)}
        >
          {parseOptions(options)}
        </SelectDropdown>
        <i className="material-icons">keyboard_arrow_down</i>
      </SelectLabel>
    </SelectLayoutSmall>
  );
};

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps)(SelectSmall);
