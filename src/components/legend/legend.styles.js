import styled from 'styled-components';

export const IntervalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Interval = styled.span`
  border: 3px solid ${({ color }) => color};
  border-radius: 2px;
  height: 2.5rem;
  margin-top: 2px;
  padding-left: 2px;
  min-width: 10rem;
`;
