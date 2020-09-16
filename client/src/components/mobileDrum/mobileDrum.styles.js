import styled from 'styled-components';

export const SubContainer = styled.div`
  border: ${({ theme }) => theme.borderLight};
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.shadowBtnLight};
`;

export const MobileContainer = styled.div`
  align-items: stretch;
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'drum chords'
    'intervals chords';
  grid-template-columns: minmax(min-content, 30rem) 1fr;
  grid-template-rows: 49% 49%;
  height: 100%;
  padding: 1.5rem;
  width: 100%;
`;
