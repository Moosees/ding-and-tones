import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  useLazySearchSongsQuery,
  useSearchMySongsQuery,
  useSearchNewSongsQuery,
} from '../../redux/song/song.api';
import BtnPrimary from '../shared/button/BtnPrimary';
import InfoSearch from '../shared/input/InfoSearch';
import { FindSongsContainer, SearchContainer } from './findSongs.styles';
import Results from './results/Results';

const FindSongs = () => {
  const isSignedIn = useSelector(({ user }) => user.isSignedIn);
  const { data: newSongs } = useSearchNewSongsQuery();
  const { data: mySongs } = useSearchMySongsQuery();
  const [searchSongs, { data: foundSongs, isFetching }] =
    useLazySearchSongsQuery();

  const [value, setValue] = useState('');
  const [searchMode, setSearchMode] = useState(1);

  const searchResults = {
    1: newSongs,
    2: mySongs,
    3: foundSongs,
  };

  const handleSearch = useCallback(() => {
    if (value.length < 3) return;

    searchSongs({ searchTerm: value });
    setSearchMode(3);
  }, [value, searchSongs]);

  const handleNewSongsClick = () => {
    setSearchMode(1);
    setValue('');
  };

  const handleMySongsClick = () => {
    setSearchMode(2);
    setValue('');
  };

  return (
    <FindSongsContainer>
      <SearchContainer>
        <BtnPrimary
          disabled={isFetching}
          label="New Songs"
          onClick={handleNewSongsClick}
        />
        <InfoSearch
          value={value}
          setValue={setValue}
          placeholder="Search songs"
          onSearch={handleSearch}
          isSearching={isFetching}
        />
        <BtnPrimary
          disabled={!isSignedIn || isFetching}
          label="My Songs"
          onClick={handleMySongsClick}
        />
      </SearchContainer>
      <Results songs={searchResults[searchMode]?.songs} />
    </FindSongsContainer>
  );
};

export default FindSongs;
