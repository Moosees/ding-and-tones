import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDataFrom } from '../../redux/search/search.actions';
import { SearchContainer } from './songSearch.styles';

const SongSearch = ({ fetchDataFrom, isSearching }) => {
  useEffect(() => {
    console.log('fetching songs');
    fetchDataFrom('/song');
  }, [fetchDataFrom]);

  return (
    <SearchContainer>
      <button disabled={isSearching}>Search</button>
    </SearchContainer>
  );
};

const mapStateToProps = ({ search }) => ({
  isSearching: search.isSearching,
});

export default connect(mapStateToProps, { fetchDataFrom })(SongSearch);
