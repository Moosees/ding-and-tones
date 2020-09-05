import React from 'react';
import searchOptions from '../../../redux/search/search.options';
import InfoSearch from '../../shared/infoBox/InfoSearch';
import { SearchContainer } from './search.styles';

const Search = () => {
  return (
    <SearchContainer>
      <InfoSearch
        placeholder="Search songs"
        searchOption={searchOptions.songs.alphabetical}
        size={30}
      />
    </SearchContainer>
  );
};

export default Search;
