import React from 'react';
import { Select, SelectContainer } from './infoBox.styles';

const InfoSelect = ({ children, handleChange, options, value }) => {
  return (
    <SelectContainer>
      {children}
      <Select value={value} onChange={(e) => handleChange(e.target.value)}>
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};

export default InfoSelect;
