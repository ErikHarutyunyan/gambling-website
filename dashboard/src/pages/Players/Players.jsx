import React, { useMemo, useCallback, useEffect } from "react";
// Styles
import {
  Wrapper,
  FormWrap,
  BtnWrap,
  ActionWrap,
  FooterTable,
  StatusWrap,
  WalletWrap,
} from "./Players.styles";
import Title from "../../components/Title";
import { useNavigate } from "react-router-dom";
import {
  CREATE_PERSON,
  EDIT_PERSON,
  VIEW_PERSON,
  WALLET_PERSON,
} from "../../router/route-path";
import { usePagination, useTable } from "react-table";
import { formatDateMDY, roleMemo, roles } from "../../utils/utils";
import Pagination from "../../components/Pagination/Pagination";
// Images
import balanceImg from "../../assets/images/balance.png";
import editImg from "../../assets/images/edit.png";
import viewImg from "../../assets/images/view.png";
import SelectCustom from "../../components/SelectCustom";
import { useDispatch, useSelector } from "react-redux";
import { getUsersByRole } from "../../app/features/user/userActions";
import Spinner from "../../components/Spinner/Spinner";
import { selectUser, setError } from "../../app/features/user/userSlice";
import { useTransition } from "react";
import { useState } from "react";

const ActionsPerson = ({
  handleNavigation,
  WALLET_PERSON,
  item,
  balanceImg,
  EDIT_PERSON,
  roleMemo,
  editImg,
}) => {
  return (
    <ActionWrap>
      <div
        onClick={() => handleNavigation(`${WALLET_PERSON}/${item.id}`, item)}
      >
        <img src={balanceImg} alt={"balance"} />
      </div>
      <div
        onClick={() => handleNavigation(`${EDIT_PERSON}/${item.id}`, roleMemo)}
      >
        <img src={editImg} alt={"edit"} />
      </div>
      <div
        onClick={() => handleNavigation(`${VIEW_PERSON}/${item.id}`, roleMemo)}
      >
        <img src={viewImg} alt={"view"} />
      </div>
    </ActionWrap>
  );
};

const Players = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { loading, players, userInfo } = useSelector(selectUser);
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(players);
  const [filterUser, setFilterUser] = useState([]);
  const [myUsers, setMyUsers] = useState(false);

  const handleNavigation = useCallback(
    (path, state) => {
      navigation(path, { state });
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
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
        Header: "Agent",
        accessor: "parent.full_name",
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
        Header: "Registered",
        accessor: "date_time",
      },
      {
        Header: "Actions",
        accessor: "action",
        Cell: (props) => {
          const {
            row: { original: item },
          } = props;
          if (roleMemo()?.role === roles.admin) {
            console.log("wdasds",item);
            return (
              <div
                onClick={() =>
                  handleNavigation(`${VIEW_PERSON}/${item.id}`, item)
                }
              >
                <img src={viewImg} alt={"view"} />
              </div>
            );
          }
          return (
            <ActionsPerson
              handleNavigation={handleNavigation}
              WALLET_PERSON={WALLET_PERSON}
              item={item}
              balanceImg={balanceImg}
              EDIT_PERSON={EDIT_PERSON}
              roleMemo={roleMemo}
              editImg={editImg}
            />
          );
        },
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
      data: filtered,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const colorStatus = useCallback((status) => {
    if (status?.toLowerCase() === "active") {
      return "#009B22";
    }
    if (status?.toLowerCase() === "pending") {
      return "#BDAA00";
    }
  }, []);

  useEffect(() => {
    dispatch(getUsersByRole(roles.player));
    return () => dispatch(setError(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setFiltered(players);
    const filterParent = players.map((user) => {
      return { value: user?.parent?.full_name, id: user?.parent.id };
    });
    setFilterUser([{ value: "Filter by Agent", id: 0 }, ...filterParent]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [players]);

  const handleChangeSearch = ({ target: { value } }) => {
    setSearchTerm(value);

    startTransition(() => {
      setFiltered(
        players.filter(
          (item) =>
            item.full_name.toLowerCase().includes(value.toLowerCase()) ||
            item.user_name.toLowerCase().includes(value.toLowerCase())
        )
      );
    });
  };
  const handleSelectFilter = (id) => {
    if (id === 0) {
      startTransition(() => {
        setFiltered(players);
      });
    } else {
      startTransition(() => {
        setFiltered(players.filter((item) => item.parent.id === id));
      });
    }
  };
  useEffect(() => {
    if (myUsers) {


      startTransition(() => {
        setFiltered(
          players.filter((item) => item.parent.id === userInfo.user.id)
        );
      });
    } else {
      startTransition(() => {
        setFiltered(players);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myUsers]);
  if (loading) {
    return <Spinner />;
  }
  return (
    <Wrapper>
      <Title title={"Players"} />
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
          <div className="radio-wrap">
            <div>
              <input
                type="radio"
                id="all-agents"
                name="All agents"
                checked={!myUsers}
                onChange={() => setMyUsers(false)}
              />
              <label for="all-agents">All players</label>
            </div>
            <div>
              <input
                type="radio"
                id="my-agents"
                name="My agents"
                checked={myUsers}
                onChange={() => setMyUsers(true)}
              />
              <label for="my-agents">My players</label>
            </div>
          </div>
        </form>
        <BtnWrap>
          <button
            onClick={() =>
              handleNavigation(
                `${CREATE_PERSON}/${roleMemo()?.role}`,
                roleMemo(roles.player)
              )
            }
          >
            Created Player
          </button>

          <SelectCustom
            width={"400px"}
            date={filterUser}
            onCustom={handleSelectFilter}
            activeData={"Filter by Agent"}
            disabled={myUsers}
          />
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
                        if (cell.column.Header === "Registered") {
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
          <div className="price">0 Players</div>
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

export default Players;
