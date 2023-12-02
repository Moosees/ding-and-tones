import styled from 'styled-components';

export const SongLayout = styled.div`
  font-size: 14px;

  ${({ theme }) => theme.mqW850`
    margin-left: 2px;
  `}

  @media print {
    background-color: #fff;
    color: #000;
    margin: 12mm;
  }
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: ${({ $headersOpen }) =>
    $headersOpen ? 'space-between' : 'flex-end'};
  margin: 2rem 1rem ${({ $headersOpen }) => ($headersOpen ? '0' : '1.5rem')};
`;

export const Title = styled.h1`
  font-size: 24px;

  @media print {
    font-size: 32px;
    margin-top: 5mm;
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
  padding: 2px;
`;

export const Footer = styled.footer`
  bottom: 2mm;
  font-size: 10px;
  /* page-break-after: always; */
  position: fixed;
  right: 2mm;
`;
