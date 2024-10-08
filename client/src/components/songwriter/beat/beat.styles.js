import styled from 'styled-components';

const beatStyles = {
  heightWidth: {
    4: '3',
    8: '2.9',
    9: '2.9',
    16: '2.8',
    17: '2.8',
  },
  fz: {
    1: '2.1',
    2: '2.0',
    3: '1.8',
  },
  border: {
    4: 'solid',
    8: 'solid',
    9: 'dotted',
    16: 'dashed',
    17: 'dotted',
  },
};

const tripletStatusMixins = {
  0: '',
  1: `
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      content: '';
      height: 12%;
      left: 20%;
      position: absolute;
      top: 95%;
      width: 100%;
    `,
  2: `
      content: '3';
      font-size: 1rem;
      position: absolute;
      top: 83%;
    `,
  3: `
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      content: '';
      height: 12%;
      position: absolute;
      right: 20%;
      top: 95%;
      width: 100%;
    `,
};

const editSubdivisionsMixin = `
  &:not(:first-child) {
    border-left: 1px solid black;
    margin-left: 5px; 
    padding-left: 5px;
  }
`;

export const BeatAnchor = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  margin: 3px 0;
  position: relative;
`;

export const BeatContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: ${({ $beatStart }) => ($beatStart ? '2px' : '-1px')};
  position: relative;

  ${({ theme }) => theme.mqW850`
    margin-left: 0;
  `}

  ${({ $editSubdivisionsOpen, $beatStart }) =>
    $editSubdivisionsOpen && $beatStart && editSubdivisionsMixin}
`;

export const BeatCircle = styled.div`
  align-items: center;
  border-width: ${({ $value }) => ($value === 4 ? '2px' : '1px')};
  border-style: ${({ $value }) => beatStyles.border[$value]};
  border-radius: 100%;
  border-color: ${({ theme, $hasNonScaleNote, $isBeatPlaying }) =>
    $isBeatPlaying
      ? theme.colorBeatActive
      : $hasNonScaleNote
        ? theme.colorBtnClear
        : theme.colorBeat};
  box-shadow: ${({ theme, $isBeatPlaying }) =>
    $isBeatPlaying ? theme.shadowPlaying : theme.shadowBtnHeavy};
  cursor: ${({ $isSongPlaying }) => ($isSongPlaying ? 'default' : 'pointer')};
  display: flex;
  height: ${({ $value }) => beatStyles.heightWidth[$value]}rem;
  justify-content: center;
  margin: 1px;
  opacity: ${({ $isMuted }) => ($isMuted ? '0.5' : '1')};
  transition: color 0.1s ease-in;
  width: ${({ $value }) => beatStyles.heightWidth[$value]}rem;

  &:hover,
  &:focus {
    outline: 0;
    ${({ $isSongPlaying, theme }) =>
      !$isSongPlaying && `border-color: ${theme.colorBtnConfirm};`}
  }

  &::after {
    ${({ $tripletStatus }) => tripletStatusMixins[$tripletStatus]}
  }

  @media screen and (orientation: portrait) and (max-width: 1000px) {
    margin: 0;
  }
`;

export const BeatTextHandCount = styled.span`
  font-size: 1.2rem;
  height: 100%;
  white-space: pre-wrap;
`;

export const BeatTextNote = styled.span`
  font-size: ${({ $length }) => beatStyles.fz[$length] || '1.8'}rem;
  letter-spacing: -1px;
  font-family: var(--font-beats);
  font-weight: var(--weight-beats);
  white-space: pre-wrap;
`;

export const BeatTextSpacer = styled.span`
  font-size: ${({ $length }) => ($length < 3 ? '14' : '10')}px;
  letter-spacing: -1px;
  font-family: var(--font-beats);
  font-weight: var(--weight-beats);
  margin-bottom: 3px;
`;
