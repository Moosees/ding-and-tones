import React from 'react';
import { metreList } from '../../../assets/metre';
import Select from '../select/Select';

const metreOptions = [
  {
    group: 'Simple metre',
    options: [
      { value: 's24', label: '2/4' },
      { value: 's34', label: '3/4' },
      { value: 's44', label: '4/4' },
      { value: 's54', label: '5/4' },
    ],
  },
  {
    group: 'Compound metre',
    options: [
      { value: 'c68', label: '6/8' },
      { value: 'c98', label: '9/8' },
      { value: 'c128', label: '12/8' },
    ],
  },
  {
    group: 'Complex metre',
    options: [
      { value: 'x223', label: '7/8 - 2-2-3' },
      { value: 'x232', label: '7/8 - 2-3-2' },
      { value: 'x322', label: '7/8 - 3-2-2' },
      { value: 'x233', label: '8/8 - 2-3-3' },
      { value: 'x323', label: '8/8 - 3-2-3' },
      { value: 'x332', label: '8/8 - 3-3-2' },
    ],
  },
];

const Metre = ({
  gradient,
  hasLabel,
  large,
  metre,
  setMetre,
  subdivision,
  setSubdivision,
}) => {
  const handleTimeChange = (newMetre) => {
    const { minSubdivision } = metreList[newMetre];

    setMetre(newMetre);

    if (setSubdivision && minSubdivision > subdivision) {
      setSubdivision(minSubdivision);
    }
  };

  return (
    <Select
      large={large}
      gradient={gradient}
      hasLabel={hasLabel}
      value={metre}
      handleChange={handleTimeChange}
      options={metreOptions}
    >
      {'Metre: '}
    </Select>
  );
};

export default Metre;
