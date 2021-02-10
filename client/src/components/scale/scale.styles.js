import styled from 'styled-components';

export const ScaleContainer = styled.div`
  align-items: center;
  display: grid;
  flex-grow: 1;
  grid-template-columns: 1fr min-content 1fr;
  grid-template-rows: 100%;
  padding: var(--padding);

  ${({ theme }) => theme.mqW1200`
    grid-template-columns: max-content min-content 1fr;
  `}
`;

export const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
