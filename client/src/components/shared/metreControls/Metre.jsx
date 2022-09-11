import React from 'react';
import { getMetreOptions } from '../../../assets/metre';
import Select from '../select/Select';

const metreOptions = getMetreOptions();

const Metre = ({ metre, setMetre, setSubdivision }) => {
  console.log({ metreOptions });
  const handleTimeChange = (newMetre) => {
    setMetre(newMetre);

    if (setSubdivision) {
      setSubdivision(8);
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
