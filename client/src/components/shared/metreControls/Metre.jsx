import React from 'react';
import { getMetreOptions, metreList } from '../../../assets/metre';
import Select from '../select/Select';

const metreOptions = getMetreOptions();

const Metre = ({ metre, setMetre, subdivision, setSubdivision }) => {
  console.log({ metreOptions });
  const handleTimeChange = (newMetre) => {
    const { metreBase } = metreList[newMetre];

    setMetre(newMetre);

    if (setSubdivision && metreBase > subdivision) {
      setSubdivision(metreBase);
    }
  };

  return (
    <Select
      large
      value={metre}
      handleChange={handleTimeChange}
      options={metreOptions}
      label="Metre: "
    />
  );
};

export default Metre;
