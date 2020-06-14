import styled from 'styled-components';

export const MetreContainer = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export const MetreLabel = styled.label`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  padding: 0.5rem;
  text-align: center;
`;

export const MetreSelect = styled.select`
  background-image: linear-gradient(
    to bottom,
    #ccc 0%,
    ${({ theme }) => theme.colorBox} 100%
  );
  border: ${({ theme }) => theme.borderMedium};
  border-radius: 2px;
  color: ${({ theme }) => theme.colorText};
  padding: 2px;
`;
