import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDataFrom } from '../../redux/search/search.actions';
import { SearchContainer } from './scaleSearch.styles';

const ScaleSearch = ({ fetchDataFrom, isSearching, scales, signInTried }) => {
  useEffect(() => {
    if (scales === null && signInTried && !isSearching) fetchDataFrom('/scale');
  }, [scales, signInTried, isSearching, fetchDataFrom]);

  return <SearchContainer>Search</SearchContainer>;
};

const mapStateToProps = ({ search, user }) => ({
  isSearching: search.isSearching,
  scales: search.scales,
  signInTried: user.signInTried,
});

export default connect(mapStateToProps, { fetchDataFrom })(ScaleSearch);
