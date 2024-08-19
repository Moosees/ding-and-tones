import styled from 'styled-components';

export const AlertContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-radius: 20px;
  bottom: 15%;
  box-shadow: ${({ theme }) => theme.shadowHeavy};
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  left: 50%;
  min-width: 15%;
  opacity: 0.95;
  transform: translateX(-50%);
  padding: 1.5rem;
  position: absolute;
  z-index: 2000;

  ${({ theme }) => theme.mqW1200`
    background-color: ${theme.colorBox};
    border-radius: 10px;
    border: ${theme.borderMedium};
    padding: 0.7rem;

    @media screen and (orientation: landscape) {
    bottom: 2rem;
  }
  `}
`;

export const AlertText = styled.span`
  line-height: 1.4;
  text-align: center;
  white-space: pre;
`;
