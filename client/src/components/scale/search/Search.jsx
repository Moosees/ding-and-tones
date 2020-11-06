import React from 'react';
import { connect } from 'react-redux';
import { startSearch } from '../../../redux/search/search.actions';
import searchOptions from '../../../redux/search/search.options';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import InfoSearch from '../../shared/infoBox/InfoSearch';
import { SearchContainer } from './search.styles';

const Search = ({ isSearching, isSignedIn, startSearch }) => {
  return (
    <SearchContainer>
      <InfoSearch
        placeholder="Search scales"
        searchOption={searchOptions.scales.alphabetical}
      />
      <Buttons position="center">
        <BtnPrimary
          disabled={isSearching}
          label="New Scales"
          onClick={() => startSearch(searchOptions.scales.latest)}
        />
        <BtnPrimary
          disabled={!isSignedIn || isSearching}
          label="My Scales"
          onClick={() => startSearch(searchOptions.scales.me)}
        />
      </Buttons>
    </SearchContainer>
  );
};

const mapStateToProps = ({ search, user }) => ({
  isSearching: search.isSearching,
  isSignedIn: user.isSignedIn,
});

export default connect(mapStateToProps, { startSearch })(Search);
