import styled from "styled-components";
export const Wrapper = styled.div`
  padding-top: 128px;
  h2 {
    font-weight: 600;
    font-size: 48px;
    line-height: 62px;
    text-align: center;
    color: #ffffff;
    text-transform: uppercase;
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 24px;
`;

export const Item = styled.div`
  transition: var(--transition);
  border: 3px solid var(--color-blue);
  padding: 22px 19px;
  border-radius: 6px;
  a {
    cursor: pointer;
    display: block;
  }
  :hover {
    transform: scale(1.1);
  }
`;
