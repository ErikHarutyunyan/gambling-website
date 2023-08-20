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
  &.main-container {
    padding-top: 20px;
  }
`;
export const LogoWrap = styled.div``;

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 32px;
`;

export const ActionNav = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
  ul li.defaultList p {
    padding: 12px 32px;
    transition: var(--transition);
    border-radius: 8px;
    transition: background-color 0.3s ease;
    :hover {
      color: var(--color-gray);
      background: var(--gradient-gold);
    }
  }
  ul:last-child {
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
  &.lang {
    gap: 24px;
    span {
      cursor: pointer;
    }
  }
  .active {
    color: #2C94FC;
  }
`;
export const List = styled.li`
  color: var(--color-white);
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
  &.idAgent {
    display: flex;
    flex-direction: column;
    margin-right: 32px;
    p {
      padding: 0;
    }
  }
  &.balance {
    p {
      padding: 0;
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
`;
