import styled from "styled-components";
export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;
export const LogoWrap = styled.div`
  a {
    display: block;
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
`;

export const Lists = styled.ul`
  display: flex;
  align-items: center;
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
    padding: 29px 32px;
    svg {
      width: 30px;
    }
    &:hover {
      .cls-1 {
        stroke: var(--color-blue);
      }

      .cls-2 {
        stroke: var(--color-blue);
      }
    }
    p {
      padding-left: 15px;
      padding-right: 15px;
    }
    .cls-1,
    .cls-2 {
      fill: none;
      stroke: #fff;
      stroke-linecap: round;
      stroke-width: 1.5px;
      transition: var(--transition);
    }
    .cls-1:hover {
      stroke: var(--color-blue);
    }

    .cls-2:hover {
      stroke: var(--color-blue);
    }
    .cls-1 {
      stroke-linejoin: bevel;
    }
    .cls-2 {
      stroke-linejoin: round;
      fill-rule: evenodd;
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
    padding: 29px 32px;
    cursor: pointer;
  }
  a {
    display: block;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    padding: 29px 32px;
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
`;
