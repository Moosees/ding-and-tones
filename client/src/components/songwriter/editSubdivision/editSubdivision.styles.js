import styled from 'styled-components';

export const EditSubdivisionContainer = styled.div`
  border: ${({ theme }) => theme.borderLight};
  border-radius: 4px;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colorBox};
  display: flex;
  padding: 0.5rem 0.2rem;
  position: absolute;
  width: 100%;
`;
