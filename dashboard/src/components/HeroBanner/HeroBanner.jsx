import React from 'react'
// Styles
import {Wrapper} from "./HeroBanner.styles"
import bannerImg from "../../assets/images/banner.png"
const HeroBanner = ({children}) => {
  return <Wrapper image={bannerImg}>
    {children}
  </Wrapper>;
}

export default HeroBanner