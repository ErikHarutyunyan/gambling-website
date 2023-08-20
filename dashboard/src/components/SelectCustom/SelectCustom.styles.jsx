import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  background: ${(props) =>
    props?.disabled ? "#42464C" : `var(--color-dark-gray)`};
  border: 1px solid var(--color-white);
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  width: ${(props) => props?.width};
  pointer-events: ${(props) => (props?.disabled ? "none" : "auto")};
`;
export const NavHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  img {
    display: block;
    object-fit: cover;
    height: auto;
  }
`;
export const NavWrap = styled.div`
  background: var(--color-dark-gray);
  border-radius: 0px 0px 12px 12px;
  height: 0px;
  position: absolute;
  overflow: hidden;
  transition: all 0.3s linear 0s;
  margin-top: 9px;
  z-index: 9;
  left: -1px;
  width: 101%;
  border: 1px solid #fff;
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* gap: 24px; */

    li {
      padding: 8px 16px;
      width: 100%;
      cursor: pointer;
      transition: var(--transition);
      :hover {
        background-color: var(--color-gray);
      }
    }
  }
`;
