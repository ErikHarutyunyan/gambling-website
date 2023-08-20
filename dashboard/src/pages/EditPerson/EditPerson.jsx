import React, { useCallback, useRef, useState } from "react";
// Styles
import "react-phone-number-input/style.css";
import {
  Wrapper,
  HeadWrap,
  FormWrap,
  BtnWrap,
  Container,
  InputContainer,
  ErrorMessage,
  InputWrap,
} from "./EditPerson.styles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import arrowBackImg from "../../assets/images/arrowBack.png";
import PhoneInput from "react-phone-number-input";
import { schema_edit } from "./schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserDetails, getUserDetails } from "../../app/features/user/userActions";
import { resetUserDetails, selectUser, setError, setMessage } from "../../app/features/user/userSlice";
import Spinner from "../../components/Spinner/Spinner";
import { formatDateMDY, notify } from "../../utils/utils";
import { ToastContainer } from "react-toastify";
const EditPerson = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState();
  const country = useRef("US");
  const { userDetails, loading,message } = useSelector(selectUser);
  console.log('message :', message);

  // const { state: roleState } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!id) {
    navigate(-1);
  }
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_edit, {
      stripUnknown: true,
      abortEarly: false,
    }),
    defaultValues: {
      full_name: userDetails?.full_name || "",
      user_name: userDetails?.user_name || "",
      email: userDetails?.email || null,
    },
  });
  const handleInputChange = useCallback(
    (name, val) => {
      setValue(name, val, { shouldDirty: true });
      clearErrors(name);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [phone]
  );

  useEffect(() => {
    dispatch(getUserDetails(id));
   return () => {
     dispatch(setError(null));
     dispatch(resetUserDetails(null));
   };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    useEffect(() => {
      if (message) {
        debugger
        notify(message);

        dispatch(setMessage(null));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message]);

  useEffect(() => {
    if (userDetails) {
      setValue("full_name", userDetails?.full_name);
      setValue("user_name", userDetails?.user_name);
      setValue("email", userDetails?.email);
      setValue("phone_number", userDetails?.phone_number);
      setPhone(userDetails?.phone_number);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails]);
  const submitForm = (data) => {
    let newData = { user_id: id };
    for (let key in data) {
      if (data[key]) {
        newData[key] = data[key];
      }
    }
    dispatch(changeUserDetails(newData));
  };

  if (loading) {
    return <Spinner />;
  }
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
        <h2>{userDetails?.full_name}</h2>
      </HeadWrap>
      <FormWrap onSubmit={handleSubmit(submitForm)}>
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
              placeholder={
                userDetails?.full_name ? userDetails?.full_name : "Full Name"
              }
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
              placeholder={userDetails?.email ? userDetails?.email : "Email"}
              {...register("email")}
            />
          </InputContainer>
          <InputContainer error={errors?.phoneNumber?.message}>
            <label>Phone</label>
            {errors?.phone_number?.message && (
              <ErrorMessage visible={errors?.phone_number?.message}>
                {errors?.phone_number?.message}
              </ErrorMessage>
            )}
            <PhoneInput
              value={phone}
              defaultCountry={country.current}
              onChange={(value) => {
                handleInputChange("phone_number", value);
                setPhone(value);
                country.current = "";
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
          {/* <InputContainer>
            <label>Sports Shares</label>
            {errors?.sportsShares?.message && (
              <ErrorMessage visible={errors?.sportsShares?.message}>
                {errors?.sportsShares?.message}
              </ErrorMessage>
            )}
            <InputWrap
              error={errors?.sportsShares?.message}
              placeholder="0"
              {...register("sportsShares")}
              type="number"
            />
          </InputContainer>
          <InputContainer>
            <label>Casino Shares</label>
            {errors?.casinoShares?.message && (
              <ErrorMessage visible={errors?.casinoShares?.message}>
                {errors?.casinoShares?.message}
              </ErrorMessage>
            )}
            <InputWrap
              error={errors?.casinoShares?.message}
              placeholder="0"
              {...register("casinoShares")}
              type="number"
            />
          </InputContainer> */}
          <InputContainer>
            <label>New Password</label>
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
          {/* <InputContainer>
            <label>Repeat Password</label>
            {errors?.confirmPwd?.message && (
              <ErrorMessage visible={errors?.confirmPwd?.message}>
                {errors?.confirmPwd?.message}
              </ErrorMessage>
            )}
            <InputWrap
              error={errors?.confirmPwd?.message}
              placeholder="Repeat new password"
              {...register("confirmPwd")}
            />
          </InputContainer> */}
          <InputContainer>
            <label>Created</label>

            <InputWrap
              disabled
              placeholder={`${formatDateMDY(userDetails?.date_time)}`}
              type="text"
            />
          </InputContainer>
        </Container>
        <BtnWrap>
          {/* <button>Cancel</button> */}
          <button type="submit">Edit</button>
        </BtnWrap>
      </FormWrap>
    </Wrapper>
  );
};

export default EditPerson;
