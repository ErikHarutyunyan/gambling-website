import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: var(--color-dark-gray);
`;
export const Nav = styled.nav`
  
`;
export const Lists = styled.ul`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
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

    /* &.active {
      border-bottom: 3px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(to right, #2c94fc, #6a3bea);
    } */
  }
`;