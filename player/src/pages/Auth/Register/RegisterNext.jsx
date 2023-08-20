import React, { useCallback, useState } from "react";
// Styles
import {
  ErrorMessage,
  InputColumns,
  InputContainer,
  InputWrap,
} from "../auth.styles";
// Images
import downArray from "../../../assets/images/Down_Arrow.png";
import userIcon from "../../../assets/images/user.png";
import { CountryDropdown } from "react-country-region-selector";
import { schema_signUp_second } from "../authShema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import "react-phone-number-input/style.css";
import RegisterWallet from "./RegisterWallet";

const RegisterNext = ({
  accountDetails,
  closeModalRegister,
  openModalLogin,
  setAccountDetails,
  setVerifyEmail,
}) => {
  const [country, setCountry] = useState("");
  const [file, setFile] = useState("");
  const [personalDetails, setPersonalDetails] = useState();
  const [registerWaller, setRegisterWallet] = useState(false);
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema_signUp_second, {
      stripUnknown: true,
      abortEarly: false,
    }),
    defaultValues: {
      image: null,
    },
  });
  const { onChange: onChangeImage } = register("image");

  const submitForm = (data) => {

    setPersonalDetails({ ...data, ...accountDetails });
    setRegisterWallet(true)
    // setVerifyEmail(true);
    // setAccountDetails({})
  };
  const handleInputChange = useCallback(
    (name, val) => {
      setValue(name, val, { shouldDirty: true });
      clearErrors(name);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [country]
  );

  return (
    <>
      {!registerWaller ? (
        <form onSubmit={handleSubmit(submitForm)}>
          {/* ----Next Form---- */}
          <InputContainer>
            {errors?.firstName?.message && (
              <ErrorMessage visible={errors?.firstName?.message}>
                {errors?.firstName?.message}
              </ErrorMessage>
            )}
            <InputWrap {...register("firstName")} placeholder="First name" />
          </InputContainer>

          <InputContainer>
            {errors?.lastName?.message && (
              <ErrorMessage visible={errors?.lastName?.message}>
                {errors?.lastName?.message}
              </ErrorMessage>
            )}
            <InputWrap {...register("lastName")} placeholder="Last name" />
          </InputContainer>
          <InputContainer>
            {errors?.country?.message && (
              <ErrorMessage visible={errors?.country?.message}>
                {errors?.country?.message}
              </ErrorMessage>
            )}
            <InputWrap
              {...register("country")}
              placeholder="Country"
              style={{ display: "none" }}
            />
            <CountryDropdown
              value={country}
              onChange={(val) => {
                handleInputChange("country", val);
                setCountry(val);
              }}
              style={{
                background: `url(
                  ${downArray}
                ) no-repeat`,
              }}
              id="country"
            />
          </InputContainer>
          <InputColumns>
            <p>DOB</p>
            <InputContainer className="inputItems">
              <InputContainer>
                {errors?.day?.message && (
                  <ErrorMessage visible={errors?.day?.message}>
                    {errors?.day?.message}
                  </ErrorMessage>
                )}
                <InputWrap {...register("day")} placeholder="Day" />
              </InputContainer>
              <InputContainer>
                {errors?.mount?.message && (
                  <ErrorMessage visible={errors?.mount?.message}>
                    {errors?.mount?.message}
                  </ErrorMessage>
                )}
                <InputWrap {...register("mount")} placeholder="Mount" />
              </InputContainer>
              <InputContainer>
                {errors?.year?.message && (
                  <ErrorMessage visible={errors?.year?.message}>
                    {errors?.year?.message}
                  </ErrorMessage>
                )}
                <InputWrap {...register("year")} placeholder="Year" />
              </InputContainer>
            </InputContainer>
          </InputColumns>
          <InputColumns>
            <p>Profile Photo</p>

            <InputContainer className="inputImage">
              <img
                src={file ? URL.createObjectURL(file) : userIcon}
                alt="User"
              />
              <label htmlFor="user-image">Upload profile image</label>
              {errors?.image?.message && (
                <ErrorMessage visible={errors?.image?.message}>
                  {errors?.image?.message}
                </ErrorMessage>
              )}
              <InputWrap
                type="file"
                id="user-image"
                {...register("image")}
                placeholder="Image"
                style={{ display: "none" }}
                onChange={(e) => {
                  onChangeImage(e);
                  setFile(e.target.files[0]);
                }}
              />
            </InputContainer>
          </InputColumns>
          <button type="submit">Next</button>
          <p className="info">
            You can Login
            <span
              onClick={() => {
                closeModalRegister();
                openModalLogin();
                setAccountDetails({});
              }}
            >
              here
            </span>
            .
          </p>
        </form>
      ) : (
        <RegisterWallet
          setVerifyEmail={setVerifyEmail}
          personalDetails={personalDetails}
          closeModalRegister={closeModalRegister}
          openModalLogin={closeModalRegister}
          setPersonalDetails={setPersonalDetails}
          setAccountDetails={setAccountDetails}
        />
      )}

      {/* </Container> */}
    </>
  );
};

export default RegisterNext;
