import React from 'react'
// Styles
import {Wrapper} from "./PlatformMost.styles"
import chromeImg from "../../assets/images/chrome.png";
import safariImg from "../../assets/images/safari.png";
const PlatformMost = () => {
  return (
    <Wrapper>
        <span>Our platform is most compatible with:</span>
        <p>
          <img src={chromeImg} alt={"chrome"} />
          <img src={safariImg} alt={"safari"} />
        </p>
    </Wrapper>
  );
}

export default PlatformMost