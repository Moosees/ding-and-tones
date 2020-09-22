import styled from 'styled-components';

export const ScaleContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr min-content 1fr;
  height: 100%;
  padding: ${({ theme }) => theme.paddingLarge};

  ${({ theme }) => theme.mqMedium`
    grid-template-columns: max-content min-content 1fr;
    padding: ${theme.paddingMedium};
  `}

  ${({ theme }) => theme.mqSmaller`
    padding: ${theme.paddingSmall};
  `}
`;

export const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
