import styled from 'styled-components';

export const TextInput = styled.input`
  background-color: transparent;
  border: 0;
  height: 3.2rem;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &::selection {
    background-color: ${({ theme }) => theme.colorTextInverted};
  }
`;
