import styled from "styled-components";
export const Wrapper = styled.div`
  background-image: url(${(props) => (props.backImg ? props.backImg : "none")});
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
    pointer-events: none;
    cursor: none;

`