import React, { useState } from "react";
// Styles
import {
  Container,
  ErrorMessage,
  InputContainer,
  InputWrap,
  Wrapper,
} from "../auth.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema_forgot } from "../authShema";
import PlatformMost from "../../../components/PlatformMost";
const ForgotPassword = () => {
  const [resetLink, setResetLink] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema_forgot),
  });

  const submitForm = (data) => {

    setResetLink(true);
  };
  return (
    <Wrapper>
      <Container>
        <h2>{!resetLink ? "FORGOT PASSWORD" : "RESET LINK IS SENT"}</h2>
        <p>
          {!resetLink
            ? "Enter your Email and we will sent password recovery link to it."
            : "We sent reset link to your email address. Please check it."}
        </p>
        {!resetLink && (
          <form onSubmit={handleSubmit(submitForm)}>
            <InputContainer>
              {errors?.email?.message && (
                <ErrorMessage visible={errors?.email?.message}>
                  {errors?.email?.message}
                </ErrorMessage>
              )}
              <InputWrap {...register("email")} placeholder="Email" />
            </InputContainer>
            <button type="submit">Send</button>
          </form>
        )}
      </Container>
      <PlatformMost />
    </Wrapper>
  );
};

export default ForgotPassword;
