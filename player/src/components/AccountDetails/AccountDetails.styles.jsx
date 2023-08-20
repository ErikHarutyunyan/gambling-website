import styled from "styled-components";

export const Wrapper = styled.div`
  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin: 16px 0;
    text-align: left;
  }
  /* width: 100%;
  max-width: 372px; */
  form {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    label {
      display: block;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 4px;
      span {
        background: var(--gradient-blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    > div {
      width: 100%;
      max-width: 372px;
    }
  }
`;

export const Container = styled.div`
  background: var(--color-dark-gray);
  border-radius: 12px;
  padding: 32px;
`;
export const BtnWrap = styled.div`
  max-width: none !important;

  button[type="submit"] {
    display: block;
    width: 100%;
    max-width: 162px;
    margin-left: auto;
    border: 1px solid var(--color-blue);
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-white);
    padding: 12px 0;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 42px;
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
  
      background: #42464c;
    
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
    :disabled {
      background: #42464c;
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
  :disabled {
    background: #42464c;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  position: absolute;
  top: 120%;
`;
