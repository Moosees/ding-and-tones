import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSearch } from '../../../redux/search/search.actions';
import searchOptions from '../../../redux/search/search.options';
import BtnPrimary from '../../shared/button/BtnPrimary';
import InfoSearch from '../../shared/input/InfoSearch';
import { SearchContainer } from './search.styles';

const Search = () => {
  const dispatch = useDispatch();
  const isSearching = useSelector(({ search }) => search.isSearching);
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);

  const [value, setValue] = useState('');

  const handleNewSongsClick = () => {
    setValue('');
    dispatch(startSearch(searchOptions.songs.latest));
  };

  const handleMySongsClick = () => {
    setValue('');
    dispatch(startSearch(searchOptions.songs.me));
  };

  return (
    <SearchContainer>
      <BtnPrimary
        disabled={isSearching}
        label="New Songs"
        onClick={handleNewSongsClick}
      />
      { /*<InfoSearch
        value={value}
        setValue={setValue}
        placeholder="Search songs"
        searchOption={searchOptions.songs.alphabetical}
      /> */}
      <BtnPrimary
        disabled={!isSignedIn || isSearching}
        label="My Songs"
        onClick={handleMySongsClick}
      />
    </SearchContainer>
  );
};

export default Search;
