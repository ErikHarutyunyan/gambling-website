import styled from "styled-components";
import { device } from "../../themes/Breakpoints";
export const Wrapper = styled.div`
  background-color: var(--color-dark-gray);
  position: relative;
  z-index: 1;
`;
export const Nav = styled.nav`
  
`;
export const Lists = styled.ul`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  @media ${device.laptop} {
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px 0;
  }
  @media ${device.mobileL} {
    gap: 10px;
  }
`;
export const List = styled.li`
  padding: 14px 0;

  :hover {
    a {
      color: var(--color-blue);
      transition: var(--transition);
      path {
        transition: var(--transition);
        fill: var(--color-blue);
      }
    }
  }
  a {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-white);
    display: flex;
    align-items: center;
    gap: 16px;

    &.active {
      color: var(--color-blue);
      transition: var(--transition);
      path {
        transition: var(--transition);
        fill: var(--color-blue);
      }
    }
  }
  @media ${device.laptop} {
    padding: 0;

    a {
      font-size: 18px;
      gap: 10px;
      svg {
        width: 25px;
      }
    }
  }
  @media ${device.mobileL} {
    a {
      font-size: 14px;
      gap: 5px;
      svg {
        width: 20px;
      }
    }
  }
`;