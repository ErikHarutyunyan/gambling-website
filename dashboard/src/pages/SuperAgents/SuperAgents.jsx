import React, { useCallback, useMemo } from 'react'
// Styles
import {
  ActionWrap,
  BtnWrap,
  FooterTable,
  Wrapper,
  WalletWrap,
  FormWrap,
} from "./SuperAgents.styles";
import Title from '../../components/Title'
import Pagination from '../../components/Pagination/Pagination';
import { usePagination, useTable } from 'react-table';
import { formatDateMDY, roleMemo, roles } from '../../utils/utils';
import { Link, useNavigate } from 'react-router-dom';
// Images
import balanceImg from "../../assets/images/balance.png";
import viewImg from "../../assets/images/view.png";
import editImg from "../../assets/images/edit.png";

import {
  CREATE_PERSON,
  VIEW_PERSON,
  WALLET_PERSON,
  EDIT_PERSON,
} from "../../router/route-path";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setError } from '../../app/features/user/userSlice';
import Spinner from '../../components/Spinner/Spinner';
import { getUsersByRole } from '../../app/features/user/userActions';
import { useTransition } from 'react';
import { useState } from 'react';
const SuperAgents = () => {
  const navigation = useNavigate()
  const {superAgents,loading} = useSelector(selectUser)
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(superAgents);
  const [filterUser, setFilterUser] = useState([])
  
  const dispatch = useDispatch()

  const columns = useMemo(
    () => [
      {
        Header: "Full name",
        accessor: "full_name",
      },
      {
        Header: "Username",
        accessor: "user_name",
      },
      {
        Header: "Wallets",
        accessor: "balance",
        Cell: ({ value }) => {
          return (
            <WalletWrap>
              <p>
                <span>Balance</span>
                <span>{value}</span>
              </p>
            </WalletWrap>
          );
        },
      },

      {
        Header: "Agent amount",
        accessor: "attached_users",
        Cell: (props) => {
          const { value } = props;
          return <Link to={""}>{value?.length}</Link>;
        },
      },
      {
        Header: "Created",
        accessor: "date_time",
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: (props) => {
          const {
            row: { original: item },
          } = props;
          
        
          return (
            <ActionWrap>
              <div
                onClick={() =>
                  handleNavigation(`${WALLET_PERSON}/${item.id}`, item)
                }
              >
                <img src={balanceImg} alt={"balance"} />
              </div>
              <div
                onClick={() =>
                  handleNavigation(`${EDIT_PERSON}/${item.id}`, roleMemo)
                }
              >
                <img src={editImg} alt={"edit"} />
              </div>
              <div
                onClick={() =>
                  handleNavigation(`${VIEW_PERSON}/${item.id}`, roleMemo)
                }
              >
                <img src={viewImg} alt={"view"} />
              </div>
            </ActionWrap>
          );
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filtered]
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
      data: filtered,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );
  const handleNavigation = useCallback(
    (path,state) => {
      navigation(path,{state})
    },
   
   // eslint-disable-next-line react-hooks/exhaustive-deps
   []
  )

  useEffect(()=> {
    dispatch(getUsersByRole(roles.super_agent));
    return () => dispatch(setError(null));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
   useEffect(() => {
     setFiltered(superAgents);
     const filterParent = superAgents.map(user => {
      return {value:user?.parent?.full_name, id:user?.parent.id}
     })
     setFilterUser(filterParent);
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [superAgents]);

const handleChangeSearch = ({ target: { value } }) => {
  setSearchTerm(value);
  
  startTransition(() => {
    setFiltered(
      superAgents.filter(
        (item) =>
          item.full_name.toLowerCase().includes(value.toLowerCase()) ||
          item.user_name.toLowerCase().includes(value.toLowerCase())
      )
    );
  });
};

  if(loading) {
    return <Spinner />
  }


  return (
    <Wrapper>
      <Title title={"Super agents"} />
      <FormWrap>
        <form action="">
          <div>
            <label>Search</label>
            <input
              onChange={handleChangeSearch}
              value={searchTerm}
              type="text"
              placeholder="Full Name, Username"
            />
          </div>
        </form>
        <BtnWrap>
          <button
            onClick={() =>
              handleNavigation(
                `${CREATE_PERSON}/${roleMemo()?.role}`,
                roleMemo(roles.super_agent)
              )
            }
          >
            Create Super Agent
          </button>
        </BtnWrap>
      </FormWrap>
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

          {filtered.length ? (
            <>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        if (cell.column.Header === "Created") {
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
          ) : isPending ? (
            <tbody>
              <tr>
                <td colSpan="9" style={{ textAlign: "center" }}>
                  Loading...
                </td>
              </tr>
            </tbody>
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
          <div className="price">{superAgents.length} Super Agents</div>
        </FooterTable>
        <Pagination
          currentPage={pageIndex + 1}
          totalPages={pageOptions.length}
          onPageChange={gotoPage}
        />
      </div>
    </Wrapper>
  );
}

export default SuperAgents