import styled from 'styled-components';

export const ScaleList = styled.div`
  border: ${({ theme }) => theme.borderMedium};
  border-left: 0;
  border-right: 0;
  display: flex;
  flex-direction: column;
  max-height: 40rem;
  padding: 0 0.5rem;
  width: 100%;

  ${({ theme }) => theme.mqW850`
    max-height: 60vh;
  `}
`;

export const ScaleContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding-right: ${({ isOwner }) => (isOwner ? '2.2rem' : '0')};
  position: relative;
  width: 100%;

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colorBtnLight};
  }

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colorBtnHeavy};
  }
`;

export const ScaleLabel = styled.span``;

export const ScaleNotes = styled.span`
  word-spacing: -2px;
  font-size: ${({ theme }) => theme.fzSmallest};

  ${({ theme }) => theme.mqW1200`
    font-size: ${theme.fzSmallest};
  `}

  ${({ theme }) => theme.mqW850`
    font-size: ${theme.fzSmall};
  `}
`;

export const TextContainer = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  padding: 0.8rem 0.4rem;

  &:hover {
    color: ${({ theme }) => theme.colorBtnConfirm};
  }
`;
