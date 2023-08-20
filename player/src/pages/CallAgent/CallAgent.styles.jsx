import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 145px);

  background: 
    url(${(props) => props?.backImg}),
    linear-gradient(130deg, #5a72c6 0%, #562e91 100%);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 100px;
  padding-top: 150px;
  gap: 12px;
  h2 {
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 96px;
    font-style: normal;
    font-weight: 600;
    line-height: 124.8px;
  }
`;
export const AgentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  svg {
    cursor: pointer;
    opacity: 0.9;
    transition: var(--transition);
    :hover {
      opacity: 1;
      transition: var(--transition);
    }
  }
`;