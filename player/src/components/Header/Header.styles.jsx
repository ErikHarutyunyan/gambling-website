import styled from "styled-components";
import { device } from "../../themes/Breakpoints";
export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  background-color: var(--color-gray);
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 5px;
  &.main-container {
    padding: 29px 15px;
  }
  @media ${device.tablet} {
    flex-wrap: wrap;
    gap: 20px;
  }
`;
export const LogoWrap = styled.div`
  a {
    display: block;
  }
  @media ${device.mobileL} {
    & img {
      width: 80px;
    }
  }
  @media ${device.mobileM} {
    & img {
      width: 60px;
    }
  }
`;

export const Nav = styled.nav``;

export const ActionNav = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
  ul li.defaultList p {
    display: inline-block;
    padding: 12px 32px;
    transition: var(--transition);
    border-radius: 8px;
    transition: background 0.3s ease;
    :hover {
      transition: background 0.3s ease;
      color: var(--color-gray);
      background: var(--gradient-gold);
    }
  }
  ul li.defaultList a {
    padding: 12px 32px !important;
    border-radius: 8px;
    transition: background 0.3s ease;
    :hover {
      color: var(--color-gray);
      background: var(--gradient-gold);
      transition: background 0.3s ease;
    }
  }
  a ul:last-child {
    span {
      cursor: pointer;
      color: var(--color-white);
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      transition: var(--transition);
      :first-child {
        margin-right: 24px;
      }
      :hover {
        color: var(--color-blue);
      }
      &.active {
        color: var(--color-blue);
      }
    }
  }
  @media ${device.tablet} {
    flex: 1;
    ul li.defaultList:has(p) {
      margin-right: 8px;
    }
    ul li.defaultList p {
      padding: 7px 17px !important;
      font-size: 16px;
    }
    ul li.defaultList a {
      padding: 7px 17px !important;
      font-size: 16px;
    }
  }
`;

export const Lists = styled.ul`
  display: flex;
  align-items: center;

  &.menu-help {
    gap: 32px;
  }
  @media ${device.tablet} {
    &.menu-actions {
      justify-content: space-between;
    }
  }
  @media ${device.mobileX} {
    &.menu-help {
      gap: 10px;
    }
  }
`;
export const List = styled.li`
  color: var(--color-white);
  &:has(.notification) {
    a {
      display: flex;
      align-items: center;
    }
    &:hover {
      svg path {
        stroke: var(--color-blue);
        transition: var(--transition);
      }
    }
    svg {
      width: 35px;
    }
  }
  &.contact {
    display: flex;
    align-items: center;
    /* padding: 29px 32px; */
    img {
      width: 32px;
      cursor: pointer;
    }
  }
  &.dFlex {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    margin-right: 32px;
    cursor: pointer;
    /* display: none; */
  }
  &.winDep {
    margin-right: 32px;
    cursor: pointer;
    a {
      padding: 8px 16px;
      border: 1px solid var(--color-blue);
      border-radius: 8px;
    }

    & .active {
      background: linear-gradient(to right, #2c94fc, #6a3bea);
      border: none;
    }
  }
  p {
    display: block;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    /* padding: 29px 32px; */
    cursor: pointer;
  }
  a {
    display: block;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    /* padding: 29px 32px; */
    &.active {
      border-bottom: 3px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(to right, #2c94fc, #6a3bea);
    }
  }
  p:hover {
    transition: var(--transition);
    color: var(--color-blue);
  }
  a:hover {
    transition: var(--transition);
    /* color: var(--color-blue); */
  }
  &.dFlex.mobile-dFlex {
    display: none;
  }

  @media ${device.laptop} {
    &.winDep {
      margin-right: 15px;
      a {
        padding: 6px 10px;
        font-size: 16px;
      }
    }
    &.dFlex {
      gap: 8px;
      font-size: 16px;
      line-height: 20px;
      margin-right: 25px;
      font-size: 16px;

      svg {
        width: 32px;
      }
    }
  }
  @media ${device.tablet} {
    &.dFlex {
      display: none;
    }
    &.dFlex.mobile-dFlex {
      display: flex;
    }
  }
  @media ${device.mobileX} {
    &.winDep {
      margin-right: 0px;
      a {
        padding: 3px 8px;
        font-size: 14px;
      }
    }
  }
  @media ${device.mobileL} {
    &.contact {
      img {
        width: 26px;
      }
    }
    &:has(.notification) {
      svg {
        width: 30px;
      }
    }
    &.dFlex.mobile-dFlex {
      font-size: 14px;
      svg {
        width: 26px;
      }
    }
  }
  @media ${device.mobileM} {
    &.contact {
      img {
        width: 25px;
      }
    }
  }
`;

export const NavAction = styled.div`
  @media ${device.tablet} {
    width: 100%;
  }
`;
