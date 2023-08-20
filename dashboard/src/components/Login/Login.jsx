import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema_signIn } from "./schema";
import {
  Container,
  ErrorMessage,
  ErrorWrap,
  EyeWrap,
  InputContainer,
  InputEye,
  InputWrap,
  Wrapper,
} from "./Login.styles";
import eyeShow from "../../assets/images/eyeShow.png";
import eyeHide from "../../assets/images/eyeHide.png";
import PlatformMost from "../PlatformMost";

import { selectUser, setError, setMessage } from "../../app/features/user/userSlice";
import { userLogin } from "../../app/features/user/userActions";
import Spinner from "../Spinner/Spinner";
import { notify } from "../../utils/utils";
import { ToastContainer } from "react-toastify";

const Login = ({ closeModalLogin, openModalForgot }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const { loading, userInfo, error, message } = useSelector(selectUser);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/dashboard";

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_signIn),
  });


  // // redirect authenticated user to profile screen
  useEffect(() => {

    if (userInfo) {
      dispatch(setMessage(null));
      navigate(fromPage, { replace: true });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, userInfo])

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


  const submitForm = (data) => {

    // navigate(DASHBOARD);
    dispatch(userLogin(data))
    // TokenService.setUser(data);
    // Demonstration
    //  navigate(fromPage, { replace: true });
    // navigate('/dashboard')
  };
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
      <Container>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(submitForm)}>
          {error && (
            <ErrorWrap>
              <ErrorMessage visible={error}>{error}</ErrorMessage>
            </ErrorWrap>
          )}
          <InputContainer>
            {errors?.user_name?.message && (
              <ErrorMessage visible={errors?.user_name?.message}>
                {errors?.user_name?.message}
              </ErrorMessage>
            )}
            <InputWrap
              {...register("user_name")}
              placeholder="Username"
              error={errors?.user_name?.message}
            />
          </InputContainer>
          <InputContainer>
            {errors?.password?.message && (
              <ErrorMessage visible={errors?.password?.message}>
                {errors?.password?.message}
              </ErrorMessage>
            )}
            <InputEye>
              <InputWrap
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                autoComplete="on"
                error={errors?.password?.message}
              />
              <EyeWrap
                className="show-reset-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <img
                    src={eyeShow}
                    className="show-password-eye"
                    alt="show password eye"
                  />
                ) : (
                  <img
                    src={eyeHide}
                    className="hide-password-eye"
                    alt="hide password eye"
                  />
                )}
              </EyeWrap>
              <button
                type="button"
                onClick={() => {
                  closeModalLogin();
                  openModalForgot();
                }}
              >
                Forgot password
              </button>
            </InputEye>
          </InputContainer>
          <button type="submit">{loading ? <Spinner /> : "Login"}</button>
        </form>
      </Container>
      <PlatformMost />
    </Wrapper>
  );
};

export default Login;
