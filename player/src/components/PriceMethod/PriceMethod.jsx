import React from 'react'
// Styles
import { Wrapper, Container, Form, InputContainer, InputWrap, ErrorMessage } from "./PriceMethod.styles";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { schema_price } from './schema';
import { useNavigate } from 'react-router-dom';
import { DEPOSIT_PAYMENT } from '../../router/route-path';
const FormPrice = ({title}) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_price),
  });
  const submitForm = (data) => {
    navigate(DEPOSIT_PAYMENT,{state:title});

  };
  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <InputContainer>
        {errors?.price?.message && (
          <ErrorMessage visible={errors?.price?.message}>
            {errors?.price?.message}
          </ErrorMessage>
        )}
        <span>$</span>
        <InputWrap type='number' placeholder="50.00" {...register("price")} />
        <select>
          <option value="">USD</option>
        </select>
        <p>min 50.00 USD, max 200000 USD</p>
      </InputContainer>
      <button type="submit">Confirm</button>
    </Form>
  );
}

const PriceMethod = ({title='',desc=''}) => {
  
  return (
    <Wrapper>
      <Container>
        <h2>{title}</h2>
        <p>{desc}</p>
        <FormPrice title={title} />
      </Container>
    </Wrapper>
  );
}

export default PriceMethod