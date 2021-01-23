import styled from 'styled-components';

export const DrumModeContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 3px 0;
  min-width: 75%;

  span {
    cursor: pointer;
    text-transform: uppercase;
  }

  ${({ theme }) => theme.mqW850`
    margin: 0;
    min-width: 90%;
  `}
`;

export const IntervalList = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.5rem;

  ${({ theme }) => theme.mqW850`
    padding: 0.5rem;
  `}
`;

export const IntervalContainer = styled.div`
  align-items: center;
  border-bottom: ${({ theme }) => theme.borderLight};
  cursor: pointer;
  display: flex;

  &:last-child {
    border-bottom: 0;
    padding-bottom: 2px;
  }
`;

export const IntervalColor = styled.div`
  align-items: center;
  background-color: ${({ color }) => color};
  cursor: default;
  border-radius: 100%;
  display: flex;
  height: 2.2rem;
  justify-content: center;
  margin: 0.25rem;
  width: 2.2rem;

  span {
    position: relative;
    text-shadow: 1px 0 0px rgba(200, 200, 200, 0.55),
      -1px 0 0px rgba(200, 200, 200, 0.55), 0 1px 0px rgba(200, 200, 200, 0.55),
      0 -1px 0px rgba(200, 200, 200, 0.55);

    ${({ theme }) => theme.mqW850`
      top: 1px;
    `}
  }
`;

export const IntervalBreakBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.mqW850`
    flex-direction: column;
  `}
`;

export const IntervalText = styled.span`
  display: inline-block;
  padding: 0 1px;
`;
