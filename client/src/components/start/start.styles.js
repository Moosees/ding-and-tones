import styled from 'styled-components';

export const StartContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  padding: 2rem;

  & header {
    padding-block: 1.5rem;
  }

  & footer a {
    white-space: nowrap;
  }
`;

export const MainHeading = styled.h1`
  font-size: 3rem;

  & span {
    font-size: 1.2em;
    text-shadow: 0px 2px ${({ theme }) => theme.colorBeat};
  }
`;

export const SubHeading = styled.h2`
  font-size: 1.8rem;
  text-indent: 0.5rem;
  padding-block: 0.5rem;
`;

export const List = styled.ul`
  font-size: 1.6rem;
  list-style-position: inside;

  & li {
    padding: 2px;
  }
`;
