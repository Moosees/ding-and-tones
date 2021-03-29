import styled from 'styled-components';

export const DrumContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: -3rem 0 3rem;
  position: relative;
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

export const MutantContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;
