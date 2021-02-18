import styled from 'styled-components';

export const SongContainer = styled.div`
  display: grid;
  flex-grow: 1;
  grid-template-rows: max-content min-content minmax(0, 1fr);
  justify-items: center;
  padding: var(--padding);
`;

export const SongEditContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const SongViewContainer = styled.div`
  display: flex;
  flex-grow: 1;
  padding: var(--padding);
`;

export const TopSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  max-width: 80rem;
  width: 100%;
`;
