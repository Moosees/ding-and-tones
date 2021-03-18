import styled from 'styled-components';

const beatStyles = {
  heightWidth: {
    4: '24',
    8: '23',
    16: '22',
  },
  fz: {
    4: '13',
    8: '12',
    16: '11',
  },
  border: {
    4: '1px solid #000',
    8: '1px dotted #000',
    16: '1px dashed #000',
  },
};

export const BarMetre = styled.div`
  font-size: 12px;
  left: 10px;
  position: absolute;
  top: 16px;
`;

export const BarDivider = styled.div`
  align-self: stretch;
  border-right: 1px solid #000;
  margin-top: 14px;
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
    isBeatPlaying && `border-color: ${theme.colorBeatActive};`}
`;

export const BeatContainer = styled.div`
  align-items: center;
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 16px 0 2px;
  margin-left: ${({ value }) => (value === 4 ? '4px' : '2px')};
`;

export const BeatText = styled.span`
  font-size: ${({ value }) => beatStyles.fz[value] || 12}px;
  letter-spacing: -1px;
  white-space: pre-wrap;
`;
