import styled from 'styled-components';

export const ItemContainer = styled.li`
  align-items: center;
  border: ${({ theme }) => theme.borderLight};
  box-shadow: ${({ theme }) => theme.shadowBtnLight};
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin: 3px;
  padding: 0.6rem;

  div {
    display: flex;

    button {
      margin: 0 4px;
    }
  }

  ${({ theme }) => theme.mqW850`
    margin: 1px; 
  `}
`;
