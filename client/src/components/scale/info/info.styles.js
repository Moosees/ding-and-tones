import styled from 'styled-components';

export const ScaleInfoContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
`;

export const ScaleLabel = styled.span`
  word-spacing: -1px;
  font-size: ${(theme) => theme.fzSmallest};

  ${({ theme }) => theme.mqW1200`
    font-size: ${theme.fzSmaller};
  `}

  ${({ theme }) => theme.mqW850`
    font-size: ${theme.fzSmall};
  `}

  ${({ theme }) => theme.mqW700`
    word-spacing: -2px;
  `}
`;
