import styled from 'styled-components';

export const Beats = styled.div`
  align-items: center;
  border: ${({ isPlaying }) => (isPlaying ? '2px' : '1px')} solid #000;
  border-radius: 1px;
  display: flex;
  justify-content: center;
  margin: 2px;
  padding: 1rem;
`;

export const Beat = styled.span`
  border: ${({ isPlaying }) => (isPlaying ? '2px' : '1px')} solid #555;
  border-radius: 100%;
  height: 3rem;
  line-height: 3rem;
  margin: 1px;
  text-align: center;
  width: 3rem;
`;
