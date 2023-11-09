import styled from "styled-components";
import { device } from "../../themes/Breakpoints";

export const Wrapper = styled.section``

export const Container = styled.div`
  /* background: linear-gradient(201.24deg, #5a72c6 18.73%, #562e91 40.98%); */
  background-color: #151515;
  max-width: 1270px;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 30px;
  margin-top: 30px;
  border-radius: 8px;
  position: relative;

  @media ${device.laptopL} {
    max-width: 900px;
  }
  @media ${device.laptopM} {
    max-width: 768px;
    padding: 0 15px;
    padding-bottom: 30px;
  }
  @media ${device.tablet} {
    max-width: 600px;
   
  }
  @media ${device.tablet} {
    max-width: 475px;
   
  }
  @media ${device.mobileX} {
    max-width: 375px;
  }
  @media ${device.mobileM} {
    max-width: 320px;
  }
`;

export const PopularSport = styled.div`
  max-width: 1140px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  padding-top: 128px;
  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 55px;
    color: rgb(255, 255, 255);
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
    max-width: 768px;
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

export const PopularSportItems = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  gap: 40px;
  /* flex-wrap: wrap; */
  .sportbook {
    width: 100%;
    height: 263px;
    background-color: #fff;
    border-radius: 8px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 37px;
    max-width: 480px;
    background-position: center;
    background-size: cover;
    font-weight: 600;
  }
  .virtualsports,
  .livebet {
    width: 100%;
    height: 263px;
    background-color: #fff;
    border-radius: 8px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 37px;
    max-width: 300px;
    text-align: center;
    line-height: 40px;
    background-position: center;
    background-size: cover;
    font-weight: 600;
  }
  @media ${device.laptopL} {
    gap: 25px;
    flex-wrap: wrap;
    justify-content: space-between;

    .sportbook {
      width: 100%;
      height: 200px;
      font-size: 20px;
      max-width: none;
      line-height: 30px;
      font-weight: 600;
    }
    .virtualsports,
    .livebet {
      width: 100%;
      height: 200px;
      font-size: 20px;
      line-height: 30px;
      font-weight: 600;
      max-width: none;
      width: calc(100% / 2 - 20px);
    }
  }
  @media ${device.tabletL} {
    .sportbook {
      font-size: 16px;
      line-height: 20px;
    }
    .virtualsports,
    .livebet {
      font-size: 16px;
      line-height: 20px;
    }
  }
  @media ${device.mobileX} {
    .sportbook {
      height: 130px;
    }
    .virtualsports,
    .livebet {
      height: 130px;
    }
  }
`;