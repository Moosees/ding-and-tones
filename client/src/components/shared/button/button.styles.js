import styled from 'styled-components';

export const ButtonGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${({ position }) => (position ? position : 'center')};
  width: 100%;
`;

export const MenuButton = styled.div`
  align-items: center;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colorBtnConfirm : 'revert'};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fzSmall};
  padding: 0.5rem 2px;
  text-shadow: ${({ theme }) => theme.textShadowLight};
  transition: color 0.1s ease-in;

  &:hover,
  &:focus {
    outline: 0;
    color: ${({ theme }) => theme.colorBtnConfirm};
  }

  ${({ theme }) => theme.mqW1000`
    font-size: 12px;
  `}
`;

export const MenuLabel = styled.span`
  padding-left: 5px;
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: ${({ editOnly }) => (editOnly ? 'default' : 'pointer')};
  left: ${({ position }) => (position === 'left' ? '1px' : 'revert')};
  position: ${({ position }) => (position ? 'absolute' : 'static')};
  right: ${({ position }) => (position === 'right' ? '1px' : 'revert')};

  i {
    color: ${({ color, theme }) => (color ? theme[color] : theme.colorText)};
    font-size: ${({ theme, small }) =>
      small ? theme.fzMedium : theme.fzLarger};
    padding: 0.5rem;
    transition: color 0.1s ease-in;

    ${({ theme, small }) => theme.mqW1000`
      font-size ${small ? theme.fzLarge : theme.fzLargest}
  `}
  }

  &:focus:not(.focus-visible) {
    outline: 0;
  }

  &:hover:not([disabled]) i,
  &:focus:not([disabled]) i {
    ${({ editOnly, theme }) => !editOnly && `color: ${theme.colorBtnConfirm};`}
  }

  &:focus:not([disabled]) {
    outline: ${({ theme }) => theme.borderMedium};
  }

  &:disabled {
    cursor: default;

    i {
      opacity: 0.2;
    }
  }
`;

export const NavButton = styled.button`
  background-color: ${({ theme }) => theme.colorBox};
  border: ${({ isActive, theme }) =>
    isActive ? theme.borderHeavyDark : theme.borderHeavyLight};
  border-bottom-color: ${({ isActive, theme }) =>
    isActive ? theme.colorBox : theme.colorNavBorder};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fzLarger};
  margin: -3px 2px 0;
  min-width: 6rem;
  padding: 0.4rem 1rem;
  position: relative;
  text-shadow: ${({ theme }) => theme.textShadowLight};
  top: 3px;
  transition: transform 0.1s ease-in;
  ${({ isActive }) => (isActive ? 'z-index: 10;' : '')}

  &:hover, &:focus {
    outline: 0;
    ${({ isActive }) => !isActive && 'transform: translateY(-2%) scale(1.04);'}
  }
`;

export const PrimaryButton = styled.button`
  align-items: center;
  border: ${({ theme }) => theme.borderLight};
  background-color: ${({ light, theme }) =>
    light ? theme.colorBtnLight : theme.colorBtnHeavy};
  border-radius: 3px;
  box-shadow: ${({ light, theme }) =>
    light ? theme.shadowBtnLight : theme.shadowBtnHeavy};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  height: 2.8rem;
  justify-content: center;
  margin: 0.5rem 3px;
  min-width: 7.5rem;
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  padding: 0.5rem 2px;
  transition: border 0.15s ease-in;

  &:hover,
  &:focus {
    outline: 0;
    border: ${({ disabled, theme }) =>
      disabled ? theme.borderLight : theme.borderDark};
  }

  ${({ theme }) => theme.mqW1200`
    margin: 3px;
    min-width: 7rem;
  `}

  ${({ theme }) => theme.mqW1000`
    border-radius: 4px;
    min-width: 6rem;
    padding: 2px;
  `}
`;

export const HelpContainer = styled.div`
  p {
    margin-top: 3px;
  }
`;
