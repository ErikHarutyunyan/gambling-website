import React from 'react'
// Styles
import {Wrapper} from "./Home.styles"
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import Login from '../../components/Login/Login'
const Home = () => {
  return (
    <HeroBanner>
      <Wrapper>
        <Login />
      </Wrapper>
    </HeroBanner>
  )
}

export default Home