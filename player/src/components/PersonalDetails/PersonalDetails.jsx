import React, { useCallback, useState } from "react";
// Styles
import {
  ErrorMessage,
  InputContainer,
  InputWrap,
  Wrapper,
  // BtnWrap,
  InputColumns,
} from "./PersonalDetails.styles";
// Images
import downArray from "../../assets/images/Down_Arrow.png";
// import userIcon from "../../assets/images/user.png";
import { CountryDropdown } from "react-country-region-selector";
// import { schema_signUp_second } from "../authShema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import { PenIcon } from "../Icons/Icons";
import { schema_personal_details } from "./schema";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/user/userSlice";
import { roles } from "../../utils/utils";
import { Link } from "react-router-dom";
import { MobileIcon } from "../Icons/Icons";
const PersonalDetails = () => {
  const { userInfo } = useSelector(selectUser);
  
  return (
    <Wrapper>
      <p>Personal details</p>
      <form>
        <InputContainer>
          <label>
            {userInfo?.user?.parent.role === roles.super_agent
              ? "Super Agent"
              : userInfo?.user?.parent.role}{" "}
            User name
          </label>
          <InputWrap value={userInfo?.user?.parent.email} disabled />
        </InputContainer>
        <InputContainer>
          <label>
            {userInfo?.user?.parent.role === roles.super_agent
              ? "Super Agent"
              : userInfo?.user?.parent.role}{" "}
            Full name
          </label>
          <InputWrap value={userInfo?.user?.parent.full_name} disabled />
        </InputContainer>

        <InputContainer>
          <label>
            {userInfo?.user?.parent.role === roles.super_agent
              ? "Super Agent"
              : userInfo?.user?.parent.role}{" "}
            Email
          </label>
          <InputWrap value={userInfo?.user?.parent.email} disabled />
        </InputContainer>

        <InputContainer>
          <label>
            {userInfo?.user?.parent.role === roles.super_agent
              ? "Super Agent"
              : userInfo?.user?.parent.role}{" "}
            Phone
          </label>
          <div className="phone-parent">
            <InputWrap value={userInfo?.user?.parent.phone_number} disabled />
            <Link
              to={`https://api.whatsapp.com/send?phone=${parseInt(
                userInfo?.user?.parent.phone_number
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MobileIcon />
            </Link>
          </div>
        </InputContainer>
      </form>
    </Wrapper>
  );
};

export default PersonalDetails;
