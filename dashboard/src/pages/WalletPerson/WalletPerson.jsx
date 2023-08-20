import React, { useEffect } from "react";
// Styles
import {
  BtnWrap,
  Container,
  FormWrap,
  HeadWrap,
  Wrapper,
  InfoWrap,
  InputContainer,
  ErrorMessage,
  InputWrap,
} from "./WalletPerson.styles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// Images
import arrowBackImg from "../../assets/images/arrowBack.png";
import CashCoinBalance from "../../components/CashCoinBalance/CashCoinBalance";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schema_wallet } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import {
  coinTransfer,
  coinWithdraw,
  getUserDetails,
  // sendWallet,
} from "../../app/features/user/userActions";
import {
  resetUserDetails,
  selectUser,
  setError,
  setMessage,
} from "../../app/features/user/userSlice";
import { ToastContainer } from "react-toastify";
import { notify } from "../../utils/utils";
import Spinner from "../../components/Spinner/Spinner";
const WalletPerson = () => {
  const { id } = useParams();
  const [switchFlag, setSwitchFlag] = useState(true);
  const { userInfo, message, loading, userDetails } = useSelector(selectUser);
  const { state } = useLocation();
  const [ info]= useState(state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!id) {
    navigate(-1);
  }
  const {
    register,
    handleSubmit,
    // clearErrors,
    formState: { errors },
    // setValue,
    reset,
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_wallet, {
      stripUnknown: true,
      abortEarly: false,
    }),
  });
  const submitForm = async (data) => {
    // await dispatch
    let ballance = switchFlag
      ? { ...data, sender: userInfo?.user.id, recipient: id }
      : {
          ...data,
          recipient: userInfo?.user.id,
          sender: id,
        };

    let message = switchFlag
      ? { message: "Deposit Done" }
      : { message: "WithDraw Done" };

    if (switchFlag) {
      dispatch(coinTransfer({ ballance, message, switchFlag }));
    } else {
      dispatch(coinWithdraw({ ballance, message, switchFlag }));
    }
    reset();
  };
  useEffect(() => {
    if (message) {
      notify(message);
      dispatch(getUserDetails(info.id))
      dispatch(setMessage(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  useEffect(() => {
    return () => {
      dispatch(setError(null));
      dispatch(setMessage(null));
      dispatch(resetUserDetails(null));
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
        <h2>{info?.user_name}</h2>
      </HeadWrap>
      <InfoWrap>
        <CashCoinBalance
          disableCase={true}
          cash={userDetails?.balance ? userDetails?.balance : info?.balance}
        />
        <div className="switchWrap">
          <p>WithDraw</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={switchFlag}
              onChange={() => setSwitchFlag((prev) => !prev)}
            />
            <span className="slider round"></span>
          </label>
          <p>Deposit</p>
        </div>
      </InfoWrap>
      <FormWrap onSubmit={handleSubmit(submitForm)}>
        <Container>
          <InputContainer>
            <label>Cashable</label>
            {errors?.amount?.message && (
              <ErrorMessage visible={errors?.amount?.message}>
                {errors?.amount?.message}
              </ErrorMessage>
            )}

            <InputWrap
              error={errors?.amount?.message}
              placeholder="0"
              {...register("amount")}
            />
          </InputContainer>
          {/* <InputContainer>
            <label>Non Cashable</label>

            {errors?.nonCashable?.message && (
              <ErrorMessage visible={errors?.nonCashable?.message}>
                {errors?.nonCashable?.message}
              </ErrorMessage>
            )}

            <InputWrap
              error={errors?.nonCashable?.message}
              placeholder="0"
              // {...register("Non Cashable")}
            />
          </InputContainer> */}
        </Container>
        <BtnWrap>
          <button type="submit">
            {loading ? <Spinner /> : switchFlag ? "Deposit" : "Withdraw"}
          </button>
        </BtnWrap>
      </FormWrap>
    </Wrapper>
  );
};

export default WalletPerson;
