import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setScalesFound } from '../../redux/search/search.actions';
import { SearchContainer } from './scaleSearch.styles';

const ScaleSearch = ({ scalesFound, setScalesFound, signInTried }) => {
  useEffect(() => {
    if (scalesFound === null && signInTried)
      axios
        .get('/scale')
        .then((res) => {
          if (res.status !== 200) throw new Error('Could not get scales');

          setScalesFound(res.data);
        })
        .catch((error) => console.error(error));
  }, [scalesFound, signInTried, setScalesFound]);

  return <SearchContainer>Search</SearchContainer>;
};

const mapStateToProps = ({ search, user }) => ({
  scalesFound: search.scalesFound,
  signInTried: user.signInTried,
});

export default connect(mapStateToProps, { setScalesFound })(ScaleSearch);
