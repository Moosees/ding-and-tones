import styled from 'styled-components';

const beatStyles = {
  heightWidth: {
    4: '2.7',
    8: '2.5',
    16: '2.3',
  },
  fz: {
    4: '12',
    8: '11',
    16: '10',
  },
  border: {
    4: 'solid',
    8: 'solid',
    16: 'dashed',
  },
};

export const BeatContainer = styled.div`
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
  margin-left: ${({ value }) => (value === 4 ? '4px' : '0')};
  position: relative;
  width: ${({ value }) => beatStyles.heightWidth[value]}rem;

  ${({ theme }) => theme.mqW850`
    margin-left: 0;
  `}
`;

export const BeatText = styled.div`
  font-size: ${({ value }) => beatStyles.fz[value]}px;
  letter-spacing: -1px;

  ${({ theme }) => theme.mqW850`
    letter-spacing: 0;
  `}
`;

export const Dropdown = styled.div`
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-width: 2px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadowLight};
  display: flex;
  flex-direction: column;
  padding: 4px 0;
  position: absolute;
  text-align: center;
  top: 3rem;
  width: max-content;
  z-index: 100;

  &::before {
    align-self: center;
    background-color: ${({ theme }) => theme.colorBg};
    border: ${({ theme }) => theme.borderHeavyLight};
    border-radius: 2px;
    border-width: 2px 0 0 2px;
    content: '';
    padding: 0.5rem;
    position: absolute;
    top: -0.7rem;
    transform: rotate(45deg);
  }
`;

export const DropdownItem = styled.div`
  background-color: ${({ hasNonScaleNote, selected, theme }) =>
    selected
      ? hasNonScaleNote
        ? theme.colorBtnClear
        : theme.colorBeat
      : 'transparent'};
  color: ${({ selected, theme }) =>
    selected ? theme.colorTextInverted : theme.colorText};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  font-size: ${({ theme }) => theme.fzSmallest};
  padding: 2px 5px;
  position: relative;
  transition: background-color 0.2s ease;
  z-index: 1000;

  ${({ disabled, theme }) =>
    !disabled &&
    `
  &:hover {
    background-color: ${theme.colorBtnHeavy};
  }
  `};

  ${({ theme }) => theme.mqW1200`
    font-size: ${theme.fzSmaller};
  `}

  ${({ theme }) => theme.mqW1000`
    font-size: ${theme.fzMedium};
    padding: 1px 5px;
  `}
`;
