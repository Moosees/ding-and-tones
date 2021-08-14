import styled from 'styled-components';

export const MobileContainer = styled.div`
  align-items: stretch;
  display: grid;
  flex-grow: 1;
  gap: 1rem 0.5rem;
  grid-template-areas:
    'drum drum chords'
    'intervals filter chords';
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 28rem 34rem;
  margin: auto 0;
`;

export const GridContainer = styled.div`
  border: ${({ theme }) => theme.borderLight};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadowBtnLight};
  display: flex;
  justify-content: center;
  overflow: hidden;

  & > * {
    flex-grow: 1;
  }
`;
