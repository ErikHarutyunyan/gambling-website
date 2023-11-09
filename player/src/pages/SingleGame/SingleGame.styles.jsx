import styled from "styled-components";

export const Wrapper = styled.section``

export const GameWrap = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:50px 15px;
  position: relative;
  iframe {
    max-width: 1200px;
    width: 100%;
    max-height: 70vh;
    height: 100vh;
    border-radius: 8px;
  }
`;

export const ErrorWrap = styled.div`
  text-align: center;
  margin-top: 150px;
  color:red;
  font-size: 50px;
  position: relative;
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
