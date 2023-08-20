import React, { useMemo, useState } from 'react'
// Styles
import {Wrapper} from "./TopWinPlayerTable.styles"
import Pagination from '../Pagination';
import { usePagination, useTable } from 'react-table';
const TopWinPlayerTable = () => {
  const [data, setData] = useState([]);
  const columns = useMemo(
    () => [
      {
        Header: "User ID",
        accessor: "name",
      },
      {
        Header: "Win/Lose",
        accessor: "betCount",
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    gotoPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );
  return (
    <Wrapper>
      <h2>Top Win Player</h2>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        {data.length ? (
          <>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </>
        ) : (
          <tbody>
            <tr>
              <td style={{ textAlign: "center" }}>
                No data found
              </td>
            </tr>
          </tbody>
        )}
      </table>
      <Pagination
        currentPage={pageIndex + 1}
        totalPages={pageOptions.length}
        onPageChange={gotoPage}
      />
    </Wrapper>
  );
}
export default TopWinPlayerTable