import styled from 'styled-components';

export const WrapBox = styled.div`
  max-height: 100%;
  overflow: auto;
`;

export const ListContainer = styled.ul`
  align-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  list-style: none;

  button {
    background-color: ${({ theme }) => theme.colorBtnLight};
    border: 2px solid
      ${({ isDisplayed, theme }) =>
        isDisplayed ? theme.colorCheckbox : theme.colorBtnClear};
    border-radius: 3px;
    box-shadow: ${({ theme }) => theme.shadowBtnHeavy};
    cursor: pointer;
    margin: 3px;
    padding: 0.6rem;
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
  }
`;
