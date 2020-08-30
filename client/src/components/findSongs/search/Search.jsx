import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startSearch } from '../../../redux/search/search.actions';
import searchOptions from '../../../redux/search/search.options';
import InfoSearch from '../../shared/infoBox/InfoSearch';
import { SearchContainer } from './search.styles';

const Search = ({ isSearching, songsFetchTried, startSearch }) => {
  useEffect(() => {
    if (!songsFetchTried && !isSearching)
      startSearch(searchOptions.songs.latest);
  }, [isSearching, songsFetchTried, startSearch]);

  return (
    <SearchContainer>
      <InfoSearch
        onSearch={(value) =>
          startSearch(searchOptions.songs.alphabetical, value)
        }
        placeholder="Search songs"
        size={30}
      />
    </SearchContainer>
  );
};

const mapStateToProps = ({ search }) => ({
  isSearching: search.isSearching,
  songsFetchTried: search.songsFetchTried,
});

export default connect(mapStateToProps, { startSearch })(Search);
