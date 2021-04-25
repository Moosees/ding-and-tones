import styled from 'styled-components';

export const MoveContainer = styled.div`
  align-items: center;
  display: flex;
  height: 23rem;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
  width: 23rem;
`;

export const PositionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colorBtnHeavy};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-radius: 100%;
  height: 75%;
  width: 75%;

  & div:nth-child(1) {
    right: 5rem;
    top: 1.5rem;
  }
  & div:nth-child(2) {
    left: 5rem;
    top: 1.5rem;
  }
  & div:nth-child(3) {
    right: 1rem;
    top: 6rem;
  }
  & div:nth-child(4) {
    left: 1rem;
    top: 6rem;
  }
  & div:nth-child(5) {
    bottom: 6rem;
    right: 1rem;
  }
  & div:nth-child(6) {
    bottom: 6rem;
    left: 1rem;
  }
  & div:nth-child(7) {
    bottom: 1.5rem;
    right: 5rem;
  }
  & div:nth-child(8) {
    bottom: 1.5rem;
    left: 5rem;
  }
`;

export const Note = styled.div`
  align-items: center;
  background-color: ${({ isGrabbed }) => (isGrabbed ? '#333' : '#ccc')};
  border: ${({ theme }) => theme.borderHeavyLight};
  border-radius: 100%;
  color: ${({ isGrabbed }) => (isGrabbed ? '#ccc' : '#111')};
  cursor: pointer;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  height: 4rem;
  justify-content: center;
  position: absolute;
  width: 4rem;

  ${({ theme }) => theme.mqW1200`
    height: 3rem;
    width: 3rem;
  `}

  ${({ theme }) => theme.mqW850`
    height: 2rem;
    width: 2rem;
  `}
`;
