import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1084px;
  width: 100%;
  padding: 24px 15px 106px 15px;
  margin: 0 auto;
  position: relative;
`;
export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--color-blue);
  padding: 4px;
  border-radius: 8px;
  gap: 12px;
  margin: 0 auto;
  width: 100%;
  max-width: 380px;
  margin-top: 20px;
  margin-bottom: 36px;
  button {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-white);
    background: var(--color-dark-gray);
    transition: background 0.3s linear;
    padding: 8px 16px;
    border-radius: 8px;
    &.active {
      background: var(--gradient-blue);
    }
    :hover {
      background: var(--gradient-blue);
      transition: background 0.3s linear;
    }
  }
`;