import styled from 'styled-components';

export const ScaleContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr min-content 1fr;
  height: 100%;
  padding: 3rem;
  overflow: auto;

  ${({ theme }) => theme.mqMedium`
    grid-template-columns: max-content min-content 1fr;
  `}
`;

export const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
