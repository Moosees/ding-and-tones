import styled from 'styled-components';

export const DropdownContainer = styled.div`
  background-color: ${({ theme }) => theme.colorBox};
  border: ${({ theme }) => theme.borderMedium};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  min-width: 14rem;
  padding: 0.5rem;
  position: absolute;
  top: 3.4rem;
  z-index: 900;
`;
