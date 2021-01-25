import styled from 'styled-components';

export const UserAnchor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const UserMenu = styled.div`
  background-color: ${({ theme }) => theme.colorBox};
  border: ${({ theme }) => theme.borderMedium};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  min-width: 10rem;
  padding: 0.5rem;
  position: absolute;
  top: 3.4rem;
  z-index: 1000;
`;
