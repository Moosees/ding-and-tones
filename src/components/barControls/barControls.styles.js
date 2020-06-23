import styled from 'styled-components';

export const ControlsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const DragHandle = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colorText};
  cursor: ${({ disabled, isDragging }) =>
    disabled ? 'default' : isDragging ? 'grabbing' : 'grab'};
  display: flex;
  justify-content: center;
  margin-right: 2px;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  padding: 2px;
`;
