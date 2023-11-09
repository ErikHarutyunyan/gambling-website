import React, { useCallback, useMemo, useState } from "react";
// Styles
import { InputDate, Wrapper } from "./OutstandingTable.styles";
import { formatDateMDY } from "../../utils/utils";

import { usePagination, useTable } from "react-table";
import Pagination from "../Pagination/Pagination";
const OutstandingTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Product",
        accessor: "name",
      },
      {
        Header: "Bet count",
        accessor: "betCount",
      },
      {
        Header: "Valid turnover",
        accessor: "validTurnover",
      },
    ],
    []
  );
  const [data, setData] = useState([]);
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
  const filterDate = useCallback(
    ({ date = "", date2 = "" }) => {
      const compareDates = ({ d1, d2, d3 }) => {
        let date1 = d1 ? new Date(d1).getTime() : -8640000000000000;
        let date2 = new Date(d2).getTime();
        let date3 = d3 ? new Date(d3).getTime() : 8640000000000000;

        if (date1 <= date2 && date3 >= date2) {
          return true;
        }
      };

      const newDate = data.filter((item) =>
        compareDates({
          d1: date,
          d2: formatDateMDY(item.dob.date),
          d3: date2,
        })
      );
      setData(newDate);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dateIn, dateOut, data]
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

  // Render the UI for your table
  return (
    <Wrapper>
      <InputDate>
        <input
          type="date"
          name=""
          id=""
          onChange={(e) => setDateIn(e.target.value)}
        />
        <input
          type="date"
          name=""
          id=""
          onChange={(e) => setDateOut(e.target.value)}
        />
      </InputDate>
      <p>User: john.wick</p>
      <div style={{overflowX:"auto"}}>

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
              <td colspan="6" style={{ textAlign: "center" }}>
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
      </div>
    </Wrapper>
  );
};

export default OutstandingTable;
