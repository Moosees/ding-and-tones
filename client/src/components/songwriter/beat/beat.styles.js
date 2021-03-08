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

export const Arrow = styled.div`
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-radius: ${({ openTop }) =>
    openTop
      ? '50% 50% 50% 50% / 0% 0% 100% 100%'
      : '50% 50% 50% 50% / 100% 100% 0% 0%'};
  border-width: ${({ openTop }) =>
    openTop ? '0 2px 2px 2px' : '2px 2px 0 2px'};
  padding: 0.5rem;
  position: absolute;
  z-index: 200;

  ${({ openTop }) => (openTop ? 'bottom: 2rem;' : 'top: 2rem;')}
`;

export const BeatAnchor = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  position: relative;
`;

export const BeatContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: ${({ value }) => (value === 4 ? '3px' : '0')};
  position: relative;

  ${({ theme }) => theme.mqW850`
    margin-left: 0;
  `}
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
  transition: color 0.1s ease-in;
  width: ${({ value }) => beatStyles.heightWidth[value]}rem;

  &:hover {
    ${({ isSongPlaying, theme }) =>
      !isSongPlaying && `border-color: ${theme.colorBtnConfirm};`}
  }
`;

export const BeatText = styled.span`
  font-size: ${({ value }) => beatStyles.fz[value] || '12'}px;
  white-space: pre-wrap;

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
  z-index: 100;

  ${({ openLeft }) => (openLeft ? 'right: 0;' : 'left: 0;')}
  ${({ openTop }) => (openTop ? 'bottom: 3rem;' : 'top: 3rem;')}
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
  min-width: 6rem;
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
  justify-content: center;
`;

export const HandIcon = styled.i`
  font-size: inherit;
`;
