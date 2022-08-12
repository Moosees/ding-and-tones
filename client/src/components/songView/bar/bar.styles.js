import styled from 'styled-components';

const beatStyles = {
  heightWidth: {
    4: '29',
    8: '27',
    16: '27',
  },
  fz: {
    1: '22',
    2: '21',
    3: '19',
  },
  border: {
    4: '1px solid #000',
    8: '1px dotted #000',
    16: '1px dashed #000',
  },
};

export const BarMetre = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  font-size: 13px;
  flex-direction: column;
  font-family: var(--font-text);
  justify-content: center;
  margin-left: 3px;
  transform: translateY(${({ offset }) => offset}px);

  span:first-child {
    border-bottom: 1px solid #000;
  }
`;

export const BarDivider = styled.div`
  align-self: stretch;
  border-right: 1px solid #000;
  margin: 4px 0;
  width: 1px;

  &:not(:first-child) {
    margin-left: 4px;
  }
`;

export const BeatCircleWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

export const BeatCircle = styled.div`
  align-items: center;
  border: ${({ value }) => beatStyles.border[value]};
  border-radius: 100%;
  display: flex;
  height: ${({ value }) => beatStyles.heightWidth[value]}px;
  justify-content: center;
  width: ${({ value }) => beatStyles.heightWidth[value]}px;

  ${({ isBeatPlaying, theme }) =>
    isBeatPlaying &&
    `border-color: ${theme.colorBeatActive};
      box-shadow: ${theme.shadowPlaying};`}
`;

export const BeatContainer = styled.div`
  align-items: center;
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px 0;
  margin-left: ${({ value }) => (value === 4 ? '3px' : '1px')};
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
  white-space: pre-wrap;
`;
