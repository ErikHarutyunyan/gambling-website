import React from "react";
// Styles
import {
  Container,
  ErrorWrap,
  GameWrap,
  NavWrap,
  Wrapper,
} from "./SingleGame.styles";
import { useDispatch, useSelector } from "react-redux";
import { resetErrorGame, selectGame } from "../../app/features/game/gameSlice";
import Spinner from "../../components/Spinner/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getGameDate } from "../../app/features/game/gameActions";
import Subheading from "../../components/Subheading";
const SingleGame = () => {
  const { id } = useParams();
  const { gameDate, loading, error } = useSelector(selectGame);
  const navigate = useNavigate()

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGameDate(id));
    return () => dispatch(resetErrorGame());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if ((loading || !gameDate) && !error) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <Subheading />
      <Container>
        <NavWrap>
          <div onClick={() => navigate(-1)}>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1={19} y1={12} x2={5} y2={12} />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </div>
        </NavWrap>
        {!error ? (
          <GameWrap>
            <iframe
              src={`${gameDate?.game?.response}&gamesession_id=${gameDate?.game.gamesession_id}&sessionid=${gameDate?.game.sessionid}`}
              title="myFrame"
            >
              <p>Sometime Wrong</p>
            </iframe>
          </GameWrap>
        ) : (
          <ErrorWrap>{error}</ErrorWrap>
        )}
      </Container>
    </Wrapper>
  );
};

export default SingleGame;
