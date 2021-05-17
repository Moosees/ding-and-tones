import styled from 'styled-components';

export const SongLayout = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  max-width: 100%;

  @media print {
    background-color: #fff;
    color: #000;
    display: block;
  }
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: ${({ headersOpen }) =>
    headersOpen ? 'space-between' : 'flex-end'};
  margin: 2rem 1rem ${({ headersOpen }) => (headersOpen ? '0' : '1.5rem')};
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 24px;

  @media print {
    font-size: 32px;
    margin-top: 1cm;
    text-align: center;
  }
`;

export const Composer = styled.h2`
  font-size: 16px;
  font-weight: 400;

  @media print {
    margin-top: 12px;
    text-align: center;
  }
`;

export const Tempo = styled.h4`
  font-size: 14px;
  margin: 20px 10px 10px;

  @media print {
    margin: 46px 10px 10px;
  }
`;

export const Bars = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  row-gap: 16px;
  width: 100%;
`;

export const Footer = styled.footer`
  bottom: 0;
  font-size: 10px;
  position: fixed;
  right: 0;
`;
