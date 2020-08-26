import styled from 'styled-components';

export const ButtonColumn = styled.div`
  align-items: ${({ reverse }) => (reverse ? 'flex-end' : 'flex-start')};
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ControlButtons = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LogoContainer = styled.div`
  height: 5rem;
  width: 5rem;
`;

export const UserContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 1rem;
`;
