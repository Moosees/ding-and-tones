import styled from 'styled-components';

const getNoteBorder = ({ $type, theme }) => {
  const borders = {
    dings: `3px dashed ${theme.colorCheckbox}`,
    extra: `2px dotted ${theme.colorBtnConfirm}`,
    round: `2px solid ${theme.colorCheckbox}`,
    outside: `1px solid ${theme.colorBtnClear}`,
  };

  return borders[$type];
};

export const NotesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 40rem;
  margin-bottom: 1rem;

  @media screen and (orientation: portrait) and (max-width: 1000px) {
    margin: 0;
    max-width: 50rem;
  }
`;

export const Note = styled.button`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
  border: ${getNoteBorder};
  border-radius: 100%;
  box-shadow: ${({ $type, theme }) =>
    $type !== 'outside' ? theme.shadowLight : 'none'};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  font-family: var(--font-notes);
  height: 3rem;
  justify-content: center;
  margin: 4px;
  transition: transform 0.1s ease;
  width: 3rem;

  &:hover,
  &:focus {
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
