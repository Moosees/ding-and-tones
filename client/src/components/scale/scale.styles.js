import styled from 'styled-components';

export const ScaleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  padding: var(--padding);

  @media screen and (orientation: portrait) and (max-width: 1000px) {
    flex-direction: column;
    padding: 0 0.5rem;
  }

  @media screen and (orientation: landscape) and (max-width: 750px) {
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
    min-height: 0;
    width: 100%;

    &:first-child {
      min-height: auto;
      border-bottom: ${({ theme }) => theme.borderMedium};
      flex: 0;
    }
  }

  @media screen and (orientation: landscape) and (max-width: 750px) {
    height: auto;
  }
`;
