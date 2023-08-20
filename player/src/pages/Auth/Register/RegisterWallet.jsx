import React from 'react'
// Styles
import {
  ErrorMessage,
  InputColumns,
  InputContainer,
  InputWrap,
} from "../auth.styles";
import btcIcon from "../../../assets/images/btc.png";
import usdtIcon from "../../../assets/images/usdt.png";
import bnbIcon from "../../../assets/images/bnb.png";

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema_signUp_wallet } from '../authShema';
const RegisterWallet = ({
  closeModalRegister,
  openModalLogin,
  setAccountDetails,
  setVerifyEmail,
  setPersonalDetails,
}) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema_signUp_wallet),
  });

  const submitForm = (data) => {

    setVerifyEmail(true)
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {/* ----Next Form---- */}
      <InputContainer className="wallet">
        {errors?.btc?.message && (
          <ErrorMessage visible={errors?.btc?.message}>
            {errors?.btc?.message}
          </ErrorMessage>
        )}
        <img src={btcIcon} alt="btc" />
        <InputWrap {...register("btc")} placeholder="BTC" />
      </InputContainer>
      <InputContainer className="wallet">
        {errors?.usdt?.message && (
          <ErrorMessage visible={errors?.usdt?.message}>
            {errors?.usdt?.message}
          </ErrorMessage>
        )}
        <img src={usdtIcon} alt="usdt" />
        <InputWrap {...register("usdt")} placeholder="USDT" />
      </InputContainer>
      <InputContainer className="wallet">
        {errors?.bnb?.message && (
          <ErrorMessage visible={errors?.bnb?.message}>
            {errors?.bnb?.message}
          </ErrorMessage>
        )}
        <img src={bnbIcon} alt="bnb" />
        <InputWrap {...register("bnb")} placeholder="BNB" />
      </InputContainer>
      <p className="info">
        By clicking Sign Up I confirm that I am 21+ years old and accept the
        companies <span>“Responsible Gaming Policy”</span> &
        <span>“21+ Responsible Gaming”</span>
      </p>
      <button type="submit">Sign Up</button>
      <p className="info">
        You can Login
        <span
          onClick={() => {
            closeModalRegister();
            openModalLogin();
            setAccountDetails({});
            setPersonalDetails({});
          }}
        >
          here
        </span>
        .
      </p>
    </form>
  );
};

export default RegisterWallet