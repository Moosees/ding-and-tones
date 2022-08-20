import React from 'react';
import { metreList } from '../../../assets/metre';
import Select from '../select/Select';
import SelectSmall from '../select/SelectSmall';

const subdivisionOptions = [
  { value: 4, label: '4ths', disabled: (minSubdivision) => minSubdivision > 4 },
  { value: 8, label: '8ths', disabled: (minSubdivision) => minSubdivision > 8 },
  {
    value: 9,
    label: 'Trip8',
    disabled: (minSubdivision) => minSubdivision > 8,
  },
  {
    value: 16,
    label: '16ths',
    disabled: (minSubdivision) => minSubdivision > 16,
  },
  {
    value: 17,
    label: 'Trip16',
    disabled: (minSubdivision) => minSubdivision > 16,
  },
];

const Subdivision = ({ metre, setSubdivision, small, subdivision }) => {
  const { minSubdivision } = metreList[metre];

  const parsedOptions = subdivisionOptions.map((option) => ({
    ...option,
    disabled: option.disabled(minSubdivision),
  }));

  const SelectComponent = small ? SelectSmall : Select;

  return (
    <SelectComponent
      large
      value={subdivision}
      handleChange={setSubdivision}
      options={parsedOptions}
      label={small ? null : 'Subdivision: '}
    />
  );
};

export default Subdivision;
