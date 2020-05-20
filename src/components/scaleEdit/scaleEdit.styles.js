import styled from 'styled-components';

export const NoteContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  max-width: 60%;
`;

export const Note = styled.span`
  background-color: rgba(0, 0, 0, 0.06);
  border: ${({ inScale }) =>
    inScale ? '2px solid #00ff00' : '1px solid rgba(200,0,0,0.2)'};
  border-radius: 100px;
  box-shadow: ${({ inScale }) =>
    inScale ? '0px 2px 5px 2px rgba(0, 0, 0, 0.25)' : '0'};
  height: 2.8rem;
  margin: 3px;
  text-align: center;
  width: 2.8rem;
`;
