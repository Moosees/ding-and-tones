import React from 'react';
import { connect } from 'react-redux';
import { InfoLayout } from '../layout/layout.styles';
import { SelectDropdown, SelectLabel } from './select.styles';
import { parseOptions } from './select.utils';

const Select = ({ children, handleChange, isSongPlaying, options, value }) => {
  return (
    <InfoLayout disabled={isSongPlaying} large={large}>
      <SelectLabel hasLabel={hasLabel} small={small} disabled={isSongPlaying}>
        <span>{children}</span>
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
    </InfoLayout>
  );
};

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps)(Select);
