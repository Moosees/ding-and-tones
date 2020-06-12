import styled from 'styled-components';

export const BeatContainer = styled.div`
  border: ${({ isPlaying }) => (isPlaying ? '2px' : '1px')} solid #555;
  border-radius: 100%;
  height: ${({ isAccented }) => (isAccented ? '3.5' : '3')}rem;
  margin: 1px;
  position: relative;
  width: ${({ isAccented }) => (isAccented ? '3.5' : '3')}rem;
`;

export const BeatText = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
