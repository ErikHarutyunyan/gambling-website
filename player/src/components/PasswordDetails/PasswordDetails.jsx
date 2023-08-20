import React, { useState } from "react";
// Styles
import {
  ErrorMessage,
  EyeWrap,
  InputContainer,
  InputEye,
  InputWrap,
  Wrapper,
} from "./PasswordDetails.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import eyeShow from "../../assets/images/eyeShow.png";
import eyeHide from "../../assets/images/eyeHide.png";
import { BtnWrap } from "../PersonalDetails/PersonalDetails.styles";
const PasswordDetails = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const [newPasswordRepeat, setNewPasswordRepeat] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(""),
  });

  const submitForm = (data) => {

  };
  return (
    <Wrapper>
      <p>Password</p>
      <form onSubmit={handleSubmit(submitForm)}>
        <InputContainer>
          <label>
            Old password<span>*</span>
          </label>
          {errors?.oldPassword?.message && (
            <ErrorMessage visible={errors?.oldPassword?.message}>
              {errors?.oldPassword?.message}
            </ErrorMessage>
          )}
          <InputEye>
            <InputWrap
              type={showPassword ? "text" : "password"}
              {...register("oldPassword")}
              placeholder="Old Password"
              autoComplete="on"
            />
            <EyeWrap
              className="show-reset-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <img
                  src={eyeShow}
                  className="show-password-eye"
                  alt="show password eye"
                />
              ) : (
                <img
                  src={eyeHide}
                  className="hide-password-eye"
                  alt="hide password eye"
                />
              )}
            </EyeWrap>
          </InputEye>
        </InputContainer>
        <InputContainer>
          <label>
            New password<span>*</span>
          </label>
          {errors?.newPassword?.message && (
            <ErrorMessage visible={errors?.newPassword?.message}>
              {errors?.newPassword?.message}
            </ErrorMessage>
          )}
          <InputEye>
            <InputWrap
              type={newPasswordRepeat ? "text" : "password"}
              {...register("newPassword")}
              placeholder="Repeat new password"
            />
            <EyeWrap
              className="show-reset-password"
              onClick={() => setNewPasswordRepeat(!newPasswordRepeat)}
            >
              <img
                src={newPasswordRepeat ? eyeShow : eyeHide}
                className="show-password-eye"
                alt="show password eye"
              />
            </EyeWrap>
          </InputEye>
        </InputContainer>
        <InputContainer>
          <label>
            Repeat new password<span>*</span>
          </label>
          {errors?.confirmPwd?.message && (
            <ErrorMessage visible={errors?.confirmPwd?.message}>
              {errors?.confirmPwd?.message}
            </ErrorMessage>
          )}
          <InputEye>
            <InputWrap
              type={showPasswordRepeat ? "text" : "password"}
              {...register("confirmPwd")}
              placeholder="Repeat new password"
            />
            <EyeWrap
              className="show-reset-password"
              onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
            >
              {showPasswordRepeat ? (
                <img
                  src={eyeShow}
                  className="show-password-eye"
                  alt="show password eye"
                />
              ) : (
                <img
                  src={eyeHide}
                  className="hide-password-eye"
                  alt="hide password eye"
                />
              )}
            </EyeWrap>
          </InputEye>
        </InputContainer>
        <BtnWrap>
          <button type="submit">Reset password</button>
        </BtnWrap>
      </form>
    </Wrapper>
  );
};

export default PasswordDetails;
