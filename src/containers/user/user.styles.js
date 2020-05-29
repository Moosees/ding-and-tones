import styled from 'styled-components';

export const AvatarContainer = styled.div`
  font-size: 4.2rem;
`;

export const Buttons = styled.div`
  align-items: center;
  display: flex;
`;

export const ButtonGroup = styled.div`
  align-items: ${({ flexEnd }) => (flexEnd ? 'flex-end' : 'flex-start')};
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  justify-content: center;
`;

export const UserContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 1rem;
`;
