import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startSearch } from '../../../redux/search/search.actions';
import searchOptions from '../../../redux/search/search.options';
import Buttons from '../../shared/button/Buttons';
import BtnPrimary from '../../shared/button/Primary';
import InfoSearch from '../../shared/input/InfoSearch';
import { SearchContainer } from './search.styles';

const Search = ({ isSearching, isSignedIn, startSearch }) => {
  const [value, setValue] = useState('');

  const handleNewScalesClick = () => {
    setValue('');
    startSearch(searchOptions.scales.latest);
  };

  const handleMyScalesClick = () => {
    setValue('');
    startSearch(searchOptions.scales.me);
  };

  return (
    <SearchContainer>
      <InfoSearch
        value={value}
        setValue={setValue}
        placeholder="Search scales"
        searchOption={searchOptions.scales.alphabetical}
      />
      <Buttons position="center">
        <BtnPrimary
          disabled={isSearching}
          label="New Scales"
          onClick={handleNewScalesClick}
        />
        <BtnPrimary
          disabled={!isSignedIn || isSearching}
          label="My Scales"
          onClick={handleMyScalesClick}
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
