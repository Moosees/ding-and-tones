import styled from 'styled-components';

export const BarContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 0.5rem;
  position: relative;

  ${({ theme }) => theme.mqW850`
    margin: 1px;
  `}

  @media screen and (orientation: portrait) and (max-width: 1000px) {
    margin: 0;
  }
`;

export const Beats = styled.div`
  border: 1px solid
    ${({ theme, $isPlaying }) =>
      $isPlaying ? theme.colorBeatActive : theme.colorBeat};
  border-left: 0;
  border-radius: 2px;
  border-right: 0;
  display: flex;
  justify-content: center;
  margin: 1px 2px 3px;
  padding: 2px;
  transition: opacity 0.1s ease-in;

  ${({ theme }) => theme.mqW850`
    padding: 1px;
  `}

  @media screen and (orientation: portrait) and (max-width: 1000px) {
    margin: 0 2px 0 0;
  }
`;
