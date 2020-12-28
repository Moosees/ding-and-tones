import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IntervalHeader = styled.h4`
  margin: 3px 0;
  text-transform: uppercase;
`;

export const IntervalList = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  padding: 0.5rem;

  ${({ theme }) => theme.mqW850`
    padding: 1rem 0.5rem;
  `}
`;

export const IntervalContainer = styled.div`
  align-items: center;
  border-bottom: ${({ theme }) => theme.borderLight};
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
  position: relative;
  width: 2.2rem;

  span {
    position: absolute;
    text-shadow: 1px 0 0px rgba(200, 200, 200, 0.55),
      -1px 0 0px rgba(200, 200, 200, 0.55), 0 1px 0px rgba(200, 200, 200, 0.55),
      0 -1px 0px rgba(200, 200, 200, 0.55);
    top: 2px;

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
