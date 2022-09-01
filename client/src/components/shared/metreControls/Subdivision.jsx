import React from 'react';
import { getSubDivisionOptions } from '../../../assets/metre';
import Select from '../select/Select';
import SelectSmall from '../select/SelectSmall';

const Subdivision = ({
  beatIndex,
  isBar,
  metre,
  setSubdivision,
  small,
  subdivision,
}) => {
  const subdivisionOptions = getSubDivisionOptions(isBar, metre, beatIndex);

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
