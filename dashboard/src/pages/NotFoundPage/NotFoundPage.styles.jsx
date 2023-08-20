import styled from "styled-components";

export const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  flex-direction: column;
  p {
    margin-bottom: 15px;
  }
  a {
    :hover {
      text-decoration: underline;
    }
  }
`