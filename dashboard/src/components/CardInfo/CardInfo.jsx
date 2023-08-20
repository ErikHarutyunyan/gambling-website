import React from "react";
// Styles
import { Container, InfoWrap, Wrapper } from "./CardInfo.styles";
const CardInfo = ({ title = "", count = 0, items }) => {
  return (
    <Wrapper>
      <Container>
      <h2>{title}</h2>
      <p>{count}</p>
      {items?.map((item,idx) => {
        return (
          <InfoWrap key={idx}>
            <div className="infoName">{item.name}</div>
            <div className="line"> | </div>
            <div>{item.value}</div>
          </InfoWrap>
        );
      })}

      </Container>
    </Wrapper>
  );
};

export default CardInfo;
