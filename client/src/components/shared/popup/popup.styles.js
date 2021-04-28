import styled from 'styled-components';

export const Overlay = styled.div`
  align-items: center;
  background-color: rgba(20, 20, 20, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
`;

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colorBox};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 26rem;
  padding: 2rem;

  & > *:last-child {
    margin-bottom: 1.2rem;
  }

  ${({ theme }) => theme.mqW1200`
    border-radius: 40px;
  `}

  ${({ theme }) => theme.mqW850`
    border-radius: 20px;
  `}
`;

export const AccountHeader = styled.h2`
  align-self: center;
  font-size: ${({ theme }) => theme.fzHeader};
  margin-bottom: 0.5rem;
  padding: 1rem;
`;

export const Label = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 2rem 1.5rem;

  ${({ theme }) => theme.mqW1000`
    padding: 1.5rem 1rem;
  `}
`;
