import React, { Fragment } from 'react';
import { useExpanded, useTable } from 'react-table';
import {
  ExpandedRow,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from './songsFound.styles';

const SongsTable = ({ columns, data, handleFetchMore, renderRowExpanded }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable({ columns, data }, useExpanded);

  return (
    <TableContainer>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((col) => (
                <TableHeader {...col.getHeaderProps([{ style: col.style }])}>
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
                    <TableCell
                      {...cell.getCellProps([{ style: cell.column.style }])}
                    >
                      {cell.render('Cell')}
                    </TableCell>
                  ))}
                </TableRow>
                {row.isExpanded && (
                  <>
                    <tr>
                      <td colSpan={visibleColumns.length} />
                    </tr>
                    <ExpandedRow>{renderRowExpanded(row.original)}</ExpandedRow>
                  </>
                )}
              </Fragment>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableFooter
              colSpan={visibleColumns.length}
              onClick={handleFetchMore}
            >
              Find more songs...
            </TableFooter>
          </tr>
        </tfoot>
      </Table>
    </TableContainer>
  );
};

export default SongsTable;
