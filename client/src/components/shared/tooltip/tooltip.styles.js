import styled from 'styled-components';

export const Arrow = styled.div`
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-radius: ${({ left }) =>
    left
      ? '100% 0% 0% 100% / 50% 100% 0% 50%'
      : '0% 100% 100% 0% / 0% 50% 50% 100%'};
  border-width: ${({ left }) => (left ? '2px 0 2px 2px' : '2px 2px 2px 0')};
  padding: 5px;
  position: absolute;
  top: calc(50% - 7px);
  z-index: 200;

  ${({ left }) => (left ? 'left: -11px;' : 'right: -11px;')}
`;

export const TooltipAnchor = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const PopupContainer = styled.div`
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
  z-index: 100;

  ${({ left }) => (left ? 'left: 30%;' : 'right: 30%;')}
  ${({ top }) => (top ? 'top: 40%;' : 'bottom: 40%;')}
`;
