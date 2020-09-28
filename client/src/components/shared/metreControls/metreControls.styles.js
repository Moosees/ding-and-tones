import styled from 'styled-components';

export const MetreLabel = styled.label`
  display: flex;
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
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  padding: 2px;
  transition: border 0.15s ease-in;

  &:hover {
    border: ${({ theme, small }) =>
      small ? theme.borderMedium : theme.borderLight};
  }
`;
