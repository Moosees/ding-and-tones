import styled from 'styled-components';

export const NoteContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 24rem;
`;

export const Note = styled.span`
  border: 1px solid ${({ inScale }) => (inScale ? '#ff0000' : '#00ff00')};
  border-radius: 50%;
  height: 2.5rem;
  margin: 0.1rem;
  text-align: center;
  width: 2.5rem;
`;
