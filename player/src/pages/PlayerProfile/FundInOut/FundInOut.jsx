import React from "react";
// Styles
import { Container, Wrapper } from "./FundInOut.styles";
import Title from "../../../components/Title/Title";
import FundInOutTable from "../../../components/FundInOutTable/FundInOutTable";
const FundInOut = () => {
  return (
    <Wrapper>
      <Container>
        <Title title={"FUND IN / OUT"} />

        <FundInOutTable />
      </Container>
    </Wrapper>
  );
};

export default FundInOut;
