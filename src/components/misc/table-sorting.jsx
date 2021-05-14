/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSortBy, useTable } from 'react-table';
import styled from 'styled-components';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 20px 80px;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const TableSorting = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column} {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr key={row} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td key={cell} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
};

export default TableSorting;
