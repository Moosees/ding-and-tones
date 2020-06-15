import styled from 'styled-components';

export const ControlsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const DragHandle = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colorText};
  cursor: grab;
  display: flex;
  justify-content: center;
  padding: 2px;
  margin-right: 2px;
`;

// cursor: grabbing;
