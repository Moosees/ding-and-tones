import styled from 'styled-components';

export const AvatarContainer = styled.div`
  font-size: 4.2rem;
`;

export const ButtonGroup = styled.div`
  align-items: ${({ reverse }) => (reverse ? 'flex-end' : 'flex-start')};
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fzLarge};
  justify-content: center;
`;

export const ControlButtons = styled.div`
  align-items: center;
  display: flex;
`;

export const UserContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 1rem;
`;
