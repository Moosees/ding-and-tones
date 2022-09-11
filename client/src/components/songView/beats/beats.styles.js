import styled from 'styled-components';

const beatStyles = {
  heightWidth: {
    4: '29',
    8: '27',
    9: '27',
    16: '27',
    17: '27',
  },
  fz: {
    1: '22',
    2: '21',
    3: '19',
  },
  border: {
    4: '1px solid #000',
    8: '1px solid rgba(0,0,0,0.5)',
    9: '1px dotted #000',
    16: '1px dashed #000',
    17: '1px dotted #000',
  },
};

const tripletStatusMixins = {
  0: '',
  1: `
      border-bottom: 1px solid rgba(0,0,0,0.7);
      border-left: 1px solid rgba(0,0,0,0.7);
      content: '';
      height: 12%;
      left: 10%;
      position: absolute;
      top: 98%;
      width: 110%;
    `,
  2: `
      content: '3';
      font-size: 11px;
      position: absolute;
      top: 85%;
    `,
  3: `
      border-bottom: 1px solid rgba(0,0,0,0.7);
      border-right: 1px solid rgba(0,0,0,0.7);
      content: '';
      height: 12%;
      position: absolute;
      right: 10%;
      top: 98%;
      width: 110%;
    `,
};

export const BeatGroup = styled.div`
  display: flex;
  white-space: nowrap;
`;

export const BeatCircleWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  font-family: var(--font-beats);
  font-weight: var(--weight-beats);
  justify-content: center;
  padding: 2px 0 5px;
`;

export const BeatCircle = styled.div`
  align-items: center;
  border: ${({ value }) => beatStyles.border[value]};
  border-radius: 100%;
  display: flex;
  height: ${({ value }) => beatStyles.heightWidth[value]}px;
  justify-content: center;
  position: relative;
  width: ${({ value }) => beatStyles.heightWidth[value]}px;

  ${({ isBeatPlaying, theme }) =>
    isBeatPlaying &&
    `border-color: ${theme.colorBeatActive};
      box-shadow: ${theme.shadowPlaying};`}

  &::after {
    ${({ tripletStatus }) => tripletStatusMixins[tripletStatus]}
  }
`;

export const BeatContainer = styled.div`
  align-items: center;
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 18px 0;
  margin-left: ${({ beatStart }) => (beatStart ? '3px' : '1px')};
  position: relative;
`;

export const BeatText = styled.span`
  font-size: ${({ length }) => beatStyles.fz[length] || '12'}px;
  letter-spacing: -1px;
  margin-left: -1px;
  white-space: pre-wrap;
`;

export const BeatTextSpacer = styled.span`
  font-size: 13px;
  margin-bottom: 3px;
  margin-left: -1px;
`;
