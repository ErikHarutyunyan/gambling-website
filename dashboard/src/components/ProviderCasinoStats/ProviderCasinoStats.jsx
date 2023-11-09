import React, { useMemo, useState } from "react";
// Styles
import {HeadItem, Wrapper } from "./ProviderCasinoStats.styles";
import { usePagination, useTable } from "react-table";
import Pagination from "../Pagination/Pagination";
import { formatDateMDY } from "../../utils/utils";
import Title from "../Title";
import CalendarDay from "../CalendarDay/CalendarDay";
const ProviderCasinoStats = () => {
  const [data] = useState([]);
  const columns = useMemo(
    () => [
      {
        Header: "Provider",
        accessor: "provider",
      },
      {
        Header: "Casino",
        accessor: "casino",
      },
      {
        Header: "Total bet count",
        accessor: "total-bet-count",
      },
      {
        Header: "Total won count",
        accessor: "total-won-count",
      },
      {
        Header: "Total bet amount",
        accessor: "total-bet-amount",
      },
      {
        Header: "Won bet | amount rate",
        accessor: "won-rate",
      },
      {
        Header: "GGR",
        accessor: "ggr",
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <HeadItem>
        <Title title={"Provider casino stats"} fontSize={"24px"} />
        <CalendarDay />
      </HeadItem>
      <div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
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
                        if (cell.column.Header === "Date") {
                          return (
                            <td {...cell.getCellProps()}>
                              {formatDateMDY(cell.value)}
                            </td>
                          );
                        } else {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </>
          ) : (
            <tbody>
              <tr>
                <td colSpan="9" style={{ textAlign: "center" }}>
                  No data found
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
      <Pagination
        currentPage={pageIndex + 1}
        totalPages={pageOptions.length}
        onPageChange={gotoPage}
      />
    </Wrapper>
  );
};

export default ProviderCasinoStats;
