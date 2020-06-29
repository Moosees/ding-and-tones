import styled from 'styled-components';

export const ScaleList = styled.div`
  border: ${({ theme }) => theme.borderLight};
  border-bottom: 0;
  border-top: 0;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;
`;

export const ScaleContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colorBtnLight};
  }

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colorBtnHeavy};
  }
`;

export const ScaleLabel = styled.span``;

export const ScaleNotes = styled.span`
  font-size: ${({ theme }) => theme.fzSmall};
`;
