import styled from 'styled-components';
import { GradientLayout } from '../../shared/layout/layout.styles';

export const BarInfoContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fzSmallest};
  justify-content: space-between;
  padding: 0 1rem;

  ${({ theme }) => theme.mqW1200`
    font-size: ${theme.fzSmaller};
  `}

  ${({ theme }) => theme.mqW850`
    font-size: ${theme.fzSmall};
  `}

  ${({ theme }) => theme.mqW700`
    font-size: ${theme.fzMedium};
  `}
`;

export const DragGradient = styled(GradientLayout)`
  cursor: ${({ disabled, isDragging }) =>
    disabled ? 'default' : isDragging ? 'grabbing' : 'grab'};
`;
