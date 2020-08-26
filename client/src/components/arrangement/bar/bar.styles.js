import styled from 'styled-components';

export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  opacity: ${({ isDragging }) => (isDragging ? '0.3' : '1')};
`;

export const Beats = styled.div`
  align-items: center;
  border: 1px solid
    ${({ theme, isPlaying }) =>
      isPlaying ? theme.colorBeatActive : theme.colorBeat};
  border-left: 0;
  border-radius: 2px;
  border-right: 0;
  display: flex;
  justify-content: center;
  margin: 1px 2px 3px;
  padding: 0.5rem;
`;
