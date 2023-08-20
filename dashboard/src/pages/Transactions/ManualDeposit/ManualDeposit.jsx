import React, { useMemo, useState } from "react";
// Styles
import { FooterTable, Wrapper } from "./ManualDeposit.styles";
import Pagination from "../../../components/Pagination/Pagination";
import { usePagination, useTable } from "react-table";
import { formatDateMDY } from "../../../utils/utils";
import Title from "../../../components/Title";
import FilterManualDeposit from "../../../components/FilterManualDeposit";
const ManualDeposit = () => {
  const [data] = useState([]);
  const columns = useMemo(
    () => [
      {
        Header: "Player",
        accessor: "player",
      },
      {
        Header: "TXN by",
        accessor: "validTurnover",
      },

      {
        Header: "Cash",
        accessor: "payin_mode",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      // {
      //   Header: "Commission",
      //   accessor: "commission",
      //   Footer: "Grand total",
      // },
      // {
      //   Header: "Profit/Loss",
      //   accessor: "profitLoss",
      //   Footer: "$2222",
      // },
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
      <Title title={"Manual Deposit"} />
      <FilterManualDeposit />
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
          {/* <tfoot>
            {footerGroups.map((group) => (
              <tr {...group.getFooterGroupProps()}>
                {group.headers.map((column) => (
                  <td {...column.getFooterProps()}>{column.render("Footer")}</td>
                ))}
              </tr>
            ))}
          </tfoot> */}
        </table>
        <FooterTable>
          <div className="total">Total</div>
          <div className="price">$2222</div>
        </FooterTable>
        <Pagination
          currentPage={pageIndex + 1}
          totalPages={pageOptions.length}
          onPageChange={gotoPage}
        />
      </div>
    </Wrapper>
  );
};

export default ManualDeposit;
