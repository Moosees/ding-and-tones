import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDataFrom } from '../../redux/search/search.actions';
import { SearchContainer } from './scaleSearch.styles';

const ScaleSearch = ({ fetchDataFrom, isFetching, scales, signInTried }) => {
  useEffect(() => {
    if (scales === null && signInTried && !isFetching) fetchDataFrom('/scale');
  }, [scales, signInTried, isFetching, fetchDataFrom]);

  return <SearchContainer>Search</SearchContainer>;
};

const mapStateToProps = ({ search, user }) => ({
  isFetching: search.isFetching,
  scales: search.scales,
  signInTried: user.signInTried,
});

export default connect(mapStateToProps, { fetchDataFrom })(ScaleSearch);
