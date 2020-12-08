import styled from 'styled-components';

export const ScaleInfoContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
`;

export const ScaleLabel = styled.span`
  word-spacing: -1px;

  ${({ theme }) => theme.mqMedium`
    font-size: ${theme.fzSmall};
  `}
`;
