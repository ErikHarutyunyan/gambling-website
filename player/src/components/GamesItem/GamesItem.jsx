import React from "react";
// Styles
import { Item, Items, Wrapper } from "./GamesItem.styles";
import { Link } from "react-router-dom";

import { SINGLE_GAME } from "../../router/route-path";
import Tilt from "react-parallax-tilt";
import ImageBlur from "../ImageBlur/ImageBlur";

const GameItem = ({ game, imgPos, user, handleNavigate }) => {
  const img = game[`image_${imgPos}`] || game.img;

  return (
    <>
      <Tilt
        perspective={500}
        className="parallax-effect"
        scale={1}
        // glareColor={"#000"}
        glareBorderRadius={"20px"}
      >
        {user ? (
          <>
            <Link className="inner-element" to={`${SINGLE_GAME}${game.id}`}>
              <h2 className="title">{game?.name}</h2>
            </Link>
            {/* <div style={{ backgroundImage: `url(${casinoBanner})` }}>
              <img
                src={img}
                alt={game.name}
                loading="lazy"
                onError={(event) => {
                  event.target.src = casinoBanner;
                  event.onerror = null;
                }}
              />
            </div> */}
            <div className="img-wrap">
              <ImageBlur src={img} alt={game.name} loading="lazy" />
              {/* <img
                src={img}
                alt={game.name}
                loading="lazy"
                onError={(event) => {
                  event.target.src = casinoBanner;
                  event.onerror = null;
                }}
              /> */}
            </div>
          </>
        ) : (
          <>
            <div className="inner-element inner-out" onClick={handleNavigate}>
              <h2 className="title">{game?.name}</h2>
            </div>
            <div className="img-wrap">
              <ImageBlur src={img} alt={game.name} loading="lazy" />
              {/* <img
                src={img}
                alt={game.name}
                loading="lazy"
                onError={(event) => {
                  event.target.src = casinoBanner;
                  event.onerror = null;
                }}
              /> */}
            </div>
          </>
        )}
      </Tilt>
    </>
  );
};

const GamesItem = ({
  title = "",
  games = [],
  nameClass = "",
  handleNavigate,
  user,
}) => {
  return (
    <Wrapper className="main-container">
      {title && <h2>{title}</h2>}
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

export default GamesItem;
