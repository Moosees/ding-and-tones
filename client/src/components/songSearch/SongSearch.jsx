import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDataFrom } from '../../redux/search/search.actions';
import { SearchContainer } from './songSearch.styles';

const SongSearch = ({ fetchDataFrom, isSearching, songs, signInTried }) => {
  useEffect(() => {
    if (signInTried && !isSearching && !songs.length) {
      console.log('fetching songs');
      fetchDataFrom('/song');
    }
  }, [songs, signInTried, isSearching, fetchDataFrom]);

  return <SearchContainer>Search</SearchContainer>;
};

const mapStateToProps = ({ search, user }) => ({
  isSearching: search.isSearching,
  songs: search.songs,
  signInTried: user.signInTried,
});

export default connect(mapStateToProps, { fetchDataFrom })(SongSearch);
