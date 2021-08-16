import styled from 'styled-components';

export const SongContainer = styled.div`
  display: grid;
  flex-grow: 1;
  grid-template-rows: max-content min-content minmax(0, 1fr);
  justify-items: center;
  padding: var(--padding);

  @media screen and (orientation: portrait) and (max-width: 1000px) {
    padding: 3px 0;
  }
`;

export const SongEditContainer = styled.div`
  display: flex;
  /* offsetParent for beat dropdown */
  position: relative;
  width: 100%;
`;

export const SongViewContainer = styled.div`
  display: flex;
  flex-grow: 1;
  padding: var(--padding);
`;
