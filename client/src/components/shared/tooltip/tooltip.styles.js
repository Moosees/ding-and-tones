import styled from 'styled-components';

export const Arrow = styled.div`
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-radius: ${({ openRight }) =>
    openRight
      ? '100% 0% 0% 100% / 50% 100% 0% 50%'
      : '0% 100% 100% 0% / 0% 50% 50% 100%'};
  border-width: ${({ openRight }) =>
    openRight ? '2px 0 2px 2px' : '2px 2px 2px 0'};
  padding: 5px;
  position: absolute;
  top: calc(50% - 7px);
  z-index: 80;

  ${({ openRight }) => (openRight ? 'left: -11px;' : 'right: -11px;')}

  ${({ theme }) => theme.mqW850`
    display: none;
  `}
`;

export const TooltipContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const TooltipBtnWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
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
  top: ${({ top }) => top}px;
  transform: translateY(-50%);
  z-index: 90;

  ${({ vertPos, openRight }) =>
    `${openRight ? 'left: ' : 'right: '}${vertPos}px;`}

  ${({ theme }) => theme.mqW850`
    bottom: 10%;
    left: 10%;
    max-width: 80%;
    right: 10%;
    top: revert;
    transform: translateY(0);
  `}
`;
