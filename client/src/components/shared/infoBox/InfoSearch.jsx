import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startSearch } from '../../../redux/search/search.actions';
import InfoBox from './InfoBox';
import { TextInput } from './infoBox.styles';

const InfoSearch = ({ placeholder, searchOption, size, startSearch }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value.length > 2) startSearch(searchOption, value);
    }, 600);

    return () => clearTimeout(timeout);
  }, [searchOption, startSearch, value]);

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

export default connect(null, { startSearch })(InfoSearch);
