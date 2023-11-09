import React from "react";
// Styles
import {
  Container,
  PaginationWrap,
  TypeWrap,
  Wrapper,
} from "./GameLists.styles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectGame } from "../../app/features/game/gameSlice";
import Subheading from "../../components/Subheading";
import { useState } from "react";
import { useEffect } from "react";

import GamesItem from "../../components/GamesItem/GamesItem";
import { ArrowLeftIcon, ArrowRightIcon } from "../../components/Icons/Icons";
import { getGameFiltered } from "../../app/features/game/gameActions";
import { detectMob } from "../../utils/utils";
import { selectUser, setLoginModal } from "../../app/features/user/userSlice";
import Spinner from "../../components/Spinner/Spinner";
import { GAME } from "../../router/route-path";

const  useQuery = () => {
  const { search } = useLocation();
 
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const GameLists = () => {
  const { type } = useParams();
  let query = useQuery();
  const navigate = useNavigate()
  const { gameTypes, gameFiltered, loading, error } = useSelector(selectGame);
  const [currentType, setCurrentType] = useState("");
  console.log('currentType :', currentType);
  const { userInfo } = useSelector(selectUser);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    const mobile = detectMob();
    dispatch(getGameFiltered({ mobile, type: currentType, page }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentType, page]);
  const handleNavigate = () => {
    dispatch(setLoginModal(true));
  };
  useEffect(() => {
    
    let param = query.get("type");
    let paramIndex = gameTypes[type].indexOf(param); 
    paramIndex = paramIndex !== -1 ? paramIndex : 0
    console.log("type query", gameTypes[type][paramIndex]);
    setCurrentType(gameTypes[type][paramIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
     let param = query.get("type");
     let paramIndex = gameTypes[type].indexOf(param);
     paramIndex = paramIndex !== -1 ? paramIndex : 0;

    setCurrentType(gameTypes[type][paramIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);
  // useEffect(() => {
  //   return () => {
  //     // dispatch(resetGameFilter())
  //     setCurrentType("");
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <Wrapper>
      <Subheading />
      {/* <Background  /> */}
      {(loading || !gameFiltered) && !error ? (
        <Spinner />
      ) : (
        <>
          <Container>
            <TypeWrap>
              {gameTypes[type].map((item, id) => {
                return (
                  <div
                    key={id}
                    className={item === currentType ? "active" : null}
                    onClick={() => {
                      setCurrentType(item);
                      setPage(1);
                      navigate(`${GAME}${type}?type=${item}`, { replace: true });
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </TypeWrap>
            <GamesItem
              title={""}
              nameClass="square"
              games={gameFiltered.games?.docs}
              user={userInfo?.token ? true : false}
              handleNavigate={handleNavigate}
            />
          </Container>
          <PaginationWrap>
            <div className="pagination">
              <button
                onClick={() => {
                  const newPage =
                    page - 1 <= 0 ? gameFiltered.games?.pages : page - 1;
                  setPage(newPage);
                }}
              >
                <ArrowLeftIcon />
              </button>
              <div>
                <p>{page}</p>
                <p>/</p>
                <p>{gameFiltered.games?.pages}</p>
              </div>
              <button
                onClick={() => {
                  const newPage =
                    page + 1 <= gameFiltered.games?.pages ? page + 1 : 1;
                  setPage(newPage);
                }}
              >
                <ArrowRightIcon />
              </button>
            </div>
          </PaginationWrap>
        </>
      )}
    </Wrapper>
  );
};

export default GameLists;
