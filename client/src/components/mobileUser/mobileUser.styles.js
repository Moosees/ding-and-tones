import styled from 'styled-components';

export const UserAnchor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const UserMenu = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colorBox};
  border: ${({ theme }) => theme.borderMedium};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  position: absolute;
  top: 3rem;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  z-index: 1000;
`;
