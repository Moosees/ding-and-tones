import styled from 'styled-components';

export const AudioOption = styled.div`
  background-color: ${({ theme }) => theme.colorBtnHeavy};
  border: 2px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.colorBtnConfirm : theme.colorBtnLight};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadowBtnHeavy};
  cursor: pointer;
  margin: 0 0 0.75rem;
  padding: 1rem;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Credits = styled.p`
  padding: 1rem 0;
`;
