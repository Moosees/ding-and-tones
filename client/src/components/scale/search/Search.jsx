import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startSearch } from '../../../redux/search/search.actions';
import searchOptions from '../../../redux/search/search.options';
import { SearchContainer } from './search.styles';
import InfoSearch from '../../shared/infoBox/InfoSearch';

const Search = ({ isSearching, scalesFetchTried, startSearch }) => {
  useEffect(() => {
    if (!scalesFetchTried && !isSearching)
      startSearch(searchOptions.scales.latest);
  }, [isSearching, scalesFetchTried, startSearch]);

  return (
    <SearchContainer>
      <InfoSearch
        onSearch={(value) =>
          startSearch(searchOptions.scales.alphabetical, value)
        }
        placeholder="Search scales"
        size={25}
      />
    </SearchContainer>
  );
};

const mapStateToProps = ({ search }) => ({
  isSearching: search.isSearching,
  scalesFetchTried: search.scalesFetchTried,
});

export default connect(mapStateToProps, { startSearch })(Search);
