import React, { useEffect, useState } from 'react';
import { TextInput } from './infoBox.styles';

const InfoSearch = ({ autoFocus, onSearch, placeholder, size }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => clearTimeout(timeout);
  }, [onSearch, value]);

  return (
    <TextInput
      autoFocus={autoFocus}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      size={size}
      value={value}
    />
  );
};

export default InfoSearch;
