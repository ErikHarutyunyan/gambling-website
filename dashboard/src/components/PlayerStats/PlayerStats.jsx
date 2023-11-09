import React, { useMemo, useState } from 'react'
// Styles
import {FormWrap, HeadItem, Wrapper} from "./PlayerStats.styles"
import { usePagination, useTable } from 'react-table';
import Pagination from '../Pagination/Pagination';
import { formatDateMDY } from '../../utils/utils';
import Title from '../Title';
import CalendarDay from '../CalendarDay/CalendarDay';
const PlayerStats = () => {

  const [data] = useState([]);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
     {
        Header: "Bet count",
        accessor: "bet-count",
      },
      {
        Header: "Won count",
        accessor: "won-count",
      },
      {
        Header: "Bet amount",
        accessor: "bet-amount",
      },
      { 
        Header: "Won amount",
        accessor: "won-amount",
      },
      {
        Header: "Won amount rate",
        accessor: "won-amount rate",
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
        <div className='filter'>
          <Title title={"Player Stats"} fontSize={"24px"} />
          <FormWrap>
            <form action="">
              <div className="radio-wrap">
                <div>
                  <input
                    type="radio"
                    id="all-agents"
                    name="All agents"
                    // checked={!myUsers}
                    // onChange={() => setMyUsers(false)}
                  />
                  <label for="all-agents">Top 5 players</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="my-agents"
                    name="My agents"
                    // checked={myUsers}
                    // onChange={() => setMyUsers(true)}
                  />
                  <label for="my-agents">Top 5 winners</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="my-agents"
                    name="My agents"
                    // checked={myUsers}
                    // onChange={() => setMyUsers(true)}
                  />
                  <label for="my-agents">Top 5 loosers</label>
                </div>
              </div>
            </form>
          </FormWrap>
        </div>
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
}

export default PlayerStats