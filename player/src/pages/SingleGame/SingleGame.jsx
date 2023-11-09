import React from "react";
// Styles
import {
  Container,
  ErrorWrap,
  GameWrap,
  Wrapper,
} from "./SingleGame.styles";
import { useDispatch, useSelector } from "react-redux";
import { resetErrorGame, selectGame } from "../../app/features/game/gameSlice";
import Spinner from "../../components/Spinner/Spinner";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getGameDate } from "../../app/features/game/gameActions";
import Subheading from "../../components/Subheading";
import { selectUser } from "../../app/features/user/userSlice";
import { changeBallance } from "../../app/features/user/userActions";
import Background from "../../components/Background/Background";
const SingleGame = () => {
  const { id } = useParams();
  const { gameDate, loading, error } = useSelector(selectGame);
  console.log('gameDate :', gameDate);
  const {userInfo} = useSelector(selectUser)
  // const navigate = useNavigate()

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGameDate(id));
    return () => {
      dispatch(resetErrorGame())
      dispatch(changeBallance(userInfo?.user?.id));

    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if ((loading || !gameDate) && !error) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <Subheading />
      {/* <Background /> */}
      <Container>
        {!error ? (
          <GameWrap>
            <iframe
              src={`${gameDate?.game?.response}&gamesession_id=${gameDate?.game.gamesession_id}&sessionid=${gameDate?.game.sessionid}`}
              title="iframe"
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
