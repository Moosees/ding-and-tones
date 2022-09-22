import styled from 'styled-components';

export const SongLayout = styled.div`
  /* align-items: stretch; */
  /* display: flex; */
  /* flex-direction: column; */
  font-size: 14px;
  /* max-width: 100%; */

  ${({ theme }) => theme.mqW850`
    margin-left: 2px;
  `}

  @media print {
    background-color: #fff;
    color: #000;
    /* display: block; */
    margin: 10mm 12mm;
  }
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: ${({ headersOpen }) =>
    headersOpen ? 'space-between' : 'flex-end'};
  margin: 2rem 1rem ${({ headersOpen }) => (headersOpen ? '0' : '1.5rem')};
  /* width: 100%; */
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
  list-style: none;
  /* align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; */
  /* width: 100%; */
`;

export const Footer = styled.footer`
  bottom: 2mm;
  font-size: 10px;
  /* page-break-after: always; */
  position: fixed;
  right: 2mm;
`;
