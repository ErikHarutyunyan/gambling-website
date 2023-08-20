import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 24px;
  justify-content: center;
  margin-top: 38px;
  /* margin-bottom: 32px; */
  button {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    padding: 12px;
    transition: var(--transition);
    cursor: pointer;
    &.active {
      background-color: var(--color-dark-gray);
    }
    :hover {
      background-color: var(--color-dark-gray);
    }
    color: var(--color-white);
    width: 48px;
    height: 48px;
  }
  .dots {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
`;