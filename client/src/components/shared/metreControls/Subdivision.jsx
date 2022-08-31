import React from 'react';
import { getSubDivisionOptions } from '../../../assets/metre';
import Select from '../select/Select';
import SelectSmall from '../select/SelectSmall';

const Subdivision = ({ isBar, metre, setSubdivision, small, subdivision }) => {
  const subdivisionOptions = getSubDivisionOptions(isBar, metre, 0);
  console.log(subdivisionOptions, subdivision, setSubdivision);

  const SelectComponent = small ? SelectSmall : Select;

  return (
    <SelectComponent
      large
      value={subdivision}
      handleChange={setSubdivision}
      options={subdivisionOptions}
      label={small ? null : 'Subdivision: '}
    />
  );
};

export default Subdivision;
