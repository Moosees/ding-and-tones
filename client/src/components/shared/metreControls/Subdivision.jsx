import React from 'react';
import { metreList } from '../../../assets/metre';
import Select from '../select/Select';

const subdivisionOptions = [
  { value: 4, label: '4ths', disabled: (minSubdivision) => minSubdivision > 4 },
  { value: 8, label: '8ths', disabled: (minSubdivision) => minSubdivision > 8 },
  {
    value: 16,
    label: '16ths',
    disabled: (minSubdivision) => minSubdivision > 16,
  },
];

const Subdivision = ({
  hasLabel,
  large,
  metre,
  setSubdivision,
  small,
  subdivision,
}) => {
  const { minSubdivision } = metreList[metre];

  const parsedOptions = subdivisionOptions.map((option) => ({
    ...option,
    disabled: option.disabled(minSubdivision),
  }));

  return (
    <Select
      large={large}
      small={small}
      hasLabel={hasLabel}
      value={subdivision}
      handleChange={setSubdivision}
      options={parsedOptions}
    >
      {!small && 'Subdivision: '}
    </Select>
  );
};

export default Subdivision;
