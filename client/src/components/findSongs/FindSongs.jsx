import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { startSearch } from '../../redux/search/search.actions';
import searchOptions from '../../redux/search/search.options';
import Results from './results/Results';
import Search from './search/Search';
import Loading from '../shared/loading/Loading';

const FindSongsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ theme }) => theme.paddingLarge};

  ${({ theme }) => theme.mqMedium`
    padding: ${theme.paddingMedium};
  `}

  ${({ theme }) => theme.mqSmaller`
    padding: ${theme.paddingSmall};
  `}
`;

const FindSongs = ({ startSearch, songsFetchTried }) => {
  useEffect(() => {
    if (!songsFetchTried) startSearch(searchOptions.songs.latest);
  }, [songsFetchTried, startSearch]);

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

const mapStateToProps = ({ search }) => ({
  songsFetchTried: search.songsFetchTried,
});

export default connect(mapStateToProps, { startSearch })(FindSongs);
