import styled from 'styled-components';

export const SubContainer = styled.div`
  border: ${({ theme }) => theme.borderLight};
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.shadowBtnLight};
  overflow: hidden;
`;

export const MobileContainer = styled.div`
  align-items: stretch;
  display: grid;
  gap: 0 1rem;
  grid-template-areas:
    'drum chords'
    'intervals chords';
  grid-template-columns: minmax(min-content, 25rem) 1fr;
  grid-template-rows: 55% 45%;
  height: 100%;
  padding: 1.2rem 1rem;
  width: 100%;
`;
