import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchMyScalesQuery, useSearchNewScalesQuery } from '../../../redux/scale/scale.api';
import searchOptions from '../../../redux/search/search.options';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Buttons from '../../shared/button/Buttons';
import InfoSearch from '../../shared/input/InfoSearch';
import Results from '../results/Results';
import { SearchContainer } from './search.styles';

const Search = () => {
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);
  const { data: myScales } = useSearchMyScalesQuery()
  // const { data: newScales } = useSearchNewScalesQuery()

  const [value, setValue] = useState('');

  const handleNewScalesClick = () => {
    setValue('');
  };

  const handleMyScalesClick = () => {
    setValue('');
  };

  return (
    <>
      <SearchContainer>
        <InfoSearch
          value={value}
          setValue={setValue}
          placeholder="Search scales"
          searchOption={searchOptions.scales.alphabetical}
        />
        <Buttons>
          <BtnPrimary
            disabled={false}
            label="New Scales"
            onClick={handleNewScalesClick}
          />
          <BtnPrimary
            disabled={!isSignedIn || false}
            label="My Scales"
            onClick={handleMyScalesClick}
          />
        </Buttons>
      </SearchContainer>
      <Results scales={myScales?.scales} />
    </>
  );
};

export default Search;
