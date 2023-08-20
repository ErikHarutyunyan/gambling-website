import React from 'react'
// Styles
import {Wrapper} from "./FundInOut.styles"
import Title from '../../../components/Title/Title';
import FundInOutTable from '../../../components/FundInOutTable/FundInOutTable';
const FundInOut = () => {
  return (
    <Wrapper>
      <Title title={"FUND IN / OUT"} />
      
      <FundInOutTable />
    </Wrapper>
  );
}

export default FundInOut