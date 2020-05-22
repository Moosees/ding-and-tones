import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  flex: 1 0 33%;
  flex-direction: column;
  font-size: 1.2rem;
`;

export const InfoField = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  flex: 1 0;
  margin: 0.5rem;
  padding: 0.5rem;
`;

export const Buttons = styled.div`
  align-self: flex-end;
  display: flex;
`;

export const Button = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin: 0.5rem;
  padding: 0.5rem;
  transition: border 0.15s ease-in;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;
