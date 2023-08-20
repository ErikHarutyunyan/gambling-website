import React, { useCallback, useMemo, useState } from "react";
// Styles
import { FooterTable, Wrapper, StatusWrap, Actions } from "./WithdrawRequests.styles";
import Pagination from "../../../components/Pagination/Pagination";
import { usePagination, useTable } from "react-table";
import { formatDateMDY } from "../../../utils/utils";
import Title from "../../../components/Title";
import closeImg from "../../../assets/images/close.png";
import doneImg from "../../../assets/images/done.png";
import FilterRequestsWithdraw from "../../../components/FilterRequestsWithdraw";
const WithdrawRequests = () => {
  const [data, setData] = useState([
    {
      username: "Username",
      mobile: "Mobile",
      mode: "Mode",
      payout_mode: "Payout mode",
      amount: "$200",
      status: "Approved",
      created: "12 May 2023",
    },
    {
      username: "Username",
      mobile: "Mobile",
      mode: "Mode",
      payout_mode: "Payout mode",
      amount: "$200",
      status: "Pending",
      created: "12 May 2023",
    },
    {
      username: "Username",
      mobile: "Mobile",
      mode: "Mode",
      payout_mode: "Payout mode",
      amount: "$200",
      status: "Canceled",
      created: "12 May 2023",
    },
    {
      username: "Username",
      mobile: "Mobile",
      mode: "Mode",
      payout_mode: "Payout mode",
      amount: "$200",
      status: "Declined",
      created: "12 May 2023",
    },
  ]);

  const colorStatus = useCallback((status) => {
    
    if (status === "Approved") {
      return "#009B22";
    }
    if (status === "Pending") {
      return "#BDAA00";
    }
    if (status === "Canceled") {
      return "#BD4F00";
    }
    if (status === "Declined") {
      return "#BD0000";
    }
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Mobile",
        accessor: "mobile",
      },
      {
        Header: "Mode",
        accessor: "mode",
      },

      {
        Header: "Payout mode",
        accessor: "payout_mode",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props) => {
          const {
            row: { original: item },
          } = props;
          const color = colorStatus(item.status);
          return (
            <StatusWrap color={color}>
              <p>{item.status}</p>
            </StatusWrap>
          );
        },
      },
      {
        Header: "Created",
        accessor: "created",
      },
      {
        Header: "Actions",
        Cell: (props) => {
          const {
            row: { original: item },
          } = props;
          if (item.status === "Pending") {
            return (
              <Actions>
                <div>
                  <img src={closeImg} alt="close" /> Decline
                </div>
                <div>
                  <img src={doneImg} alt="done" /> Approve
                </div>
              </Actions>
            );
          }
          return null;
        },
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
      <Title title={"Withdraw Requests"} />
      <FilterRequestsWithdraw />
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

export default WithdrawRequests;
