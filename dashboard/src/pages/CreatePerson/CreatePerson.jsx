import React, { useCallback, useState } from "react";
// Styles
import "react-phone-number-input/style.css";
import {
  Wrapper,
  HeadWrap,
  FormWrap,
  BtnWrap,
  Container,
  ErrorMessage,
  InputContainer,
  InputWrap,
  ErrorWrap,
} from "./CreatePerson.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import arrowBackImg from "../../assets/images/arrowBack.png";
import { useForm } from "react-hook-form";
import { schema_create } from "./schema";
import PhoneInput from "react-phone-number-input";
import { useDispatch, useSelector } from "react-redux";
import {
  createAgent,
  createPlayer,
  createSuperAgent,
} from "../../app/features/user/userActions";
import { useEffect } from "react";
import { notify, roles } from "../../utils/utils";
import {
  selectUser,
  setError,
  setMessage,
} from "../../app/features/user/userSlice";
import Spinner from "../../components/Spinner/Spinner";
import { ToastContainer } from "react-toastify";
const CreatePerson = () => {
  const { state: roleState } = useLocation();
  const { message, loading, error } = useSelector(selectUser);

  const [phone, setPhone] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_create, {
      stripUnknown: true,
      abortEarly: false,
    }),
  });

  const handleInputChange = useCallback(
    (name, val) => {
      setValue(name, val, { shouldDirty: true });
      clearErrors(name);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [phone]
  );
  const submitForm = (data) => {
    if (roleState.role === roles.admin) {
      if (roleState.position === roles.super_agent) {
        dispatch(createSuperAgent(data));
      }
      if (roleState.position === roles.agent) {
        dispatch(createAgent(data));
      }
      if (roleState.position === roles.player) {
        dispatch(createPlayer(data));
      }
    }
    if (roleState.role === roles.super_agent) {
      if (roleState.position === roles.agent) {
        dispatch(createAgent(data));
      }
      if (roleState.position === roles.player) {
        dispatch(createPlayer(data));
      }
    }
    if (roleState.role === roles.agent) {
      dispatch(createPlayer(data));
    }
    reset();
  };
  useEffect(() => {
    if (message) {
      notify(message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  useEffect(() => {
    return () => {
      dispatch(setError(null));
      dispatch(setMessage(null));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper>
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
      <HeadWrap>
        <img src={arrowBackImg} alt="arrow" onClick={() => navigate(-1)} />
        <h2>Created {roleState?.title}</h2>
      </HeadWrap>
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
            <label>User name</label>
            {errors?.user_name?.message && (
              <ErrorMessage visible={errors?.user_name?.message}>
                {errors?.user_name?.message}
              </ErrorMessage>
            )}
            <InputWrap
              error={errors?.user_name?.message}
              placeholder="Create username"
              {...register("user_name")}
            />
          </InputContainer>
          <InputContainer>
            <label>Password</label>
            {errors?.password?.message && (
              <ErrorMessage visible={errors?.password?.message}>
                {errors?.password?.message}
              </ErrorMessage>
            )}
            <InputWrap
              type="password"
              error={errors?.password?.message}
              placeholder="Create password"
              {...register("password")}
              autoComplete="false"
            />
          </InputContainer>
        </Container>
        <BtnWrap>
          <button>Cancel</button>
          <button type="submit">{loading ? <Spinner /> : "Save"}</button>
        </BtnWrap>
      </FormWrap>
    </Wrapper>
  );
};

export default CreatePerson;
