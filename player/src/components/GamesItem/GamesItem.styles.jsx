import styled from "styled-components";
import { device } from "../../themes/Breakpoints";

export const Wrapper = styled.div`
  padding-top: 128px;
  margin: 0 auto;
  max-width: 1140px;
  width: 100%;
  margin-top: 20px;

  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 55px;
    text-align: center;
    color: #ffffff;
    text-transform: uppercase;
    text-align: left;
  }
  @media ${device.laptopL} {
    max-width: 768px;
    padding-top: 50px;
    h2 {
      font-size: 25px;
      line-height: 30px;
    }
  }
  @media ${device.tabletL} {
    h2 {
      font-size: 20px;
      line-height: 30px;
    }
  }
  @media ${device.mobileM} {
    h2 {
      font-size: 18px;
      line-height: 20px;
    }
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 24px;
  cursor: pointer;
  justify-content: flex-start;
  border-radius: 8px;

  @import "../ReactParallaxTilt.scss";
  & .parallax-effect-glare-scale {
  }
  div {
    border-radius: 8px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transform-style: preserve-3d;
  }
  &.square {
    .img-wrap {
      width: 200px;
      height: 200px;
    }
    img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      cursor: pointer;
      :hover img {
        animation: animateThumb 0.5s forwards;
      }
    }
  }
  &.portrait {
    img {
      display: block;
      object-fit: contain;
      width: 100%;
      max-width: 200px;
      height: auto;
      border-radius: 8px;
      cursor: pointer;
      :hover img {
        animation: animateThumb 0.5s forwards;
      }
    }
  }
  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .film-content {
    position: relative;
    z-index: 1;
  }
  .inner-element {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-style: italic;
    color: white;
    transform: translateZ(60px);
    :hover {
      .title {
        animation: animateThumb 0.5s forwards;
      }
    }

    .title {
      width: 100%;
      font-size: 18px;
      text-align: center;
      line-height: 27px;
      text-transform: uppercase;
      color: rgb(255 255 255);
      background-color: var(--white);
      border-radius: 5px;
      font-style: normal;
      opacity: 0;
      /* box-shadow: rgb(1, 6, 15) 0px 0px 20px 8px; */
      background-color: #0a122dc7;
      height: 69px;
      display: flex;
      align-items: center;
      justify-content: center;
      :hover {
        animation: animateThumb 0.5s forwards;
      }
    }
  }
  @media ${device.laptopL} {
    max-width: 768px;
    &.square {
      .img-wrap {
        width: 180px;
        height: 180px;
      }
    }
    &.portrait {
      img {
        max-width: 180px;
      }
    }
  }
  @media ${device.tabletL} {
    max-width: 768px;
    &.square {
      .img-wrap {
        width: 150px;
        height: 150px;
      }
    }
    &.portrait {
      img {
        max-width: 150px;
      }
    }
  }
  @media ${device.mobileX} {
    max-width: 768px;
    &.square {
      .img-wrap {
        width: 130px;
        height: 130px;
      }
    }
    &.portrait {
      img {
        max-width: 130px;
      }
    }
  }
  @media ${device.mobileM} {
    &.square {
      .img-wrap {
        width: 110px;
        height: 110px;
      }
    }
    &.portrait {
      img {
        max-width: 110px;
       
      }
    }
  }
`;

export const Item = styled.div`
  transition: var(--transition);
  width: calc(100% / 6);
  a,
  .inner-out {
    cursor: pointer;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 35px;
    font-style: italic;
    color: white;
    transform: translateZ(60px);
    margin: 0px;
  }
  :hover {
    transform: scale(1.1);
  }
  @media ${device.laptopL} {
    width: auto;
  }
`;
