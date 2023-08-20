import React, { useState } from 'react'
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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema_resetPass } from '../authShema';
import PlatformMost from '../../../components/PlatformMost';
import eyeShow from "../../../assets/images/eyeShow.png";
import eyeHide from "../../../assets/images/eyeHide.png";
const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema_resetPass),
  });

  const submitForm = (data) => {
  
    
  };
  return (
    <Wrapper>
      <Container>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit(submitForm)}>
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
          <button type="submit">Send</button>
        </form>
      </Container>
      <PlatformMost />
    </Wrapper>
  );
}

export default ResetPassword