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
  margin-bottom: 1px;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  padding: 0 1px;
  transition: color 0.15s ease-in;

  i {
    font-size: 18px;
  }

  &:hover {
    color: ${({ theme }) => theme.colorBeat};
  }
`;
