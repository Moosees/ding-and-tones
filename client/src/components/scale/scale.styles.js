import styled from 'styled-components';

export const ScaleContainer = styled.div`
  align-items: center;
  display: grid;
  flex-grow: 1;
  grid-template-columns: 1fr min-content 1fr;
  padding: var(--padding);

  ${({ theme }) => theme.mqW1200`
    grid-template-columns: max-content min-content 1fr;
  `}

  @media (orientation: portrait) {
    align-content: start;
    grid-template-columns: 100%;
    grid-template-rows: max-content 0px;
    height: 100%;
    padding: 0 0.5rem;

    & > div {
      border-bottom: ${({ theme }) => theme.borderMedium};
    }
  }
`;

export const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
