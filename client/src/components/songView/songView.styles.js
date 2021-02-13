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
    margin: 1.6cm;
  }
`;

export const Header = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin: 2rem 1rem 0;
`;

export const Title = styled.h1`
  font-size: 24px;

  @media print {
    text-align: center;
    font-size: 32px;
  }
`;

export const Composer = styled.h2`
  font-size: 16px;

  @media print {
    margin-top: 12px;
    text-align: center;
  }
`;

export const Tempo = styled.h4`
  font-size: 14px;
  margin: 12px 10px 4px;

  @media print {
    margin: 46px 10px 10px;
  }
`;

export const Bars = styled.ul`
  flex-grow: 1;
  max-width: 100%;
`;

export const Footer = styled.footer`
  font-size: 12px;
  margin-left: 10px;
  margin-top: 24px;
`;
