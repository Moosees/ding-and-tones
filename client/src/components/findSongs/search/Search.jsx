import React from 'react';
import { connect } from 'react-redux';
import { startSearch } from '../../../redux/search/search.actions';
import searchOptions from '../../../redux/search/search.options';
import BtnPrimary from '../../shared/button/Primary';
import InfoSearch from '../../shared/infoBox/InfoSearch';
import { SearchContainer } from './search.styles';

const Search = ({ isSearching, isSignedIn, startSearch }) => {
  return (
    <SearchContainer>
      <BtnPrimary
        disabled={isSearching}
        label="New Songs"
        onClick={() => startSearch(searchOptions.songs.latest)}
      />
      <InfoSearch
        placeholder="Search songs"
        searchOption={searchOptions.songs.alphabetical}
      />
      <BtnPrimary
        disabled={!isSignedIn || isSearching}
        label="My Songs"
        onClick={() => startSearch(searchOptions.songs.me)}
      />
    </SearchContainer>
  );
};

const mapStateToProps = ({ search, user }) => ({
  isSearching: search.isSearching,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { startSearch })(Search);
