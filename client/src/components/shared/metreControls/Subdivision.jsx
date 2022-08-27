import React from 'react';
import { getSubDivisionOptions } from '../../../assets/metre';
import Select from '../select/Select';
import SelectSmall from '../select/SelectSmall';

const Subdivision = ({ metre, setSubdivision, small, subdivision }) => {
  const subdivisionOptions = getSubDivisionOptions(true, metre, 0);
  console.log(subdivisionOptions);

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
