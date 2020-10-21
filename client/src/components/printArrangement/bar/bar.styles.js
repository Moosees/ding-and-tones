import styled from 'styled-components';

const beatStyles = {
  heightWidth: {
    4: '28',
    8: '25',
    16: '24',
  },
  fz: {
    4: '15',
    8: '14',
    16: '13',
  },
  border: {
    4: 'solid',
    8: 'solid',
    16: 'dashed',
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
  border: ${({ value }) => (value === 4 ? '2px' : '1px')};
  border-style: ${({ value }) => beatStyles.border[value]};
  border-radius: 100%;
  border-color: #000;
  display: flex;
  height: ${({ value }) => beatStyles.heightWidth[value]}px;
  justify-content: center;
  width: ${({ value }) => beatStyles.heightWidth[value]}px;

  &:not(:first-child) {
    margin-left: ${({ value }) => (value === 4 ? '4px' : '2px')};
  }

  span {
    font-size: ${({ value }) => beatStyles.fz[value]}px;
  }
`;
