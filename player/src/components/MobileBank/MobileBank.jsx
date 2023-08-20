import React, { useState } from 'react'
// Styles
import {ErrorMessage, Form, InputContainer, InputWrap, Wrapper} from "./MobileBank.styles"
import { LeftArrow } from '../Icons/Icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema_phoneNumber, schema_transaction } from './schema';
import Subheading from '../Subheading';
const MobileBank = () => {
  const navigate = useNavigate()
  const {state:bank} = useLocation();
  const [phoneNumber,setPhoneNumber] = useState(null)
  const [formFlag,setFormFlag] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_phoneNumber),
  });

  const {
    register: registerTrans,
    handleSubmit: handleSubmitTrans,
    formState: { errors: errorsTrans },
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_transaction),
  });
  const submitForm = (data) => {
    setPhoneNumber(data);
    reset()
  };
  const submitFormTrans = (data) => {
    setFormFlag(true)

  }
  
  return (
    <>
    <Subheading />
      <Wrapper>
        <button
          onClick={() => {
            if (phoneNumber) {
              setPhoneNumber(null);
              return;
            }
            navigate(-1);
          }}
        >
          <LeftArrow />
        </button>
        <h2>PAY WITH {bank.toLowerCase()}</h2>
        {!phoneNumber ? (
          <Form onSubmit={handleSubmit(submitForm)} autoComplete="off">
            <InputContainer>
              {errors?.phone?.message && (
                <ErrorMessage visible={errors?.phone?.message}>
                  {errors?.phone?.message}
                </ErrorMessage>
              )}
              <label>Mobile Number</label>
              <InputWrap
                type="number"
                placeholder="Type your mobile number"
                {...register("phone")}
              />
            </InputContainer>
            <button type="submit">Next</button>
          </Form>
        ) : !formFlag ? (
          <Form
            onSubmit={handleSubmitTrans(submitFormTrans)}
            autoComplete="off"
          >
            <InputContainer>
              {errorsTrans?.transaction?.message && (
                <ErrorMessage visible={errorsTrans?.transaction?.message}>
                  {errorsTrans?.transaction?.message}
                </ErrorMessage>
              )}
              <label>Transaction ID</label>
              <InputWrap
                type="text"
                placeholder="Type your transaction ID of your deposit"
                {...registerTrans("transaction")}
              />
            </InputContainer>
            <button type="submit">Submit</button>
          </Form>
        ) : (
          <>
            <p>
              Thank you. We will check this request and disburse the coins to
              your account after check.
            </p>
            <button className="goHome" onClick={() => navigate("/")}>
              Go home
            </button>
          </>
        )}
      </Wrapper>
    </>
  );
}

export default MobileBank