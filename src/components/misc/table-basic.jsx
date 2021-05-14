import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;
    tr {
      ${'' /* :first-child {
        td {
          border-top: 1px solid black;
        }
      } */}

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

    tfoot {
      tr:first-child {
        td {
          border-top: 2px solid black;
        }
      }
      font-weight: bolder;
    }
  }
`;

const TableBasic = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column} {...column.getHeaderProps()}>
                  {column.render('Header')}
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

export default TableBasic;
