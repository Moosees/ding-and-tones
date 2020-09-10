import React from 'react';
import { connect } from 'react-redux';
import { startSearch } from '../../../redux/search/search.actions';
import searchOptions from '../../../redux/search/search.options';
import BtnPrimary from '../../shared/button/Primary';
import InfoSearch from '../../shared/infoBox/InfoSearch';
import { SearchContainer } from './search.styles';

const Search = ({ isSearching, startSearch }) => {
  return (
    <SearchContainer>
      <InfoSearch
        placeholder="Search songs"
        searchOption={searchOptions.songs.alphabetical}
        size={30}
      />
      <BtnPrimary
        disabled={isSearching}
        label="My songs"
        onClick={() => startSearch(searchOptions.songs.me)}
      />
    </SearchContainer>
  );
};

const mapStateToProps = ({ search }) => ({
  isSearching: search.isSearching,
});

export default connect(mapStateToProps, { startSearch })(Search);
