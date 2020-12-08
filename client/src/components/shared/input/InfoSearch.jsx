import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startSearch } from '../../../redux/search/search.actions';
import { InfoLayout } from '../layout/layout.styles';
import Spinner from '../spinner/Spinner';
import { TextInput } from './input.styles';

const InfoSearch = ({
  isSearching,
  placeholder,
  searchOption,
  startSearch,
}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value.length > 2) startSearch(searchOption, value);
    }, 600);

    return () => clearTimeout(timeout);
  }, [searchOption, startSearch, value]);

  return (
    <InfoLayout>
      <TextInput
        autoFocus
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        value={value}
      />
      <Spinner isSpinning={isSearching} />
    </InfoLayout>
  );
};

const mapStateToProps = ({ search }) => ({
  isSearching: search.isSearching,
});

export default connect(mapStateToProps, { startSearch })(InfoSearch);
