import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startSearch } from '../../../redux/search/search.actions';
import searchOptions from '../../../redux/search/search.options';
import { SearchContainer } from './search.styles';

const Search = ({ isSearching, scalesFetchTried, startSearch }) => {
  useEffect(() => {
    if (!scalesFetchTried && !isSearching)
      startSearch(searchOptions.scales.latest);
  }, [isSearching, scalesFetchTried, startSearch]);

  return <SearchContainer>Search</SearchContainer>;
};

const mapStateToProps = ({ search }) => ({
  isSearching: search.isSearching,
  scalesFetchTried: search.scalesFetchTried,
});

export default connect(mapStateToProps, { startSearch })(Search);
