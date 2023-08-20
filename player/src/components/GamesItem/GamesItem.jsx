import React, { useEffect } from 'react'
// Styles
import {Item, Items, Wrapper} from "./GamesItem.styles"
import { Link } from 'react-router-dom'
import casinoBanner from "../../assets/images/casinoBanner.webp";
import { SINGLE_GAME } from '../../router/route-path';
const GameItem = ({ game, imgPos, user, handleNavigate }) => {
  const img = game[`image_${imgPos}`] || game.img;

  return (
    <>
      {user ? (
        <div style={{ backgroundImage: `url(${casinoBanner})` }}>
          <Link to={`${SINGLE_GAME}${game.id}`}>
            <img src={img} alt={game.name} loading="eager" />
          </Link>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${casinoBanner})` }}
          onClick={handleNavigate}
        >
          <div>
            <img src={img} alt={game.name} loading="eager" />
          </div>
        </div>
      )}
    </>
  );
};

const GamesItem = ({ title, games, nameClass = "", handleNavigate,user }) => {
  return (
    <Wrapper className="main-container">
      <h2>{title}</h2>
      <Items className={`${nameClass}`}>
        {games.map((game) => {
          return (
            <Item key={game.id}>
              <GameItem
                game={game}
                imgPos={nameClass}
                handleNavigate={handleNavigate}
                user={user}
              />
            </Item>
          );
        })}
      </Items>
    </Wrapper>
  );
};

export default GamesItem