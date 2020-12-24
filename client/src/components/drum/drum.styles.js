import styled from 'styled-components';

export const DrumContainer = styled.div`
  height: 100%;
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
