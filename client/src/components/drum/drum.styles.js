import styled from 'styled-components';

export const DrumContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: -3rem 0 3rem;
  width: 100%;

  ${({ theme }) => theme.mqW1300`
    margin: 0 0 2rem;
  `}

  ${({ theme }) => theme.mqW1000`
    margin: -1rem 0;
  `}
`;

export const DrumSvg = styled.svg`
  height: 100%;
  width: 100%;
`;

export const DrumWrapper = styled.div`
  height: 100%;
  max-height: 35rem;
  max-width: 35rem;
  position: relative;
  width: 100%;
`;
