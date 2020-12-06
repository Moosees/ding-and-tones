import React from 'react';
import { metreList } from '../../../assets/metre';
import InfoSelect from '../infoBox/InfoSelect';

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
  // isBtn,
  hasLabel,
  metre,
  subdivision,
  setSubdivision,
}) => {
  const { minSubdivision } = metreList[metre];

  const parsedOptions = subdivisionOptions.map((option) => ({
    ...option,
    disabled: option.disabled(minSubdivision),
  }));

  return (
    <InfoSelect
      hasLabel={hasLabel}
      value={subdivision}
      handleChange={setSubdivision}
      options={parsedOptions}
    >
      {'Subdivision: '}
    </InfoSelect>
  );
};

export default Subdivision;
