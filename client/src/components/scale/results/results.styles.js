import styled from 'styled-components';

export const ScaleList = styled.div`
  border: ${({ theme }) => theme.borderMedium};
  border-left: 0;
  border-right: 0;
  display: flex;
  flex-direction: column;
  max-height: 50vh;
  overflow: auto;
  padding: 0 0.5rem;
  width: 100%;
`;

export const ScaleContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colorBtnLight};
  }

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colorBtnHeavy};
  }
`;

export const ScaleLabel = styled.span`
  font-size: ${({ theme }) => theme.fzSmall};
`;

export const ScaleNotes = styled.span`
  font-size: ${({ theme }) => theme.fzSmall};

  ${({ theme }) => theme.mqLarge`
    font-size: ${theme.fzSmaller};
  `}
`;

export const TextContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0;
  justify-content: space-between;
  padding: 0.8rem 0.4rem;

  &:hover {
    color: ${({ theme }) => theme.colorBtnConfirm};
  }
`;
