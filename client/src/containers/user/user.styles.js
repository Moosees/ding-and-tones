import styled from 'styled-components';

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

export const Logo = styled.svg`
  background-image: url(/logo.svg);
  background-size: cover;
  height: 100%;
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
