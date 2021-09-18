import styled from 'styled-components';

export const AlertContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-radius: 20px;
  bottom: 15%;
  box-shadow: ${({ theme }) => theme.shadowHeavy};
  display: flex;
  left: 50%;
  opacity: 0.95;
  transform: translateX(-50%);
  padding: 1rem;
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
  margin: 0 1rem;
`;
