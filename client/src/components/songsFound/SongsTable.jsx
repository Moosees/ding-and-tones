import React, { Fragment } from 'react';
import { useExpanded, useTable } from 'react-table';
import {
  ExpandedRow,
  Table,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
} from './songsFound.styles';

const SongsTable = ({ columns, data, renderRowExpanded }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable({ columns, data }, useExpanded);

  console.log('table rendering');

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
            const { key, role } = row.getRowProps();
            return (
              <Fragment key={key}>
                <TableRow
                  role={role}
                  onClick={() => row.toggleRowExpanded(!row.isExpanded)}
                >
                  {row.cells.map((cell) => (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  ))}
                </TableRow>
                {row.isExpanded && (
                  <>
                    <tr>
                      <td></td>
                    </tr>
                    <ExpandedRow>
                      <td colSpan={visibleColumns.length}>
                        {renderRowExpanded(row.original)}
                      </td>
                    </ExpandedRow>
                  </>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default SongsTable;
