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
  padding: 1rem;
  position: absolute;
  top: 3.2rem;
  z-index: 1000;
`;
