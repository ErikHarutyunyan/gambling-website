import React, { useCallback, useState } from "react";
// Styles
import "react-phone-number-input/style.css";
import {
  BtnWrap,
  Container,
  ErrorMessage,
  ErrorWrap,
  FormWrap,
  InputContainer,
  InputWrap,
  Wrapper,
} from "./MyProfile.styles";
import Title from "../../components/Title";
import { ToastContainer } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema_profile } from "./schem";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setMessage } from "../../app/features/user/userSlice";
import PhoneInput from "react-phone-number-input";
import {
  changeMyProfile,
} from "../../app/features/user/userActions";
import { useEffect } from "react";
import { notify } from "../../utils/utils";

const MyProfile = () => {
  const { userInfo, error, message } = useSelector(selectUser);
  const [phone, setPhone] = useState(userInfo?.user.phone_number);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_profile, {
      stripUnknown: true,
      abortEarly: false,
    }),
    defaultValues: {
      full_name: userInfo?.user.full_name || "",
      phone_number: userInfo?.user.phone_number || "",
      user_name: userInfo?.user.user_name || "",
      email: userInfo?.user.email || "",
    },
  });

  const submitForm = async (data) => {
    let newData = { user_id: userInfo?.user.id };
    for (let key in data) {
      if (data[key]) {
        newData[key] = data[key];

      }
    }
    dispatch(changeMyProfile(newData));
    // const
  };
  const handleInputChange = useCallback(
    (name, val) => {
      setValue(name, val, { shouldDirty: true });
      clearErrors(name);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [phone]
  );
  useEffect(() => {
    if (message) {
      notify(message);
      dispatch(setMessage(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  return (
    <Wrapper>
      <Title title={"My profile"} />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <FormWrap onSubmit={handleSubmit(submitForm)}>
        {error && (
          <ErrorWrap>
            <ErrorMessage visible={error}>{error}</ErrorMessage>
          </ErrorWrap>
        )}
        <Container>
          <InputContainer>
            <label>Full Name</label>

            {errors?.full_name?.message && (
              <ErrorMessage visible={errors?.full_name?.message}>
                {errors?.full_name?.message}
              </ErrorMessage>
            )}

            <InputWrap
              error={errors?.full_name?.message}
              placeholder="Full name"
              {...register("full_name")}
              defaultValue={userInfo?.user.full_name}
            />
          </InputContainer>
          <InputContainer>
            <label>User Name</label>

            {errors?.user_name?.message && (
              <ErrorMessage visible={errors?.user_name?.message}>
                {errors?.user_name?.message}
              </ErrorMessage>
            )}

            <InputWrap
              error={errors?.user_name?.message}
              placeholder="User name"
              {...register("user_name")}
              defaultValue={userInfo?.user.user_name}
            />
          </InputContainer>
          <InputContainer>
            <label>Email</label>
            {errors?.email?.message && (
              <ErrorMessage visible={errors?.email?.message}>
                {errors?.email?.message}
              </ErrorMessage>
            )}
            <InputWrap
              error={errors?.email?.message}
              placeholder="Email"
              {...register("email")}
              disabled
              defaultValue={userInfo?.user.email}
            />
          </InputContainer>
          <InputContainer error={errors?.phone_number?.message}>
            <label>Phone</label>
            {errors?.phone_number?.message && (
              <ErrorMessage visible={errors?.phone_number?.message}>
                {errors?.phone_number?.message}
              </ErrorMessage>
            )}
            <PhoneInput
              value={phone}
              onChange={(value) => {
                handleInputChange("phone_number", value);
                setPhone(value);
              }}
              placeholder="Phone Number"
            />
            <input
              type="tel"
              {...register("phone_number")}
              style={{ display: "none" }}
            />
          </InputContainer>
          <InputContainer>
            <label>New password</label>
            {errors?.password?.message && (
              <ErrorMessage visible={errors?.password?.message}>
                {errors?.password?.message}
              </ErrorMessage>
            )}
            <InputWrap
              type="password"
              error={errors?.password?.message}
              {...register("password")}
            />
          </InputContainer>
        </Container>
        <BtnWrap>
          <button type="submit"> Save</button>
        </BtnWrap>
      </FormWrap>
      {/* <Title title={"Password"} fontSize={"24px"} /> */}
      {/* <FormWrap onSubmit={handleSubmitPass(submitFormPass)}>
        
        <Container>
          <InputContainer>
            <label>Old password</label>
            {errorsPass?.old_password?.message && (
              <ErrorMessage visible={errorsPass?.old_password?.message}>
                {errorsPass?.old_password?.message}
              </ErrorMessage>
            )}
            <InputWrap
              type="password"
              error={errorsPass?.password?.message}
              {...registerPass("old_password")}
            />
          </InputContainer>
          <InputContainer>
            <label>New password</label>
            {errorsPass?.password?.message && (
              <ErrorMessage visible={errorsPass?.password?.message}>
                {errorsPass?.password?.message}
              </ErrorMessage>
            )}
            <InputWrap
              type="password"
              error={errorsPass?.password?.message}
              {...registerPass("password")}
            />
          </InputContainer>
          <InputContainer>
            <label>Repeat new password</label>
            {errorsPass?.password_confirmation?.message && (
              <ErrorMessage
                visible={errorsPass?.password_confirmation?.message}
              >
                {errorsPass?.password_confirmation?.message}
              </ErrorMessage>
            )}
            <InputWrap
              type="password"
              error={errorsPass?.password_confirmation?.message}
              {...registerPass("password_confirmation")}
            />
          </InputContainer>
        </Container>
        <BtnWrap>
          <button type="submit">Save</button>
        </BtnWrap>
      </FormWrap> */}
    </Wrapper>
  );
};

export default MyProfile;
