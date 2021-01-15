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

  &:not(:last-child):after {
    border-right: 1px solid #000;
    content: '';
    height: 42px;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 1px;
  }
`;

export const BarMetre = styled.div`
  font-size: 12px;
  left: 10px;
  position: absolute;
  top: 16px;
`;

export const BeatsContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const BeatContainer = styled.div`
  align-items: center;
  border: ${({ value }) => beatStyles.border[value]};
  border-radius: 100%;
  display: flex;
  height: ${({ value }) => beatStyles.heightWidth[value]}px;
  justify-content: center;
  text-align: center;
  width: ${({ value }) => beatStyles.heightWidth[value]}px;

  ${({ isBeatPlaying, theme }) =>
    isBeatPlaying && `border-color: ${theme.colorBeatActive};`}

  &:not(:first-child) {
    margin-left: ${({ addMarginLeft, value }) =>
      addMarginLeft ? '8px' : value === 4 ? '4px' : '2px'};
  }

  span {
    font-size: ${({ value }) => beatStyles.fz[value]}px;
    letter-spacing: -1px;
    margin-left: -1px;
  }
`;
