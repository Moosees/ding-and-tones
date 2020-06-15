import styled from 'styled-components';

export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

export const Beats = styled.div`
  align-items: center;
  border: ${({ isPlaying }) => (isPlaying ? '2px' : '1px')} solid
    rgba(0, 0, 0, 0.3);
  border-left: 0;
  border-radius: 1px;
  border-right: 0;
  display: flex;
  justify-content: center;
  margin: 2px;
  padding: 0.5rem;
`;
