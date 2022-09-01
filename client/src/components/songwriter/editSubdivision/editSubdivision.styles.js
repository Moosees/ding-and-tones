import styled from 'styled-components';

export const EditSubdivisionContainer = styled.div`
  border: ${({ theme }) => theme.borderLight};
  border-radius: 2px;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colorBg};
  display: flex;
  padding: 0.5rem 1rem;
  position: absolute;
  width: 100%;
`;
