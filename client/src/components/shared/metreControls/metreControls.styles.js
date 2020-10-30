import styled from 'styled-components';

export const MetreLabel = styled.label`
  background-color: ${({ hasLabel, theme }) =>
    hasLabel ? theme.colorBtnHeavy : 'unset'};
  background-image: ${({ hasLabel, theme }) =>
    hasLabel
      ? 'unset'
      : `linear-gradient(to bottom,#ccc 0%,
    ${theme.colorBox} 100%
  )`};
  display: flex;
  font-size: ${({ hasLabel, theme }) => (hasLabel ? 'inherit' : theme.fzSmall)};
  margin: ${({ hasLabel }) => (hasLabel ? '1.5rem 0' : 'unset')};
  min-height: ${({ hasLabel }) => (hasLabel ? '3rem' : 'unset')};
  min-width: 5.5rem;
  position: relative;
  text-align: center;
  width: 100%;

  i {
    align-self: center;
    color: ${({ theme }) => theme.colorText};
    font-size: ${({ theme }) => theme.fzLarge};
    position: absolute;
    right: 2px;
  }

  span {
    bottom: 2.8rem;
    left: 0;
    opacity: 0.6;
    position: absolute;
  }
`;

export const MetreSelect = styled.select`
  appearance: none;
  background-color: transparent;
  border: ${({ theme }) => theme.borderLight};
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  padding: 1px 15px 1px 2px;
  transition: border 0.15s ease-in;
  width: 100%;
  z-index: 1;

  &:hover {
    border: ${({ theme, disabled }) =>
      !disabled ? theme.borderMedium : theme.borderLight};
  }
`;
