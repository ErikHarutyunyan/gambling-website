import React, { useState } from "react";
// Styles
import {
  InputContainer,
  InputWrap,
  Wrapper,
} from "./AccountDetails.styles";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/user/userSlice";
const AccountDetails = () => {

  const {userInfo} = useSelector(selectUser)

  return (
    <Wrapper>
      <p>Account details</p>
      <form>
        <InputContainer>
          <label>
            Username<span>*</span>
          </label>

          <InputWrap
            placeholder="Username"
            disabled
            value={userInfo?.user.user_name}
          />
        </InputContainer>
        <InputContainer>
          <label>
            Email<span>*</span>
          </label>

          <InputWrap
            placeholder="Email"
            disabled
            value={userInfo?.user.email}
          />
        </InputContainer>
        <InputContainer>
          <label>
            Phone number<span>*</span>
          </label>

          <PhoneInput
            value={userInfo?.user.phone_number}
            disabled
            placeholder="Phone Number"
          />
          <input type="tel" style={{ display: "none" }} disabled />
        </InputContainer>
        <InputContainer>
          <label>
            Full name<span>*</span>
          </label>

          <InputWrap
            placeholder="Full name"
            value={userInfo?.user.full_name}
            disabled
          />
        </InputContainer>
        {/* <BtnWrap>
          <button type="submit">Sava change</button>
        </BtnWrap> */}
      </form>
    </Wrapper>
  );
};

export default AccountDetails;
