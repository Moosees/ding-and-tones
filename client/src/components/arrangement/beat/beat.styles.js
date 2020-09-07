import styled from 'styled-components';

const beatStyles = {
  heightWidth: {
    4: '2.8',
    8: '2.5',
    16: '2.3',
  },
  fz: {
    4: '1.2',
    8: '1.1',
    16: '1',
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
  border-color: ${({ theme, isBeatPlaying }) =>
    isBeatPlaying ? theme.colorBeatActive : theme.colorBeat};
  box-shadow: ${({ theme }) => theme.shadowBtnHeavy};
  cursor: ${({ isLocked }) => (isLocked ? 'default' : 'pointer')};
  display: flex;
  height: ${({ value }) => beatStyles.heightWidth[value]}rem;
  justify-content: center;
  margin: 1px;
  margin-left: ${({ value }) => (value === 4 ? '4px' : '0')};
  position: relative;
  width: ${({ value }) => beatStyles.heightWidth[value]}rem;
`;

export const BeatText = styled.div`
  font-size: ${({ value }) => beatStyles.fz[value]}rem;
`;

export const Dropdown = styled.div`
  background-color: ${({ theme }) => theme.colorBg};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-width: 2px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  left: -1px;
  padding: 4px 0;
  position: absolute;
  text-align: center;
  top: 32px;
  z-index: 100;

  &::before {
    background-color: ${({ theme }) => theme.colorBg};
    border: ${({ theme }) => theme.borderHeavyLight};
    border-radius: 2px;
    border-width: 0 2px 2px 0;
    content: '';
    left: 6px;
    padding: 5px;
    position: absolute;
    top: -7px;
    transform: rotate(-136deg);
  }
`;

export const DropdownItem = styled.div`
  font-size: ${({ theme }) => theme.fzSmall};
  padding: 2px 5px;
  position: relative;
  transition: background-color 0.2s ease;
  z-index: 1000;

  &:hover {
    background-color: ${({ theme }) => theme.colorBtnHeavy};
  }
`;
