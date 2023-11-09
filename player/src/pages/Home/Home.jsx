import React from "react";

import Subheading from "../../components/Subheading";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import { Container, PopularSport, PopularSportItems, Wrapper } from "./Home.styles";
import GamesItem from "../../components/GamesItem/GamesItem";
import { partnersData } from "./gameData";
import Partners from "../../components/Partners/Partners";
import FooterHome from "../../components/FooterHome/FooterHome";
import { useDispatch, useSelector } from "react-redux";
import { selectGame } from "../../app/features/game/gameSlice";
import Spinner from "../../components/Spinner/Spinner";
import { useEffect } from "react";
import {
  getCasinoList,
  getGameListPopular,
  getGameListPopularSports,
  getOtherGameList,
} from "../../app/features/game/gameActions";
import { selectUser, setLoginModal } from "../../app/features/user/userSlice";
import { detectMob } from "../../utils/utils";

import casinoBanner from "../../assets/images/casinoBanner.webp";

import { Link } from "react-router-dom";
import { GAME } from "../../router/route-path";

const Home = () => {
  const {
    gamePopularList,
    casinoList,
    otherGameList,
    getPopularSports,
    loading,
  } = useSelector(selectGame);
  const { userInfo } = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const mobile = detectMob();
    dispatch(getGameListPopular({ page: 4, size: 20, mobile }));
    dispatch(getGameListPopularSports({ page: 60, size: 20, mobile }));
    dispatch(getCasinoList({ page: 5, size: 5, mobile }));
    dispatch(getOtherGameList({ page: 7, size: 20, mobile }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (
    loading ||
    !gamePopularList ||
    !casinoList ||
    !otherGameList ||
    !getPopularSports
  ) {
    return <Spinner />;
  }
  const handleNavigate = () => {
    dispatch(setLoginModal(true));
  };
  return (
    <Wrapper>
      <Subheading />
      <HeroBanner />

      
      <Container>
        <PopularSport>
          <h2>Popular Sport</h2>
          <PopularSportItems>
            <div
              className="sportbook"
              style={{ backgroundImage: `url(${casinoBanner})` }}
            >
              <Link to={`${GAME}sports?type=sportsbook`}>SPORTSBOOK</Link>
            </div>
            <div
              className="virtualsports"
              style={{ backgroundImage: `url(${casinoBanner})` }}
            >
              <Link to={`${GAME}sports?type=virtual-sports`}>
                VIRTUAL SPORTS
              </Link>
            </div>
            <div
              className="livebet"
              style={{ backgroundImage: `url(${casinoBanner})` }}
            >
              <Link to={`${GAME}casino?type=livecasino`}>LIVE BET</Link>
            </div>
          </PopularSportItems>
        </PopularSport>
        <GamesItem
          title={"Popular Games"}
          nameClass="square"
          games={gamePopularList.games?.docs}
          user={userInfo?.token ? true : false}
          handleNavigate={handleNavigate}
        />
        <GamesItem
          nameClass="portrait"
          title={"Casino"}
          games={casinoList.games?.docs}
          user={userInfo?.token ? true : false}
          handleNavigate={handleNavigate}
        />
        <GamesItem
          nameClass="square"
          title={"Other Games"}
          games={otherGameList.games?.docs}
          user={userInfo?.token ? true : false}
          handleNavigate={handleNavigate}
        />
        <Partners title={"Our Game Partners"} partners={partnersData} />
      </Container>

      <FooterHome />
      {/* <Background backImg={backImg} /> */}
      {/* <Background backImg={backImg}> */}

      {/* </Background> */}
    </Wrapper>
  );
};

export default Home;
