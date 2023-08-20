import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 512px;
  width: 100%;
  margin: 0 auto;
  background: var(--color-dark-gray);
  border: 1px solid var(--color-white);
  border-radius: 8px;
  text-align: center;
  padding: 24px;
  margin-top: 48px;
  > button {
    display: block;
  }
  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: center;
    color: var(--color-white);
    max-width: 342px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 32px;
  }
  button.goHome {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-white);
    background: var(--gradient-blue);
    transition: background 0.3s linear;
    padding: 12px 16px;
    border-radius: 8px;
    &.active {
      background: var(--gradient-blue);
    }
    :hover {
      transition: all 0.3s linear;
      opacity: 0.9;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  position: absolute;
  top: 100%;
`;

export const Form = styled.form`
  button {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-white);
    background: var(--gradient-blue);
    transition: background 0.3s linear;
    padding: 12px 16px;
    border-radius: 8px;
    &.active {
      background: var(--gradient-blue);
    }
    :hover {
      transition: all 0.3s linear;
      opacity: 0.9;
    }
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 32px;
  margin-top: 16px;
  label {
    display: block;
    text-align: left;
    width: 100%;
    margin-bottom: 4px;
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
  padding: 8px 16px;
  font-size: 16px;
  line-height: 24px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin: 0;
  background-color: var(--color-gray);
  ::placeholder {
    font-weight: 400;
    color: var(--color-white);
  }
`;
