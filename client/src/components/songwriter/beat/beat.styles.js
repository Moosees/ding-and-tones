import styled from 'styled-components';

const beatStyles = {
  heightWidth: {
    4: '3',
    8: '2.8',
    16: '2.6',
  },
  fz: {
    4: '10',
    8: '10',
    16: '9',
  },
  border: {
    4: 'solid',
    8: 'solid',
    16: 'dashed',
  },
};

export const BeatAnchor = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  position: relative;
`;

export const BeatContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: ${({ value }) => (value === 4 ? '3px' : '0')};
  position: relative;

  ${({ theme }) => theme.mqW850`
    margin-left: 0;
  `}
`;

export const BeatCircle = styled.div`
  align-items: center;
  border: ${({ value }) => (value === 4 ? '2px' : '1px')};
  border-style: ${({ value }) => beatStyles.border[value]};
  border-radius: 100%;
  border-color: ${({ theme, hasNonScaleNote, isBeatPlaying }) =>
    isBeatPlaying
      ? theme.colorBeatActive
      : hasNonScaleNote
      ? theme.colorBtnClear
      : theme.colorBeat};
  box-shadow: ${({ theme }) => theme.shadowBtnHeavy};
  cursor: ${({ isLocked }) => (isLocked ? 'default' : 'pointer')};
  display: flex;
  height: ${({ value }) => beatStyles.heightWidth[value]}rem;
  justify-content: center;
  margin: 1px;
  opacity: ${({ isMuted }) => (isMuted ? '0.65' : '1')};
  transition: color 0.1s ease-in;
  width: ${({ value }) => beatStyles.heightWidth[value]}rem;

  &:hover,
  &:focus {
    outline: 0;
    ${({ isSongPlaying, theme }) =>
      !isSongPlaying && `border-color: ${theme.colorBtnConfirm};`}
  }

  @media (orientation: portrait) {
    margin: 0;
  }
`;

export const BeatText = styled.span`
  font-size: ${({ value }) => beatStyles.fz[value] || '12'}px;
  letter-spacing: -1px;
  white-space: pre-wrap;
`;
