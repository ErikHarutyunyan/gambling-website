import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons/Icons";
import { SwiperCustomNav, Wrapper } from "./HeroBanner.styles";
import { ImgWrapper } from "../../themes/GlobalStyle";
import imageSwiper from "../../assets/images/swiperImg.png"
import "swiper/swiper-bundle.css";
const HeroBanner = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const goNext = useCallback(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  }, [swiperRef]);

  const goPrev = useCallback(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }, [swiperRef]);
 const handleSlideChange = (swiper) => {
   setCurrentSlide(swiper.activeIndex);
 };
  return (
    <Wrapper>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "fraction",
        }}
      >
        {[...Array(10)].map((_, index) => {
          return (
            <SwiperSlide key={index}>
              <ImgWrapper src={imageSwiper} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SwiperCustomNav>
        <button onClick={goPrev}>
          <ArrowLeftIcon />
        </button>
        <div>
          <p>{currentSlide + 1}</p>
          <p>/</p>
          <p>{[...Array(10)].length}</p>
        </div>
        <button onClick={goNext}>
          <ArrowRightIcon />
        </button>
      </SwiperCustomNav>
    </Wrapper>
  );
};

export default HeroBanner;
