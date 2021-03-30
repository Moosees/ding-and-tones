import styled from 'styled-components';

const beatStyles = {
  heightWidth: {
    4: '28',
    8: '26',
    16: '24',
  },
  fz: {
    4: '12',
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
  align-items: center;
  align-self: stretch;
  display: flex;
  font-size: 12px;
  flex-direction: column;
  justify-content: center;
  margin-left: 4px;

  span:first-child {
    border-bottom: 1px dotted #000;
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
    isBeatPlaying && `border-color: ${theme.colorBeatActive};`}
`;

export const BeatContainer = styled.div`
  align-items: center;
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px 0;
  margin-left: ${({ value }) => (value === 4 ? '4px' : '2px')};
  position: relative;
`;

export const BeatText = styled.span`
  font-size: ${({ value }) => beatStyles.fz[value] || 12}px;
  letter-spacing: -1px;
  white-space: pre-wrap;
`;
