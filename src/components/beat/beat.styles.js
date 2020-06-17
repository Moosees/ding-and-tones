import styled from 'styled-components';

const beatStyles = {
  heightWidth: {
    4: '3.1',
    8: '2.8',
    16: '2.5',
  },
  fz: {
    4: '1.2',
    8: '1.1',
    16: '1',
  },
};

export const BeatContainer = styled.div`
  align-items: center;
  border: 1px solid
    ${({ theme, isBeatPlaying }) =>
      isBeatPlaying ? theme.colorCheckbox : theme.colorText};
  border-radius: 100%;
  display: flex;
  height: ${({ value }) => beatStyles.heightWidth[value]}rem;
  justify-content: center;
  margin: 1px;
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
