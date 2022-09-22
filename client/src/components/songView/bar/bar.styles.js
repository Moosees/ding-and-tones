import styled from 'styled-components';
import { dividerMixin } from '../beats/beats.styles';

export const BeatGroup = styled.div`
  align-items: baseline;
  break-inside: avoid;
  display: inline-flex;
  margin-left: ${({ newMetre }) => (newMetre ? '2px' : '0')};
  position: relative;
  white-space: nowrap;

  &::before {
    ${({ newMetre }) => (newMetre ? dividerMixin : '')}
  }
`;

export const BarMetre = styled.div`
  align-items: center;
  display: flex;
  font-size: 13px;
  flex-direction: column;
  font-family: var(--font-text);
  justify-content: center;
  margin: 0 1px;

  span:first-child {
    border-bottom: 1px solid #000;
  }
`;
