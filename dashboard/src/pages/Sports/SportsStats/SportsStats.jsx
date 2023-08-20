import React, { useState, useMemo, useCallback } from "react";
// Styles
import { HeadItem, Wrapper, Container, FooterTable, TableWrap } from "./SportsStats.styles";
import Title from "../../../components/Title";
import CalendarDay from "../../../components/CalendarDay/CalendarDay";
import CardInfo from "../../../components/CardInfo/CardInfo";

import { usePagination, useTable } from "react-table";
import { useNavigate } from "react-router-dom";
import { formatDateMDY } from "../../../utils/utils";
import Pagination from "../../../components/Pagination/Pagination";

const SportsStats = () => {
  const navigation = useNavigate();
  const [data] = useState([
  ]);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Match odds: WON | LOST",
        accessor: "match",
      },
      {
        Header: "Fancy: WON | LOST",
        accessor: "fancy",
      },
      {
        Header: "Bookmaker: WON | LOST",
        accessor: "bookmaker",
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
        <Title title={"Stats"} />
        <CalendarDay />
      </HeadItem>
      <Container>
        <CardInfo title={"Total bets"} count={0} />
        <CardInfo title={"Player exposure"} count={0} />
        <CardInfo title={"Match odds GGR"} count={0} />
        <CardInfo title={"Fancy GGR"} count={0} />
      </Container>
      <TableWrap>
        <HeadItem>
          <Title title={"Player Stats"} fontSize={"24px"} />
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
          <FooterTable>
            <div className="total">Total</div>
            <div className="price">$0</div>
          </FooterTable>
          <Pagination
            currentPage={pageIndex + 1}
            totalPages={pageOptions.length}
            onPageChange={gotoPage}
          />
        </div>
      </TableWrap>
    </Wrapper>
  );
};

export default SportsStats;
