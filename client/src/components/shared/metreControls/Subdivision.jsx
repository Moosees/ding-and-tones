import React from 'react';
import { useMemo } from 'react';
import { getSubdivisionOptions } from '../../../assets/metre';
import Select from '../select/Select';
import SelectSmall from '../select/SelectSmall';

const Subdivision = ({
  beatIndex,
  metre,
  setSubdivision,
  small,
  subdivision,
  type,
}) => {
  const subdivisionOptions = useMemo(
    () => getSubdivisionOptions(type, metre, beatIndex),
    [type, metre, beatIndex]
  );

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
