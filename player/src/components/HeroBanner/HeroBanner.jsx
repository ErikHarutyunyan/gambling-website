import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons/Icons";
import { SwiperCustomNav, Wrapper } from "./HeroBanner.styles";
import { ImgWrapper } from "../../themes/GlobalStyle";
import imageSwiper from "../../assets/images/swiperImg.png"
import banner1 from "../../assets/images/banner1.jpeg"
import banner2 from "../../assets/images/banner2.jpeg"
import banner3 from "../../assets/images/banner3.jpeg"
import banner4 from "../../assets/images/banner4.jpeg";
import banner5 from "../../assets/images/banner5.jpeg";
import "swiper/swiper-bundle.css";

const imgBanners = [banner1, banner2, banner3, banner4, banner5];
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
        {imgBanners.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ImgWrapper src={item} />
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
          <p>{imgBanners.length}</p>
        </div>
        <button onClick={goNext}>
          <ArrowRightIcon />
        </button>
      </SwiperCustomNav>
    </Wrapper>
  );
};

export default HeroBanner;
