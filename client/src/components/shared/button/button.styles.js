import styled from 'styled-components';

export const ButtonGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${({ position }) => (position ? position : 'flex-end')};
  width: 100%;
`;

export const ControlsButton = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fzControls};
  padding: 0.5rem 2px;
  text-shadow: ${({ theme }) => theme.textShadowLight};
  transition: color 0.1s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colorBtnConfirm};
  }
`;

export const ControlsLabel = styled.span`
  padding-left: 5px;
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: ${({ editOnly }) => (editOnly ? 'default' : 'pointer')};
  left: ${({ position }) => (position === 'left' ? '1px' : 'unset')};
  position: ${({ position }) => (position ? 'absolute' : 'static')};
  right: ${({ position }) => (position === 'right' ? '1px' : 'unset')};

  i {
    color: ${({ color, theme }) => (color ? theme[color] : theme.colorText)};
    font-size: ${({ theme, small }) =>
      small ? theme.fzSmallIcon : theme.fzLarge};
    padding: 0.5rem;
    transition: transform 0.1s ease-in;
  }

  &:hover:not([disabled]) i {
    transform: scale(${({ editOnly }) => (!editOnly ? '1.15' : '1')});
  }

  &:disabled {
    cursor: default;

    i {
      opacity: 0.2;
    }
  }

  &:focus:not(.focus-visible) {
    outline: none;
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
  font-size: ${({ controls, theme }) =>
    controls ? theme.fzMedium : theme.fzLarge};
  margin: -3px 2px 0;
  min-width: 6rem;
  padding: ${({ controls }) => (controls ? '0.4rem' : '0.4rem 1rem')};
  position: relative;
  text-shadow: ${({ theme }) => theme.textShadowLight};
  top: 3px;
  transition: transform 0.1s ease-in;
  ${({ isActive }) => (isActive ? 'z-index: 10;' : '')}

  &:focus:not(.focus-visible) {
    outline: none;
  }

  &:hover {
    ${({ isActive }) => !isActive && 'transform: translateY(-2%) scale(1.04);'}
  }
`;

export const PrimaryButton = styled.button`
  border: ${({ theme }) => theme.borderLight};
  background-color: ${({ light, theme }) =>
    light ? theme.colorBtnLight : theme.colorBtnHeavy};
  border-radius: 3px;
  box-shadow: ${({ light, theme }) =>
    light ? theme.shadowBtnLight : theme.shadowBtnHeavy};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  font-size: ${({ theme }) => theme.fzMedium};
  margin: 0.5rem 3px;
  min-width: 8rem;
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  padding: 0.5rem 2px;
  transition: border 0.15s ease-in;

  &:hover {
    border: ${({ disabled, theme }) =>
      disabled ? theme.borderLight : theme.borderMedium};
  }

  ${({ theme }) => theme.mqSmall`
    margin: 3px;
    min-width: 6rem;
    padding: 3px 2px;
  `}
`;
