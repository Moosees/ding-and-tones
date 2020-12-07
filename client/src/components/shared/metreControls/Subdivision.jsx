import React from 'react';
import { metreList } from '../../../assets/metre';
import GradientSelect from '../select/GradientSelect';
import InfoSelect from '../select/InfoSelect';

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
  gradient,
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

  const Component = gradient ? GradientSelect : InfoSelect;

  return (
    <Component
      gradient={gradient}
      hasLabel={hasLabel}
      value={subdivision}
      handleChange={setSubdivision}
      options={parsedOptions}
    >
      {!gradient && 'Subdivision: '}
    </Component>
  );
};

export default Subdivision;
