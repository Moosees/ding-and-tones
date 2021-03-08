import styled from 'styled-components';

export const TableContainer = styled.div`
  height: 100%;
  max-height: ${({ isMobile }) => (isMobile ? '600px' : '58rem')};
  width: ${({ isMobile }) => (isMobile ? '100%' : '95%')};

  ${({ theme }) => theme.mqW850`
    max-height: 78vh;
  `}
`;

export const Table = styled.table`
  border-spacing: 0;
  padding: 0 0.6rem;
  position: relative;
  width: 100%;
`;

export const TableHeader = styled.th`
  background-color: ${({ theme }) => theme.colorBeat};
  border-bottom: ${({ theme }) => theme.borderLight};
  color: ${({ theme }) => theme.colorTextInverted};
  padding: 0.7rem 0.5rem 0.5rem;
  position: sticky;
  text-align: left;
  top: 0;

  &:first-child {
    border-top-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
  }
`;

export const TableRow = styled.tr`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colorBtnConfirm};
  }

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colorBtnLight};
  }

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colorBtnHeavy};
  }
`;

export const TableCell = styled.td`
  padding: 0.7rem 0.5rem;
  width: 1%;
`;

export const ExpandedRow = styled.tr`
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colorBtnLight};
  }

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colorBtnHeavy};
  }

  td {
    padding-bottom: 0.7rem;
    width: 0.01%;
    word-spacing: -1px;

    ${({ theme }) => theme.mqW1200`
      word-spacing: -2px;
  `}
  }
`;

export const DeleteContainer = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  right: 1.4rem;
`;

export const TableFooter = styled.td`
  background-color: ${({ theme }) => theme.colorBeat};
  border-radius: 0 0 10px 10px;
  color: ${({ theme }) => theme.colorTextInverted};
  /* cursor: pointer; */
  padding: 0.6rem;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colorBeatActive};
  }
`;
