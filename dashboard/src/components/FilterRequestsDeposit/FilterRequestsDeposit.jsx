import React from 'react'
// Styles
import {Form, InputWrap, Wrapper} from "./FilterRequestsDeposit.styles"
import SelectCustom from '../SelectCustom';
import { depositsRequestPayoutData, selectDate, statusData } from '../../utils/date';
const FilterRequestsWithdraw = () => {

  return (
    <Wrapper>
      <Form>
        <InputWrap>
          <label>Search</label>
          <input
            type="text"
            placeholder="Username, account name, bank name, ifsc"
          />
        </InputWrap>
        <InputWrap>
          <label>PayIn Mode</label>
          <SelectCustom date={depositsRequestPayoutData} activeData={"All"} />
        </InputWrap>
        <InputWrap>
          <label>Status</label>
          <SelectCustom date={statusData} activeData={"All"} />
        </InputWrap>
        <InputWrap>
          <label>Date</label>
          <SelectCustom date={selectDate} activeData={"All"} />
        </InputWrap>
        <InputWrap className="btnWrap">
          <button type="submit">Search</button>
          <button type="button">Reset filter </button>
        </InputWrap>
      </Form>
    </Wrapper>
  );
}

export default FilterRequestsWithdraw;