import styled from 'styled-components';

export const Arrow = styled.div`
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-radius: ${({ openTop }) =>
    openTop
      ? '50% 50% 50% 50% / 0% 0% 100% 100%'
      : '50% 50% 50% 50% / 100% 100% 0% 0%'};
  border-width: ${({ openTop }) =>
    openTop ? '0 2px 2px 2px' : '2px 2px 0 2px'};
  padding: 0.5rem;
  position: absolute;
  z-index: 20;

  ${({ openTop }) => (openTop ? 'bottom: 2rem;' : 'top: 2rem;')}
`;

export const Dropdown = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-width: 2px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadowLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2px;
  position: absolute;
  z-index: 10;

  ${({ openLeft }) => (openLeft ? 'right: 0;' : 'left: 0;')}
  ${({ openTop }) => (openTop ? 'bottom: 3rem;' : 'top: 3rem;')}
`;

export const DropdownContent = styled.div`
  display: flex;
`;

export const DropdownColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
