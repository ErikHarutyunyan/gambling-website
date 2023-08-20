import styled from "styled-components";

export const Wrapper = styled.section``

export const GameWrap = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:100px 15px;
  iframe {
    max-width: 1200px;
    width: 100%;
    max-height: 900px;
    height: 100vh;
    border-radius: 8px;
  }
`;

export const ErrorWrap = styled.div`
  text-align: center;
  margin-top: 150px;
  color:red;
  font-size: 50px;
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  color: var(--color-blue);
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
    stroke: var(--color-blue);
  }


`;

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;
