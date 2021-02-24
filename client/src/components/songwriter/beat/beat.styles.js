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
  topOffset: {
    4: '1px',
    8: '2px',
    16: '3px',
  },
};

export const BeatAnchor = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

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
  margin-top: ${({ value }) => beatStyles.topOffset[value]};
  transition: color 0.1s ease-in;
  width: ${({ value }) => beatStyles.heightWidth[value]}rem;

  &:hover {
    ${({ isSongPlaying, theme }) =>
      !isSongPlaying && `border-color: ${theme.colorBtnConfirm};`}
  }

  ${({ theme }) => theme.mqW850`
    margin-left: 0;
  `}
`;

export const BeatText = styled.div`
  font-size: ${({ value }) => beatStyles.fz[value]}px;
  letter-spacing: -1px;
`;

export const Dropdown = styled.div`
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-width: 2px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadowLight};
  display: flex;
  justify-content: center;
  padding: 4px 0;
  position: absolute;
  top: 3rem;
  width: max-content;
  z-index: 100;

  &::before {
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
  border-radius: 2px;
  color: ${({ selected, theme }) =>
    selected ? theme.colorTextInverted : theme.colorText};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  font-size: ${({ theme }) => theme.fzSmallest};
  margin: 1px;
  padding: 2px;
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
  `}
`;

export const DropdownColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;
