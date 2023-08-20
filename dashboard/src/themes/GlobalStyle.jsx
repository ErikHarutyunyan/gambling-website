import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-gray: #21252A;
    --color-dark-gray: #181B20;
    --color-blue:#2C94FC;
    --gradient-gold:linear-gradient(108.03deg, #F0CB00 2.38%, #CA8200 96.96%);
    --transition: all 0.3s linear;
    --gradient-purple:linear-gradient(201.24deg, #5A72C6 18.73%, #562E91 40.98%);
    --gradient-blue:linear-gradient(107.78deg, #2C94FC 0%, #6A3BEA 100%);
  }
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  :active,
  :focus {
    outline: 0;
  }

  a:active,
  a:focus {
    outline: 0;
  }

  aside,
  footer,
  header,
  nav {
    display: block;
  }
  html {
     scroll-behavior: smooth;
  }
  
  button,
  input,
  textarea {
    font-family: inherit;
  }

  input::-ms-clear {
    display: none;
  }

  button {
    cursor: pointer;
     border: none;
    background-color: transparent;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  a,
  a:visited {
    display: inline-block;
    all: unset;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    
    text-decoration: none;
  }

  
  img {
    vertical-align: top;
  }
  
  body,
  html {
    height: 100%;
    width: 100%;
    line-height: 1;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    background-color: var(--color-gray);
    color: var(--color-white);
  }

  ul li {
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
    box-sizing: border-box;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  .main-container {
    max-width: 1630px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
  }
`;
export const ImgWrapper = styled.img.attrs((props) => ({
  src: props?.src,
  alt: props?.alt,
  width: props?.width ? props.width : "auto",
  height: props?.height ? props.height : "auto",
  loading: props?.loading ? props.loading : "eager",
}))`
  object-fit: ${(props) => props?.objectFit};
  max-width: ${(props) => props?.maxWidth};
  margin: ${(props) => (props?.center ? "0 auto" : "none")};
`;
