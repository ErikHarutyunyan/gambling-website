import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 376px;
  width: 100%;
`;

export const NavHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;
export const NavFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  button {
    display: flex;
    align-items: center;
    gap: 13px;
    background: #f9f5ff;
    border-radius: 6px;
    padding: 8px 0 8px 13px;
    color: #00024c;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    transition: background-color 0.3s ease-in-out;
    :hover {
      background-color: #344054;
      color: #f9f5ff;
    }
  }
  .logout {
    max-width: 185px;
    width: 100%;
    display: flex;
    gap: 18px;
    width: 100%;
    margin-top: 24px;
    svg {
      cursor: pointer;
    }
  }
`;
export const LogoutWrap = styled.div`
  width: 100%;
  p {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #f2f4f7;
    span:first-child {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
    }
  }
  hr {
    border: 1px solid #475467;
  }
`;
export const LogoWrap = styled.div`
  width: 100%;
  padding: 10px 0;
  text-align: center;
  background: #5d0ced;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`;

export const ChildList = styled.ul``;
export const Lists = styled.ul`
  &.footerLinks {
    margin-top: 48px;
  }
`;
export const List = styled.li`
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  & .childrenWrap {
    height: 0;
    overflow: hidden;
    transition: all 0.3s linear;
    margin-top: 8px;
    z-index: 9;
  }
  &.childItem {
    a,
    p {
      border: none;
      :hover {
        border: none;
      }
      &.active {
        border: none;
      }
      padding-left: 24px;
    }
  }
  p > span {
    flex: 1;
  }
  border-bottom: 1px solid #42464c;
  :not(:last-child) {
    margin-bottom: 8px;
  }
  p svg {
    transition: var(--transition);
    &.active {
      transform: rotate(180deg);
      transition: var(--transition);
    }
  }

  a,
  p {
    display: flex;
    align-items: center;
    gap: 12px;

    color: #fff;
    padding: 13px 0px 13px 15px;
    border-left: 4px solid transparent;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-white);
    :hover {
      background: linear-gradient(107.78deg, #2c94fc 0%, #6a3bea 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      font-weight: 600;

      border-left: 4px solid var(--color-blue);
    }
    &.active {
      background: linear-gradient(107.78deg, #2c94fc 0%, #6a3bea 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      border-left: 4px solid var(--color-blue);
      font-weight: 600;
    }
  }
  p {
  }
`;
