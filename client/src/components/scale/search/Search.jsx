import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  useLazySearchScalesQuery,
  useSearchMyScalesQuery,
  useSearchNewScalesQuery,
} from '../../../redux/api/api.slice';
import BtnPrimary from '../../shared/button/BtnPrimary';
import Buttons from '../../shared/button/Buttons';
import InfoSearch from '../../shared/input/InfoSearch';
import Results from '../results/Results';
import { SearchContainer } from './search.styles';

const Search = () => {
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);
  const { data: myScales } = useSearchMyScalesQuery();
  const { data: newScales } = useSearchNewScalesQuery();
  const [searchScales, { data: foundScales, isFetching }] =
    useLazySearchScalesQuery();

  const [value, setValue] = useState('');
  const [searchMode, setSearchMode] = useState(1);

  const searchResults = {
    1: newScales,
    2: myScales,
    3: foundScales,
  };

  const handleSearch = useCallback(() => {
    if (value.length < 3) return;

    searchScales({ searchTerm: value });
    setSearchMode(3);
  }, [value, searchScales]);

  const handleNewScalesClick = () => {
    setSearchMode(1);
    setValue('');
  };

  const handleMyScalesClick = () => {
    setSearchMode(2);
    setValue('');
  };

  return (
    <>
      <SearchContainer>
        <InfoSearch
          value={value}
          setValue={setValue}
          placeholder="Search scales"
          onSearch={handleSearch}
          isSearching={isFetching}
        />
        <Buttons>
          <BtnPrimary
            disabled={searchMode === 1}
            label="New Scales"
            onClick={handleNewScalesClick}
          />
          <BtnPrimary
            disabled={!isSignedIn || searchMode === 2}
            label="My Scales"
            onClick={handleMyScalesClick}
          />
        </Buttons>
      </SearchContainer>
      <Results scales={searchResults[searchMode]?.scales} />
    </>
  );
};

export default Search;
