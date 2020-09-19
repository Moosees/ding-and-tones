import styled from 'styled-components';

export const ScrollContainer = styled.div`
  height: 100%;
  overflow: auto;
`;

export const ListContainer = styled.ul`
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100%;
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

  ${({ theme }) => theme.mqSmaller`
    margin: 1px;
    padding: 2px;
  `}
`;
