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
  max-width: 34rem;
`;

export const Note = styled.span`
  background-color: rgba(0, 0, 0, 0.05);
  border: ${({ inScale, theme }) =>
    inScale
      ? '2px solid ' + theme.colorCheckbox
      : '1px solid ' + theme.colorBtnClear};
  border-radius: 100px;
  box-shadow: ${({ inScale, theme }) => (inScale ? theme.shadowLight : 'none')};
  cursor: pointer;
  font-size: 1.3rem;
  height: 3rem;
  margin: 4px;
  padding-top: ${({ inScale }) => (inScale ? '2px' : '3px')};
  text-align: center;
  transition: transform 0.1s ease;
  width: 3rem;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Buttons = styled.div`
  margin-top: 1rem;
`;
