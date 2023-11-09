import styled from "styled-components";
import { device } from "../../themes/Breakpoints";
export const Wrapper = styled.div`
  position: relative;
`;

export const UserHead = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  span {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
  svg {
    cursor: pointer;
  }
  @media ${device.laptop} {
    img {
      width: 32px;
    }
    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
  }
  @media ${device.mobileL} {
    img {
      width: 26px;
    }
    span {
      font-size: 14px;
      
    }
  }
`;

export const NavWrap = styled.div`
  background-color: var(--color-dark-gray);
  border: 1px solid var(--color-blue);
  border-radius: 12px;
  height: 0;
  position: absolute;
  overflow: hidden;
  transition: all 0.3s linear;
  margin-top: 8px;
  z-index: 9;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 24px;
    li {
      a {
        display: flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        padding: 0;
      }
    }
  }
  @media ${device.laptop} {
    ul {
      padding: 18px;
      li {
        a {
          font-size: 16px;
          font-weight: 20px;
        }
      }
    }
  }
  @media ${device.mobileL} {
    ul {
      padding: 15px;
      gap: 15px;
      li {
        a {
          font-size: 14px;
          svg {
            width: 18px;
          }
        }
      }
    }
  }
`;
