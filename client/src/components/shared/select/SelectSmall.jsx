import React from 'react';
import { connect } from 'react-redux';
import { SelectDropdown, SelectLabelSmall } from './select.styles';
import { parseOptions } from './select.utils';

const SelectSmall = ({ handleChange, isSongPlaying, options, value }) => {
  return (
    <SelectLabelSmall disabled={isSongPlaying}>
      <SelectDropdown
        small
        disabled={isSongPlaying}
        value={value}
        labelWidth={20}
        onChange={(e) => handleChange(e.target.value)}
      >
        {parseOptions(options)}
      </SelectDropdown>
      <i className="material-icons">keyboard_arrow_down</i>
    </SelectLabelSmall>
  );
};

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps)(SelectSmall);
