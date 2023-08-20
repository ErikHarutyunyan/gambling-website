import React, { useCallback, useState } from "react";
// Styles
import {
  Container,
  ErrorMessage,
  EyeWrap,
  InputContainer,
  InputEye,
  InputWrap,
  Wrapper,
} from "../auth.styles";
import "react-phone-number-input/style.css";
import { schema_signUp } from "../authShema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import eyeShow from "../../../assets/images/eyeShow.png";
import eyeHide from "../../../assets/images/eyeHide.png";
import PlatformMost from "../../../components/PlatformMost";

import PhoneInput from "react-phone-number-input";
import RegisterNext from "./RegisterNext";

const Register = ({ closeModalRegister, openModalLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const [phone, setPhone] = useState();
  const [accountDetails,setAccountDetails] = useState({})
  const [verifyEmail, setVerifyEmail] = useState(false);

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema_signUp, {
      stripUnknown: true,
      abortEarly: false,
    }),
  });
  const submitForm = (data) => {

     setAccountDetails(data);
  };
  const handleInputChange = useCallback((name, val) => {
    setValue(name, val, { shouldDirty: true });
    clearErrors(name);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[phone]);

  return (
    <Wrapper>
      <Container>
        {verifyEmail ? (
          <>
            <h2>VERIFY EMAIL</h2>
            <p>
              We sent a verification link to your lorem***@gmail.com mail.
              Please verify your registration.
            </p>
          </>
        ) : (
          <>
            <h2>SIGN UP</h2>
            <p>
              {!accountDetails?.userName
                ? "Account details"
                : "Personal details"}
            </p>
          </>
        )}

        {!verifyEmail ? (
          !accountDetails?.userName ? (
            <form onSubmit={handleSubmit(submitForm)}>
              <InputContainer>
                {errors?.userName?.message && (
                  <ErrorMessage visible={errors?.userName?.message}>
                    {errors?.userName?.message}
                  </ErrorMessage>
                )}
                <InputWrap {...register("userName")} placeholder="Username" />
              </InputContainer>
              <InputContainer>
                {errors?.email?.message && (
                  <ErrorMessage visible={errors?.email?.message}>
                    {errors?.email?.message}
                  </ErrorMessage>
                )}
                <InputWrap {...register("email")} placeholder="Email" />
              </InputContainer>
              <InputContainer>
                {errors?.phoneNumber?.message && (
                  <ErrorMessage visible={errors?.phoneNumber?.message}>
                    {errors?.phoneNumber?.message}
                  </ErrorMessage>
                )}
                <PhoneInput
                  value={phone}
                  onChange={(value) => {
                    handleInputChange("phoneNumber", value);
                    setPhone(value);
                  }}
                  placeholder="Phone Number"
                />
                <input
                  type="tel"
                  {...register("phoneNumber")}
                  style={{ display: "none" }}
                />
              </InputContainer>
              <InputContainer>
                {errors?.password?.message && (
                  <ErrorMessage visible={errors?.password?.message}>
                    {errors?.password?.message}
                  </ErrorMessage>
                )}
                <InputEye>
                  <InputWrap
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Password"
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
                {errors?.confirmPwd?.message && (
                  <ErrorMessage visible={errors?.confirmPwd?.message}>
                    {errors?.confirmPwd?.message}
                  </ErrorMessage>
                )}
                <InputEye>
                  <InputWrap
                    type={showPasswordRepeat ? "text" : "password"}
                    {...register("confirmPwd")}
                    autoComplete="on"
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
              <button type="submit">Next</button>
              <p className="info">
                You can Login
                <span
                  onClick={() => {
                    closeModalRegister();
                    openModalLogin();
                  }}
                >
                  here
                </span>
                .
              </p>
            </form>
          ) : (
            <RegisterNext
              accountDetails={accountDetails}
              setAccountDetails={setAccountDetails}
              closeModalRegister={closeModalRegister}
              openModalLogin={openModalLogin}
              setVerifyEmail={setVerifyEmail}
            />
          )
        ) : null}
      </Container>
      <PlatformMost />
    </Wrapper>
  );
};

export default Register;
