import React, { useMemo, useState } from "react";
// Styles
import { Wrapper, OtherInfo } from "./StaticInfoTable.styles";
import { usePagination, useTable } from "react-table";
import Pagination from "../Pagination";
import { UserIcon } from "../Icons/Icons";
const StaticInfoTable = () => {
  const [data, setData] = useState([
    {
      name: "Valid turnover",
      today: {
        count: 1,
        user:1,
        hashtag:11,
      },
      yesterday: {
        count: 0,
      },
      thisWeek: {
        count: 0,
      },
      lastWeek: {
        count: 0,
      },
    },
    {
      name: "Member Win/Loss",
      today: {
        count: 0,
      },
      yesterday: {
        count: 0,
      },
      thisWeek: {
        count: 0,
      },
      lastWeek: {
        count: 0,
      },
    },
    {
      name: "New player",
      today: {
        count: 0,
      },
      yesterday: {
        count: 0,
      },
      thisWeek: {
        count: 0,
      },
      lastWeek: {
        count: 0,
      },
    },
    {
      name: "Sign up",
      today: {
        count: 0,
      },
      yesterday: {
        count: 0,
      },
      thisWeek: {
        count: 0,
      },
      lastWeek: {
        count: 0,
      },
    },
    {
      name: "Deposit",
      today: {
        count: 0,
      },
      yesterday: {
        count: 0,
      },
      thisWeek: {
        count: 0,
      },
      lastWeek: {
        count: 0,
      },
    },
    {
      name: "First deposit",
      today: {
        count: 0,
      },
      yesterday: {
        count: 0,
      },
      thisWeek: {
        count: 0,
      },
      lastWeek: {
        count: 0,
      },
    },
    {
      name: "Withdraw",
      today: {
        count: 0,
      },
      yesterday: {
        count: 0,
      },
      thisWeek: {
        count: 0,
      },
      lastWeek: {
        count: 0,
      },
    },
  ]);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Today",
        accessor: "today",
        Cell: ({value}) => {
        
        return (
          <div>
            <p>{value?.count}</p>
            {value?.user && value?.hashtag && (
              <OtherInfo>
                <p>
                  <UserIcon /> {value?.user}
                </p>
                <p># {value?.hashtag}</p>
              </OtherInfo>
            )}
          </div>
        );
      },
      },
      {
        Header: "Yesterday",
        accessor: "yesterday.count",
      },
      {
        Header: "This week",
        accessor: "thisWeek.count",
      },
      {
        Header: "Last week",
        accessor: "lastWeek.count",
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
      <h2>Statistic information</h2>
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
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </>
        ) : (
          <tbody>
            <tr>
              <td  style={{ textAlign: "center" }}>
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
};

export default StaticInfoTable;
