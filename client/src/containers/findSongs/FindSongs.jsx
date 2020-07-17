import React from 'react';
import styled from 'styled-components';
import SongSearch from '../../components/songSearch/SongSearch';
import SongsFound from '../../components/songsFound/SongsFound';

const FindSongsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 3rem;
`;

const FindSongs = () => {
  return (
    <FindSongsContainer>
      <SongSearch />
      <SongsFound />
    </FindSongsContainer>
  );
};

export default FindSongs;
