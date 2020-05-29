import styled from 'styled-components';

export const EditContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Notes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 30rem;
`;

export const Note = styled.span`
  background-color: rgba(0, 0, 0, 0.06);
  border: ${({ inScale }) =>
    inScale ? '2px solid #00ff00' : '1px solid rgba(200,0,0,0.2)'};
  border-radius: 100px;
  box-shadow: ${({ inScale }) =>
    inScale ? '0px 2px 5px 2px rgba(0, 0, 0, 0.25)' : '0'};
  cursor: pointer;
  height: 2.8rem;
  margin: 3px;
  text-align: center;
  transition: border 0.15s ease-in;
  width: 2.8rem;

  &:hover {
    border: ${({ inScale }) =>
      inScale ? '2px solid #800' : '1px solid rgba(0,200,0,0.6)'};
  }
`;

export const Buttons = styled.div`
  margin-top: 1rem;
`;
