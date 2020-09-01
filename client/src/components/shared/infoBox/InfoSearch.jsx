import React, { useEffect, useState } from 'react';
import InfoBox from './InfoBox';
import { TextInput } from './infoBox.styles';

const InfoSearch = ({ onSearch, placeholder, size }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value.length > 2) onSearch(value);
    }, 400);

    return () => clearTimeout(timeout);
  }, [onSearch, value]);

  return (
    <InfoBox>
      <TextInput
        autoFocus
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        size={size}
        value={value}
      />
    </InfoBox>
  );
};

export default InfoSearch;
