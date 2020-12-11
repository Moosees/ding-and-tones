import styled from 'styled-components';
import { GradientLayout } from '../../shared/layout/layout.styles';

export const BarInfoContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fzSmall};
  justify-content: space-between;
  padding: 0 1rem;
`;

export const DragGradient = styled(GradientLayout)`
  cursor: ${({ disabled, isDragging }) =>
    disabled ? 'default' : isDragging ? 'grabbing' : 'grab'};
`;
