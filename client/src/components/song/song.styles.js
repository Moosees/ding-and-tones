import styled from 'styled-components';

export const SongContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: max-content min-content auto;
  height: 100%;
  justify-items: center;
  padding: 2rem;
  width: 100%;

  ${({ theme }) => theme.mqW1200`
    padding: 1rem;
  `}
`;

export const TopSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  max-width: 80rem;
  padding: 2rem 2rem 0;
  width: 100%;

  ${({ theme }) => theme.mqW1000`
    padding: 1rem 1rem 0;
  `}
`;

export const BottomSection = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 10 0;
  justify-content: center;
  overflow: auto;
  width: 100%;
`;
