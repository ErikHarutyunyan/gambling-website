import styled from "styled-components";
import { device } from "../../themes/Breakpoints";

export const Wrapper = styled.div`
  color: var(--color-white);
  max-width: 515px;
  width: 100%;

  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 24px;
    text-transform: uppercase;
    text-align: center;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
    text-align: center;
  }

  @media ${device.laptopM} {
    max-width: 400px;
    h2 {
      font-size: 25px;
      line-height: 30px;
    }
  }
  @media ${device.mobileX} {
    max-width: 290px;
    h2 {
      font-size: 18px;
      line-height: 30px;
    }
  }
`;

export const Container = styled.div`
  background: var(--color-dark-gray);
  border-radius: 12px;
  padding: 32px;

  button[type="submit"] {
    width: 100%;
    background: var(--gradient-blue);
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-white);
    padding: 12px 0;
  }
  .info {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: var(--color-white);
    a {
      cursor: pointer;
      color: var(--color-blue);
      padding-left: 6px;
    }
    margin-top: 16px;
  }
  @media ${device.mobileX} {
    button[type="submit"] {
      font-size: 16px;
      padding: 5px 0;
    }
  }
`;
export const InputColumns = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-white);
  }
  
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 42px;
    input {
      padding: 8px 40px 8px 20px;
    }
  
  .PhoneInput {
    display: flex;
    align-items: center;
    outline: 1px solid var(--color-white);
    border-radius: 8px;
    background-color: transparent;
    border: none;
    color: var(--color-white);
    width: 100%;
    padding: 8px 40px 8px 16px;
    min-height: 40px;
  }
  &.inputItems {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 0;
  }
  &.inputImage {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-direction: row;
    img {
      display: block;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }
    & > div {
      margin-bottom: 0;
    }
    label {
      cursor: pointer;
    }
  }

  select {
    outline: ${(props) =>
      props.error ? "1px solid red" : "1px solid var(--color-white)"};
    border-radius: 8px;
    background-color: transparent;
    border: none;
    color: var(--color-white);
    width: 100%;
    padding: 8px 40px 8px 16px;
    min-height: 40px;
    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--color-white);
    }
    option {
      color: var(--color-dark-gray);
    }
  }
  input[type="tel"] {
    border-radius: 8px;
    background-color: transparent;
    border: none;
    color: var(--color-white);
    width: 100%;
    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--color-white);
    }
  }
`;

export const InputWrap = styled.input`
  outline: ${(props) =>
    props.error ? "1px solid red" : "1px solid var(--color-white)"};
  border-radius: 8px;
  background-color: transparent;
  border: none;
  color: var(--color-white);
  width: 100%;
  padding: 8px 40px 8px 16px;
  min-height: 40px;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-white);
  }
  @media ${device.mobileX} {
    min-height: 30px;
    padding: 7px 40px 7px 16px;
    font-size: 14px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  position: absolute;
  top: 120%;
  &.error-login {
    text-align: center;
    position: inherit;
    margin-bottom: 10px;
    font-weight: 600;
  }
`;

export const InputEye = styled.div`
  position: relative;
  cursor: pointer;

  a {
    text-align: right;
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-white);
    margin-left: auto;
    margin-top: 4px;
  }
`;

export const EyeWrap = styled.div`
  position: absolute;
  right: 3%;
  top: 14%;
`;
