import styled from 'styled-components';

export const MetreContainer = styled.div`
  display: flex;
  margin: ${({ small }) => (small ? '0' : '1rem 0')};
`;

export const MetreLabel = styled.label`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  padding: ${({ small }) => (small ? '1px' : '0.5rem')};
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
  cursor: pointer;
  padding: 2px;
  transition: border 0.15s ease-in;

  &:hover {
    border: ${({ theme, small }) =>
      small ? theme.borderLight : theme.borderMedium};
  }
`;
