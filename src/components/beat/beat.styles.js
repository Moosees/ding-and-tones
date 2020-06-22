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
  cursor: pointer;
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
  background-color: #fff;
  position: absolute;
  top: 3rem;
  z-index: 100;
`;
