import React from "react";
// Styles
import { Item, Items, Wrapper } from "./Partners.styles";
import { Link } from "react-router-dom";

const PartnersItem = ({ partner }) => {
  return (
    <Link to={partner?.url}>
      <img src={partner?.img} alt={partner?.name} />
    </Link>
  );
};

const Partners = ({ title, partners }) => {
  return (
    <Wrapper className="main-container">
      <h2>{title}</h2>
      <Items>
        {partners.map((partner) => {
       
          return (
            <Item key={partner.id}>
              <PartnersItem partner={partner} />
            </Item>
          );
        })}
      </Items>
    </Wrapper>
  );
};

export default Partners;
