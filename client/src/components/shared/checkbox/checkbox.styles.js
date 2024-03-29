import styled from 'styled-components';

export const CheckboxContainer = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;

  ${({ $reverse }) =>
    $reverse &&
    `
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;  
  `}

  &:focus {
    outline: 0;
  }

  &:hover div,
  &:focus div {
    border: ${({ theme }) => theme.borderDark};
  }
`;

export const CheckboxIcon = styled.div`
  background-color: ${({ $checked, theme }) =>
    $checked ? theme.colorCheckbox : theme.colorBtnClear};
  border: ${({ theme }) => theme.borderLight};
  border-radius: 100%;
  height: ${({ $small }) => ($small ? '1.8' : '2')}rem;
  margin: 1px;
  opacity: 0.8;
  width: ${({ $small }) => ($small ? '1.8' : '2')}rem;
`;

export const CheckboxLabel = styled.span`
  margin-left: 2px;
`;
