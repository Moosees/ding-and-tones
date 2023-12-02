import styled from 'styled-components';

const dividerMixin = `
  border-right: 1px solid #000;
  bottom: 10%;
  content: "";
  height: 80%;
  left: 1px;
  position: absolute;
  width: 1px;
`;

export const BeatGroup = styled.div`
  align-items: baseline;
  break-inside: avoid;
  display: inline-flex;
  margin-left: ${({ $newMetre }) => ($newMetre ? '2px' : '0')};
  position: relative;
  white-space: nowrap;

  &::before {
    ${({ $newMetre }) => ($newMetre ? dividerMixin : '')}
  }
`;

export const BarMetre = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  font-size: 13px;
  flex-direction: column;
  font-family: var(--font-text);
  justify-content: center;
  margin: 0 1px 0 6px;

  span:first-child {
    border-bottom: 1px solid #000;
  }
`;
