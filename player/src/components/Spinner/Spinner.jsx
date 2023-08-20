import React from "react";
// Styles
import { Wrapper } from "./Spinner.styles";
import ClockLoader from "react-spinners/ClockLoader";

const Spinner = () => {
  return (
    <Wrapper>
      <ClockLoader color="#fff" size={25} cssOverride={{ margin: "0 auto" }} />
    </Wrapper>
  );
};

export default Spinner;
