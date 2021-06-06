import styled from 'styled-components';

export const Arrow = styled.div`
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-radius: ${({ arrowLeft }) =>
    arrowLeft
      ? '100% 0% 0% 100% / 50% 100% 0% 50%'
      : '0% 100% 100% 0% / 0% 50% 50% 100%'};
  border-width: ${({ arrowLeft }) =>
    arrowLeft ? '2px 0 2px 2px' : '2px 2px 2px 0'};
  padding: 5px;
  position: absolute;
  top: calc(50% - 7px);
  z-index: 60;

  ${({ arrowLeft }) => (arrowLeft ? 'left: -11px;' : 'right: -11px;')}
`;

export const TooltipContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TooltipBtnWrapper = styled.div`
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
  max-width: 30%;
  padding: 1rem;
  position: absolute;
  z-index: 50;

  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;

  ${({ theme }) => theme.mqW850`
    max-width: 50%;
  `}
`;
