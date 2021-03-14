import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startSearch } from '../../../redux/search/search.actions';
import searchOptions from '../../../redux/search/search.options';
import BtnPrimary from '../../shared/button/Primary';
import InfoSearch from '../../shared/input/InfoSearch';
import { SearchContainer } from './search.styles';

const Search = ({ isSearching, isSignedIn, startSearch }) => {
  const [value, setValue] = useState('');

  const handleNewSongsClick = () => {
    setValue('');
    startSearch(searchOptions.songs.latest);
  };

  const handleMySongsClick = () => {
    setValue('');
    startSearch(searchOptions.songs.me);
  };

  return (
    <SearchContainer>
      <BtnPrimary
        disabled={isSearching}
        label="New Songs"
        onClick={handleNewSongsClick}
      />
      <InfoSearch
        value={value}
        setValue={setValue}
        placeholder="Search songs"
        searchOption={searchOptions.songs.alphabetical}
      />
      <BtnPrimary
        disabled={!isSignedIn || isSearching}
        label="My Songs"
        onClick={handleMySongsClick}
      />
    </SearchContainer>
  );
};

const mapStateToProps = ({ search, user }) => ({
  isSearching: search.isSearching,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { startSearch })(Search);
