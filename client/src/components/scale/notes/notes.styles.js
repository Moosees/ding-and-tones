import styled from 'styled-components';

export const NotesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 36rem;
  margin-bottom: 1rem;

  @media (orientation: portrait) {
    margin: 0;
    max-width: 50rem;
  }
`;

export const Note = styled.button`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colorBtnClear};
  border-radius: 100%;
  box-shadow: ${({ inRound, inExtra, theme }) =>
    inRound || inExtra ? theme.shadowLight : 'none'};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  font-family: 'Sura', serif;
  height: 3rem;
  justify-content: center;
  margin: 4px;
  transition: transform 0.1s ease;
  width: 3rem;

  ${({ inRound, theme }) =>
    inRound &&
    `
    border: 2px solid ${theme.colorCheckbox};
  `}

  ${({ inExtra, theme }) =>
    inExtra &&
    `
    border: 2px dotted ${theme.colorBtnConfirm};
  `}

  &:hover, &:focus {
    outline: 0;
    transform: scale(${({ disabled }) => (disabled ? '1' : '1.1')});
  }

  ${({ theme }) => theme.mqW1200`
    margin: 3px;
  `}

  ${({ theme }) => theme.mqW850`
    margin: 2px;
  `}
`;

export const TextLabel = styled.p`
  opacity: 0.7;
`;
