import styled from 'styled-components';

export const BeatContainer = styled.div`
  border: ${({ isPlaying }) => (isPlaying ? '2px' : '1px')} solid #555;
  border-radius: 100%;
  height: ${({ isAccented }) => (isAccented ? '3.5' : '3')}rem;
  line-height: 3rem;
  margin: 1px;
  text-align: center;
  width: ${({ isAccented }) => (isAccented ? '3.5' : '3')}rem;
`;
