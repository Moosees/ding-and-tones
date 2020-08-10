import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDataFrom } from '../../redux/search/search.actions';
import { SearchContainer } from './scaleSearch.styles';

const ScaleSearch = ({ fetchDataFrom, isSearching, scales }) => {
  useEffect(() => {
    console.log('fetching scales');
    fetchDataFrom('/scale');
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

export default connect(mapStateToProps, { fetchDataFrom })(ScaleSearch);
