import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SwiperCustomNav = styled.div`
 position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    bottom: 5%;
    display: flex;
    width: 100%;
    max-width: 200px;
    justify-content: center;
    background: rgb(24, 27, 32);
    opacity: 0.8;
    border-radius: 12px;
    padding: 13px 12px;
    justify-content: space-between;
  div {
    display: flex;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-white);
    display: flex;
    align-items: center;
    gap: 5px;
    p:first-child{
      font-size: 32px;
      line-height: 40px;
      font-weight: 500;
    }
  }
`;