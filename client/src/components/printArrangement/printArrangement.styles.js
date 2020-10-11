import styled from 'styled-components';

export const PrintLayout = styled.div`
  @media print {
    background-color: #fff;
    color: #000;
    font-size: 12px;
  }
`;

export const Title = styled.h1`
  @media print {
    text-align: center;
    font-size: 30px;
    margin-top: 12px;
  }
`;

export const Composer = styled.h2`
  @media print {
    text-align: center;
    font-size: 20px;
    margin-top: 8px;
  }
`;

export const Tempo = styled.h4`
  @media print {
    font-size: 18px;
    margin-top: 12px;
  }
`;

export const Footer = styled.footer`
  @media print {
    margin-top: 12px;
  }
`;
