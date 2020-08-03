import styled from 'styled-components';

export const TableContainer = styled.div`
  border-bottom: ${({ theme }) => theme.borderMedium};
  border-top: ${({ theme }) => theme.borderMedium};
  height: 100%;
  overflow: auto;
  width: 90%;
`;

export const Table = styled.table`
  border-spacing: 0;
  padding: 0 0.6rem;
  position: relative;
  width: 100%;
`;

export const TableHeader = styled.th`
  background-color: ${({ theme }) => theme.colorBtnHeavy};
  border-bottom: ${({ theme }) => theme.borderLight};
  padding: 0.5rem;
  position: sticky;
  text-align: left;
  text-transform: uppercase;
  top: 0;
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
  padding: 0.5rem;
`;
