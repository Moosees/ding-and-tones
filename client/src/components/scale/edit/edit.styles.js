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
  margin-bottom: 1rem;

  ${({ theme }) => theme.mqW1200`
    max-width: 30rem;
  `}

  ${({ theme }) => theme.mqW850`
    max-width: 28rem;
  `}
`;

export const Note = styled.button`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  border: ${({ inScale, theme }) =>
    inScale
      ? '2px solid ' + theme.colorCheckbox
      : '1px solid ' + theme.colorBtnClear};
  border-radius: 100px;
  box-shadow: ${({ inScale, theme }) => (inScale ? theme.shadowLight : 'none')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  height: 3rem;
  justify-content: center;
  margin: 4px;
  transition: transform 0.1s ease;
  width: 3rem;

  &:hover {
    transform: scale(${({ disabled }) => (disabled ? '1' : '1.1')});
  }

  &:focus {
    outline: none;
  }

  ${({ theme }) => theme.mqW1200`
    margin: 3px;
  `}

  ${({ theme }) => theme.mqW850`
    margin: 2px;
  `}
`;
