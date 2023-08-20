import React from 'react'
import { Outlet, Link } from "react-router-dom";
// Styles
import {Wrapper} from "./About.styles"
const About = () => {
  return (
    <Wrapper>
      <h1>About</h1>
      <ul>
        <li>
          <Link to="contacts">Our Contact</Link>
        </li>
        <li>
          <Link to="team">Our Team</Link>
        </li>
      </ul>
      <Outlet />
    </Wrapper>
  );
}

export default About