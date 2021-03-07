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
  dropdownOffset: {
    left: {
      4: 'right: 0;',
      8: 'right: -1px;',
      16: 'right: -2px;',
    },
    right: {
      4: 'left: -1px;',
      8: 'left: -2px;',
      16: 'left: -4px;',
    },
  },
};
export const BeatAnchor = styled.div`
  /* align-items: center; */
  /* display: flex; */
  /* justify-content: center; */
  position: relative;
`;

export const BeatContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const BeatCircle = styled.div`
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

export const BeatText = styled.span`
  font-size: ${({ value }) => beatStyles.fz[value]}px;

  ${({ theme }) => theme.mqW850`
    letter-spacing: -1px;
  `}
`;

export const Dropdown = styled.div`
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-width: 2px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadowLight};
  display: flex;
  justify-content: center;
  padding: 2px;
  position: absolute;
  width: max-content;
  z-index: 100;

  ${({ openLeft, value }) => (openLeft ? 'right: -4px;' : 'left: -4px;')}
  ${({ openTop }) => (openTop ? 'bottom: 3rem;' : 'top: 3rem;')}

  ${({ theme }) => theme.mqW850`
    transform: translateX(0);
  `}

  &::before {
    background-color: ${({ theme }) => theme.colorBg};
    border: ${({ theme }) => theme.borderHeavyLight};
    border-radius: ${({ openTop }) =>
      openTop
        ? '50% 50% 50% 50% / 0% 0% 100% 100%'
        : '50% 50% 50% 50% / 100% 100% 0% 0%'};
    border-width: ${({ openTop }) =>
      openTop ? '0 2px 2px 2px' : '2px 2px 0 2px'};
    content: '';
    padding: 0.5rem;
    position: absolute;

    ${({ openLeft }) => (openLeft ? 'right: 5px;' : 'left: 5px;')}
    ${({ openTop }) => (openTop ? 'bottom: -1.2rem;' : 'top: -1.2rem;')}
  }
`;

export const DropdownItem = styled.div`
  align-items: center;
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
  display: flex;
  font-size: ${({ theme }) => theme.fzSmallest};
  justify-content: space-between;
  margin: 1px;
  opacity: ${({ disabled, selected }) => (disabled && !selected ? '0.6' : '1')};
  padding: 2px;
  position: relative;
  transition: background-color 0.2s ease, opacity 0.2s ease;
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

export const HandIcon = styled.i`
  font-size: inherit;
`;
