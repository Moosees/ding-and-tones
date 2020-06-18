import styled from 'styled-components';

export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

export const Beats = styled.div`
  align-items: center;
  border: 1px solid
    ${({ theme, isPlaying }) =>
      isPlaying ? theme.colorBeatActive : theme.colorBeat};
  border-left: 0;
  border-radius: 2px;
  border-right: 0;
  /* box-shadow: ${({ theme }) => theme.shadowBtnLight}; */
  display: flex;
  justify-content: center;
  margin: 2px;
  padding: 0.5rem;
`;
