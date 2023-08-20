import React from 'react'
// Styles
import { Wrapper, Container, InfoItem } from "./CashCoinBalance.styles";
const CashCoinBalance = ({ cash="0"}) => {
  return (
    <Wrapper>
      <Container>
        <InfoItem>
          <p>Ballance</p>
          <p>{cash}</p>
        </InfoItem>
      </Container>
    </Wrapper>
  );
};

export default CashCoinBalance