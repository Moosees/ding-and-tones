import React, { useEffect } from 'react';
import { InfoLayout } from '../layout/layout.styles';
import Spinner from '../spinner/Spinner';
import { TextInput } from './input.styles';

const InfoSearch = ({ placeholder, onSearch, setValue, value, isSearching }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch()
    }, 600);

    return () => clearTimeout(timeout);
  }, [onSearch]);

  return (
    <InfoLayout as="label">
      <TextInput
        aria-label={placeholder}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        value={value}
        onKeyDown={(e) => e.stopPropagation()}
      />
      <Spinner isSpinning={isSearching} />
    </InfoLayout>
  );
};

export default InfoSearch;
