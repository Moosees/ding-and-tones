import React from 'react';
import { connect } from 'react-redux';
import { Select, SelectContainer } from './infoBox.styles';

const InfoSelect = ({
  children,
  handleChange,
  isSongPlaying,
  options,
  value,
}) => {
  return (
    <SelectContainer>
      {children}
      <Select
        disabled={isSongPlaying}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};

const mapStateToProps = ({ ui }) => ({
  isSongPlaying: ui.isSongPlaying,
});

export default connect(mapStateToProps)(InfoSelect);
