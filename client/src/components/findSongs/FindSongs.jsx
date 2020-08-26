import React from 'react';
import styled from 'styled-components';
import Results from './results/Results';
import Search from './search/Search';

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
      <Search />
      <Results />
    </FindSongsContainer>
  );
};

export default FindSongs;
