import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  margin-bottom: 2px;
  padding: 0.5rem 0.5rem 0.5rem 3rem;
  position: relative;

  & input {
    cursor: pointer;
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;

    &:checked ~ span::after {
      display: block;
    }
  }

  &:hover input ~ span {
    background-color: rgba(0, 200, 0, 0.3);
  }

  &:hover input:checked ~ span::after {
      border-color: rgba(200, 0, 0, 1);
  }
`;

export const CheckboxInput = styled.span`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 100px;
  height: 2.5rem;
  left: 0;
  position: absolute;
  top: 3px;
  width: 2.5rem;

  &::after {
    background-color: rgba(0, 255, 0, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 100px;
    content: '';
    display: none;
    height: 2.5rem;
    position: absolute;
    width: 2.5rem;
  }
`;
