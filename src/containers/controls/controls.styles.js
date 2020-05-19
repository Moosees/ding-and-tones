import styled from 'styled-components';

export const ControlsContainer = styled.div`
  align-items: stretch;
  display: flex;
  flex: 1 0;
  flex-direction: column;
  width: 100%;
`;

export const InfoContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  border: 3px solid #000;
  border-radius: 5px;
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.25);
  flex: 1 0 10vh;
  overflow: scroll;
  z-index: 5;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;
