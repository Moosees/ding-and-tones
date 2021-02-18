import styled from 'styled-components';

export const MobileContainer = styled.div`
  align-items: stretch;
  display: grid;
  flex-grow: 1;
  gap: 0 0.5rem;
  grid-template-areas:
    'drum chords'
    'intervals chords';
  grid-template-columns: minmax(min-content, 30rem) minmax(0, 1fr);
  grid-template-rows: minmax(min-content, 30rem) minmax(0, 1fr);
  padding: 1.2rem 1rem;

  ${({ theme }) => theme.mqW850`
    grid-template-columns: minmax(min-content, 24rem) minmax(0, 1fr);
    grid-template-rows: minmax(min-content, 1fr) minmax(0, 1fr);
    padding: 0;
  `}
`;

export const IntervalsContainer = styled.div`
  border: ${({ theme }) => theme.borderLight};
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.shadowBtnLight};
  display: flex;
  max-height: 40rem;
  overflow: hidden;
`;

export const ChordsContainer = styled.div`
  display: flex;
  overflow: hidden;
`;
