import React from "react";
// Styles
import { Wrapper, Lists, Nav, List } from "./Subheading.styles";
import { dataLinks } from "./dataLinks";
import { NavLink } from "react-router-dom";

const Subheading = () => {
  return (
    <Wrapper>
      <Nav className="main-container">
        <Lists>
          {dataLinks.map((item) => {
            return (
              <List key={item.id}>
                <NavLink to={item.url}>
                  {item.icon}
                  <p>{item.name}</p>
                </NavLink>
              </List>
            );
          })}
        </Lists>
      </Nav>
    </Wrapper>
  );
};

export default Subheading;
