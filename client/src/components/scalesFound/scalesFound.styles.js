import styled from 'styled-components';

export const ScaleList = styled.div`
  border: ${({ theme }) => theme.borderLight};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const ScaleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colorBtnLight};
  }
`;

export const ScaleLabel = styled.span``;

export const ScaleNotes = styled.span`
  font-size: ${({ theme }) => theme.fzSmall};
`;
