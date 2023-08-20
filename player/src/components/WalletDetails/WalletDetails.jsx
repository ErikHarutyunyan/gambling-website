import React from 'react'

// Styles
import {
  ErrorMessage,
  InputContainer,
  InputWrap,
  Wrapper,
  BtnWrap,
} from "./WalletDetails.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema_wallet } from './schema';

import btcIcon from "../../assets/images/btc.png";
import usdtIcon from "../../assets/images/usdt.png";
import bnbIcon from "../../assets/images/bnb.png";

const WalletDetails = () => {
   const {
     register,
     handleSubmit,
     clearErrors,
     formState: { errors },
     setValue,
   } = useForm({
     mode: "onBlur",
     resolver: yupResolver(schema_wallet, {
       stripUnknown: true,
       abortEarly: false,
     }),
   });
    const submitForm = (data) => {

    };
  return (
    <Wrapper>
      <p>Wallets details</p>
      <form onSubmit={handleSubmit(submitForm)}>
        <InputContainer className="wallet">
          <label>BTC wallet address</label>
          {errors?.btc?.message && (
            <ErrorMessage visible={errors?.btc?.message}>
              {errors?.btc?.message}
            </ErrorMessage>
          )}
          <img src={btcIcon} alt="btc" />
          <InputWrap {...register("btc")}  />
        </InputContainer>
        <InputContainer className="wallet">
          <label>USDT wallet address</label>
          {errors?.usdt?.message && (
            <ErrorMessage visible={errors?.usdt?.message}>
              {errors?.usdt?.message}
            </ErrorMessage>
          )}
          <img src={usdtIcon} alt="usdt" />
          <InputWrap {...register("usdt")}  />
        </InputContainer>
        <InputContainer className="wallet">
          <label>BNB wallet address</label>
          {errors?.email?.message && (
            <ErrorMessage visible={errors?.bnb?.message}>
              {errors?.bnb?.message}
            </ErrorMessage>
          )}
          <img src={bnbIcon} alt="bnb" />
          <InputWrap {...register("bnb")}  />
        </InputContainer>
        <BtnWrap>
          <button type="submit">Sava change</button>
        </BtnWrap>
      </form>
    </Wrapper>
  );
}

export default WalletDetails