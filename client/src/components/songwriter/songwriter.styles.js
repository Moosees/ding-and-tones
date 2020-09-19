import styled from 'styled-components';

export const SongContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;

  ${({ theme }) => theme.mqMedium`
    padding: 1rem;
  `}
`;

export const TopSection = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0;
  justify-content: space-around;
  max-width: 80rem;
  padding: 2rem 2rem 0;
  width: 100%;

  ${({ theme }) => theme.mqSmall`
    padding: 1rem 1rem 0;
  `}
`;

export const TopColumn = styled.div`
  flex: 1 0;
`;

export const BottomSection = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 10 0;
  justify-content: center;
  overflow: auto;
  width: 100%;
`;
