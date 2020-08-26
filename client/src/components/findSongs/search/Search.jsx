import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startSearch } from '../../../redux/search/search.actions';
import searchOptions from '../../../redux/search/search.options';
import { SearchContainer } from './search.styles';

const Search = ({ isSearching, songsFetchTried, startSearch }) => {
  useEffect(() => {
    if (!songsFetchTried && !isSearching)
      startSearch(searchOptions.songs.latest);
  }, [isSearching, songsFetchTried, startSearch]);

  return <SearchContainer>Search</SearchContainer>;
};

const mapStateToProps = ({ search }) => ({
  isSearching: search.isSearching,
  songsFetchTried: search.songsFetchTried,
});

export default connect(mapStateToProps, { startSearch })(Search);
