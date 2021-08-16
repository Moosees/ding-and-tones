import styled from 'styled-components';

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ theme }) => theme.mqW1200`
    padding: 0 0.5rem;
  `}

  @media screen and (orientation: portrait) and (max-width: 1000) {
    max-width: 80vw;
  }
`;
