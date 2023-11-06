import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { startSearch } from '../../redux/search/search.actions';
import searchOptions from '../../redux/search/search.options';
import Loading from '../shared/loading/Loading';
import Results from './results/Results';
import Search from './search/Search';

const FindSongsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: var(--padding);
`;

const FindSongs = () => {
  const dispatch = useDispatch();
  const songsFetchTried = useSelector(({ search }) => search.songsFetchTried);

  useEffect(() => {
    if (!songsFetchTried) {
      dispatch(startSearch(searchOptions.songs.latest));
    }
  }, [dispatch, songsFetchTried]);

  return (
    <FindSongsContainer>
      {!songsFetchTried ? (
        <Loading />
      ) : (
        <>
          <Search />
          <Results />
        </>
      )}
    </FindSongsContainer>
  );
};

export default FindSongs;
