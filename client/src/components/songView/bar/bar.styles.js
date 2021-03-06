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

export const BarContainer = styled.li`
  break-after: auto;
  display: inline-flex;
  flex-direction: column;
  padding: 36px 8px 8px;
  position: relative;
`;

export const BarMetre = styled.div`
  font-size: 12px;
  left: 10px;
  position: absolute;
  top: 16px;
`;

export const BeatsContainer = styled.div`
  display: flex;
  position: relative;

  ${BarContainer}:not(:last-child) &:after {
    border-right: 1px solid #000;
    bottom: -2px;
    content: '';
    position: absolute;
    right: -8px;
    top: -2px;
    width: 1px;
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

  &:not(:first-child) {
    margin-left: ${({ addMarginLeft, value }) =>
      addMarginLeft ? '8px' : value === 4 ? '4px' : '2px'};
  }
`;

export const BeatText = styled.span`
  font-size: ${({ value }) => beatStyles.fz[value] || 12}px;
  letter-spacing: -1px;
  white-space: pre-wrap;
  /* margin-left: -1px; */
`;
