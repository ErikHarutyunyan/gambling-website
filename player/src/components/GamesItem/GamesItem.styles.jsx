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
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  div {
    border-radius: 8px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &.square {
    img {
      display: block;
      object-fit: contain;
      width: 240px;
      height: 240px;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  &.portrait {
    img {
      display: block;
      object-fit: contain;
      width: 100%;
      max-width: 240px;
      height: auto;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;

export const Item = styled.div`
  
  transition: var(--transition);
  a {
    cursor: pointer;
    display: block;
  }
  :hover {
    transform: scale(1.1);
  }
`;