import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSearch } from '../../../redux/search/search.actions';
import searchOptions from '../../../redux/search/search.options';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Buttons from '../../shared/button/Buttons';
import InfoSearch from '../../shared/input/InfoSearch';
import { SearchContainer } from './search.styles';

const Search = () => {
  const dispatch = useDispatch();
  const isSearching = useSelector(({ search }) => search.isSearching);
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);

  const [value, setValue] = useState('');

  const handleNewScalesClick = () => {
    setValue('');
    dispatch(startSearch(searchOptions.scales.latest));
  };

  const handleMyScalesClick = () => {
    setValue('');
    dispatch(startSearch(searchOptions.scales.me));
  };

  return (
    <SearchContainer>
      <InfoSearch
        value={value}
        setValue={setValue}
        placeholder="Search scales"
        searchOption={searchOptions.scales.alphabetical}
      />
      <Buttons>
        <BtnPrimary
          disabled={isSearching}
          label="New Scales"
          onClick={handleNewScalesClick}
        />
        <BtnPrimary
          disabled={!isSignedIn || isSearching}
          label="My Scales"
          onClick={handleMyScalesClick}
        />
      </Buttons>
    </SearchContainer>
  );
};

export default Search;
