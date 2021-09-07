import styled from 'styled-components';

export const AddBarContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto 0;

  p {
    opacity: 0.55;
  }
`;

export const AddBarBtn = styled.button`
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colorBeat};
  border-radius: 100%;
  cursor: ${({ isSongPlaying }) => (isSongPlaying ? 'default' : 'pointer')};
  display: flex;
  height: 28px;
  font-size: 11px;
  justify-content: center;
  margin: 1px;
  width: 28px;

  &:hover,
  &:focus {
    outline: 0;
    ${({ isSongPlaying, theme }) =>
      !isSongPlaying && `border-color: ${theme.colorBtnConfirm};`}
  }
`;
