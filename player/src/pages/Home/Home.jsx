import React from 'react'

import Subheading from '../../components/Subheading';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import { Container, Wrapper } from './Home.styles';
import GamesItem from '../../components/GamesItem/GamesItem';
import {  partnersData } from './gameData';
import Partners from '../../components/Partners/Partners';
import FooterHome from '../../components/FooterHome/FooterHome';
import { useDispatch, useSelector } from 'react-redux';
import { selectGame } from '../../app/features/game/gameSlice';
import Spinner from '../../components/Spinner/Spinner';
import { useEffect } from 'react';
import { getCasinoList,  getGameListPopular, getOtherGameList } from '../../app/features/game/gameActions';
import { selectUser, setLoginModal } from '../../app/features/user/userSlice';

const Home = () => {

  const { gamePopularList,casinoList,otherGameList, loading } = useSelector(selectGame);
  const {userInfo} = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGameListPopular({page:10, size:18}));
    dispatch(getCasinoList({ page: 5, size: 5 }));
    dispatch(getOtherGameList({ page: 12, size: 18 }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  debugger
  if (loading || !gamePopularList || !casinoList || !otherGameList) {
    return <Spinner />;
  }
  const handleNavigate = () => {
    dispatch(setLoginModal(true))
  }
  return (
    <Wrapper>
      <Subheading />
      <HeroBanner />
      <Container>
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
        <FooterHome />
      </Container>
    </Wrapper>
  );
}

export default Home