import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: rgb(24 27 32 / 70%);
  background-blend-mode: color;
  background-image: url(${({ image }) => image});
  width: 100%;
  height: 100vh;
`;