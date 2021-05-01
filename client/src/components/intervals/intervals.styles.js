import styled from 'styled-components';

export const DrumModeContainer = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  justify-content: space-between;
  margin: 3px 0;
  min-width: 75%;

  span {
    cursor: pointer;
    text-transform: uppercase;
  }

  ${({ theme }) => theme.mqW1000`
    margin: 0;
    min-width: 90%;
  `}
`;

export const IntervalList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 40rem;
  padding: 0.5rem 1.5rem;

  ${({ theme }) => theme.mqW1200`
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
    padding-bottom: 6px;
  }
`;

export const IntervalColor = styled.div`
  align-items: center;
  background-color: ${({ color }) => color};
  cursor: default;
  border: ${({ theme }) => theme.borderMedium};
  border-radius: 100%;
  display: flex;
  height: 2.5rem;
  justify-content: center;
  margin: 0.25rem;
  min-height: 2.5rem;
  min-width: 2.5rem;
  width: 2.5rem;

  span {
    color: #eee;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.9), 0 0 2px rgba(0, 0, 0, 0.8),
      0 0 1px rgba(0, 0, 0, 0.5);
    position: relative;
  }
`;

export const IntervalBreakBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const IntervalText = styled.span`
  display: inline-block;
  padding: 0 1px;
`;
