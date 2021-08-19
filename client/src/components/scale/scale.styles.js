import styled from 'styled-components';

export const ScaleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  padding: var(--padding);

  @media screen and (orientation: portrait) and (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
    padding: 0 0.5rem;
  }

  @media screen and (orientation: landscape) and (max-height: 400px) {
    align-items: flex-start;
    overflow: auto;
  }
`;

export const Section = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  @media screen and (orientation: portrait) and (max-width: 1000px) {
    flex: 1;
    width: 100%;

    &:last-child {
      border-top: ${({ theme }) => theme.borderMedium};
      flex: 2;
      overflow: hidden;
    }
  }

  @media screen and (orientation: landscape) and (max-height: 400px) {
    height: auto;
  }
`;
