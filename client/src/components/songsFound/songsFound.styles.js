import styled from 'styled-components';

export const SongList = styled.div`
  border: ${({ theme }) => theme.borderMedium};
  border-left: 0;
  border-right: 0;
  display: flex;
  flex-direction: column;
  max-height: 80%;
  overflow: auto;
  padding: 0 0.5rem;
  width: 100%;
`;

export const SongContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colorBtnLight};
  }

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colorBtnHeavy};
  }
`;

export const DeleteIcon = styled.i`
  color: ${({ theme }) => theme.colorText};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fzLarge};
  padding: 0.8rem 0.4rem;

  &:hover {
    color: ${({ theme }) => theme.colorBtnClear};
  }
`;

export const NoDeleteIcon = styled.i`
  color: ${({ theme }) => theme.colorText};
  cursor: default;
  font-size: ${({ theme }) => theme.fzLarge};
  padding: 0.8rem 0.4rem;
  opacity: 0.1;
`;

export const SongTextContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: grid;
  flex: 1 0;
  grid-template-columns: 5fr 1fr 2fr 5fr;
  justify-items: start;
  padding: 0.8rem 0.4rem;

  &:hover {
    color: ${({ theme }) => theme.colorBtnConfirm};
  }
`;
