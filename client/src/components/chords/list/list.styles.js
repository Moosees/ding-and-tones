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

  /* 
  button {
    background-color: ${({ theme }) => theme.colorBtnLight};
    border-radius: 3px;
    cursor: pointer;
    transition: transform 0.1s ease;

    &:hover,
    &:focus {
      outline: 0;
      transform: scale(1.05);
    }

    ${({ theme }) => theme.mqW850`
    margin: 1px;
    padding: 2px;
  `}
  } */
`;
