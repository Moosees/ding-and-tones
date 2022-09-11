import styled from 'styled-components';

export const BarMetre = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  font-size: 13px;
  flex-direction: column;
  font-family: var(--font-text);
  justify-content: center;
  margin-left: 3px;
  transform: translateY(${({ offset }) => offset}px);

  span:first-child {
    border-bottom: 1px solid #000;
  }
`;

export const BarDivider = styled.div`
  align-self: stretch;
  border-right: 1px solid #000;
  margin: 10px 0;
  width: 1px;

  &:not(:first-child) {
    margin-left: 4px;
  }
`;
