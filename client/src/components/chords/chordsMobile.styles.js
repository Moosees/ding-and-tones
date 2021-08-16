import styled from 'styled-components';

export const ChordsGrid = styled.div`
  align-items: stretch;
  display: grid;
  flex-grow: 1;
  gap: 1rem 0.5rem;
  grid-template-areas:
    'drum drum chords'
    'intervals filter chords';
  grid-template-columns: 3fr 3fr 5fr;
  grid-template-rows: var(--drum-size);
  height: 100%;
  margin: auto 0;

  ${({ theme }) => theme.mqW850`
    gap: 0 0.5rem;
  `}

  ${({ theme }) => theme.mqW700`
    gap: 0;
    grid-template-columns: 3fr 3fr 5fr;
  `}

  @media (orientation: portrait) {
    grid-template-areas:
      'drum intervals'
      'filter chords';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 3fr;
  }
`;

export const GridContainer = styled.div`
  border-top: ${({ theme }) => theme.borderLight};
  border-left: ${({ theme }) => theme.borderLight};
  display: flex;
  justify-content: center;
  overflow: hidden;

  & > * {
    flex-grow: 1;
  }
`;
