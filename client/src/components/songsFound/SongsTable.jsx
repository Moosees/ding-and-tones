import React from 'react';
import { useTable } from 'react-table';
import {
  Table,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeadRow,
  TableRow,
} from './songsFound.styles';

const SongsTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  console.log('table');

  return (
    <TableContainer>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <TableHeader {...col.getHeaderProps()}>
                  {col.render('Header')}
                </TableHeader>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default SongsTable;
