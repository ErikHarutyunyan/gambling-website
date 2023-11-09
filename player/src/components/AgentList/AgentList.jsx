import React, { useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
// Styles
import { Wrapper } from "./AgentList.styles";

import Title from "../Title/Title";
import { useState } from "react";
import { useMemo } from "react";
import { usePagination, useTable } from "react-table";
import Pagination from "../Pagination/Pagination";
import { MobileIcon } from "../Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { getUsersByRole } from "../../app/features/user/userActions";
import { roles } from "../../utils/utils";
import { resetAgent, selectUser } from "../../app/features/user/userSlice";
import Spinner from "../Spinner/Spinner";
import { CALL_AGENT } from "../../router/route-path";

const AdminInfo = () => {

  return (
    <div>
      <Title title={"Admin"} textAlign={"center"} />
      <div>
        <table role="table">
          <thead>
            <tr role="row">
              <th colSpan={1} role="columnheader">
                Admin Name
              </th>
              <th colSpan={1} role="columnheader">
                Mobile Number
              </th>
              <th colSpan={1} role="columnheader">
                Complain
              </th>
            </tr>
          </thead>
          <tbody>
            <tr role="row">
              <td role="cell">Admin</td>
              <td role="cell">8801752720544</td>
              <td role="cell">
                <link
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=13213215646"
                  target="_blank"
                />
                <MobileIcon />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const YourManager = ({user}) => {
  return (
  <div>
    <Title title={"Your Manager"} textAlign={"center"} />
          <div>
            <table role="table">
              <thead>
                <tr role="row">
                  <th colSpan={1} role="columnheader">
                    Agent Name
                  </th>
                  <th colSpan={1} role="columnheader">
                    Mobile Number
                  </th>
                  <th colSpan={1} role="columnheader">
                    Complain
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr role="row">
                  <td role="cell">{user?.parent?.user_name}</td>
                  <td role="cell">{user?.parent?.phone_number}</td>
                  <td role="cell">
                    <link
                      rel="noopener noreferrer"
                      href="https://api.whatsapp.com/send?phone=13213215646"
                      target="_blank"
                    />
                    <MobileIcon />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  

      )
}

const AgentList = () => {
  const dispatch = useDispatch();
  const { userInfo, agents,loading } = useSelector(selectUser);
  const location = useLocation()
  

  const [data, setData] = useState([
    {
      user_name: "Admin",
      phone_number: "+8801752720544",
    },
  ]);
  const columns = useMemo(
    () => [
      {
        Header: "Agent Name",
        accessor: "user_name",
      },
      {
        Header: "Mobile Number",
        accessor: "phone_number",
      },
      {
        Header: "Complain",
        accessor: "whats",
        Cell: (props) => {
          const {
            row: { original: item },
          } = props;

          return (
            <Link
              to={`https://api.whatsapp.com/send?phone=${parseInt(
                item.phone_number
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MobileIcon />
            </Link>
          );
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
  useEffect(() => {
    
    dispatch(getUsersByRole(roles.agent));
    return () => dispatch(resetAgent())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    
    if (agents.length) {
      
      setData(agents);
    }
  }, [agents]);
  if(loading) {
    return <Spinner />
  }

  return (
    <>
      <Wrapper>
        <div>
          {location.pathname === CALL_AGENT ? <AdminInfo />: <YourManager user={userInfo?.user}/>}
        </div> 
        <Title title={"Agents List"} textAlign={"center"} />

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
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
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
      </Wrapper>
    </>
  );
};

export default AgentList;
