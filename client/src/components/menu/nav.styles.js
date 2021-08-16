import styled from 'styled-components';

export const MenuAnchor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 6rem;
  position: relative;
  top: -100%;
`;

export const MobileAnchor = styled.div`
  display: flex;
  flex-direction: row-reverse;
  right: 4px;
  position: fixed;
  top: 5px;
  z-index: 100;
`;

export const MenuDropdown = styled.div`
  background-color: ${({ theme }) => theme.colorBox};
  border: ${({ theme }) => theme.borderMedium};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  min-width: 10rem;
  padding: 0.5rem;
  position: absolute;
  top: 3.4rem;
  z-index: 900;
`;

export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  height: 5rem;
  justify-content: center;
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
  width: 5rem;
`;
