import { createGlobalStyle } from "styled-components";

import RobotoBlack from "../assets/fonts/Roboto-Black.ttf";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";
import RobotoLight from "../assets/fonts/Roboto-Light.ttf";
import RobotoMedium from "../assets/fonts/Roboto-Medium.ttf";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";
// import RobotoSemibold from "../assets/fonts/Roboto-Semibold.ttf";
import RobotoThin from "../assets/fonts/Roboto-Thin.ttf";

export const FontStyle = createGlobalStyle`
    @font-face {
      font-family: "Roboto", sans-serif;
      src: url(${RobotoBlack}) format('truetype');
      font-weight: 900;
      font-style: normal;
    }
    @font-face {
      font-family: "Roboto", sans-serif;
      src: url(${RobotoBold}) format('truetype');
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: "Roboto", sans-serif;
      src: url(${RobotoMedium}) format('truetype');
      font-weight: 500;
      font-style: normal;
    }
    @font-face {
      font-family: "Roboto", sans-serif;
      src: url(${RobotoRegular}) format('truetype');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: "Roboto", sans-serif;
      src: url(${RobotoLight}) format('truetype');
      font-weight: 300;
      font-style: normal;
    }
    @font-face {
      font-family: "Roboto", sans-serif;
      src: url(${RobotoThin}) format('truetype');
      font-weight: 100;
      font-style: normal;
    }`;
