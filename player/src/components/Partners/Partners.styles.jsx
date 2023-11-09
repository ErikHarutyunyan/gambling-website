import styled from "styled-components";
import { device } from "../../themes/Breakpoints";
export const Wrapper = styled.div`
  padding-top: 128px;
  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 55px;
    text-align: center;
    color: #ffffff;
    text-transform: uppercase;
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
  justify-content: flex-start;
  cursor: pointer;
  border-radius: 8px;
  margin: 0 auto;
  max-width: 1140px;
  width: 100%;
  margin-top: 20px;
  @media ${device.mobileM} {
    justify-content: center;
  }
`;

export const Item = styled.div`
  transition: var(--transition);
  border: 3px solid var(--color-blue);
  padding: 22px 19px;
  border-radius: 6px;
  a {
    cursor: pointer;
    display: block;
  }
  img {
    max-width: 140px;
    width: 100%;
  }
  :hover {
    transform: scale(1.1);
  }
  @media ${device.laptopM} {
    padding: 15px 10px;
    img {
      max-width: 120px;
      width: 100%;
    }
  }
  @media ${device.mobileX} {
    padding: 10px;
    img {
      max-width: 100px;
      width: 100%;
    }
  }
`;
