import React from 'react';
import { connect } from 'react-redux';
import { startSearch } from '../../../redux/search/search.actions';
import searchOptions from '../../../redux/search/search.options';
import InfoSearch from '../../shared/infoBox/InfoSearch';
import { SearchContainer } from './search.styles';

const Search = ({ startSearch }) => {
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

export default connect(null, { startSearch })(Search);
