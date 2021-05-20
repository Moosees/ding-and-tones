import styled from 'styled-components';

export const ScaleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  &:first-of-type {
    margin-left: 40px;
  }
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const ScaleHeader = styled.h1`
  font-size: 26px;
  margin-bottom: 12px;
`;
