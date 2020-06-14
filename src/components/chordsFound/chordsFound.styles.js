import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ListItem = styled.li`
  background-color: ${({ theme }) => theme.colorBtnLight};
  border: 2px solid
    ${({ isDisplayed, theme }) =>
      isDisplayed ? theme.colorCheckbox : theme.colorBtnClear};
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.shadowBtnHeavy};
  cursor: pointer;
  list-style: none;
  margin: 0.5rem;
  padding: 0.5rem;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
