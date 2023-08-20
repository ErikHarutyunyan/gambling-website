import styled from "styled-components";

export const Wrapper = styled.section``;

export const HeadWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  img {
    cursor: pointer;
    object-fit: cover;
  }
  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`;

export const FormWrap = styled.form`
  width: 100%;
  max-width: 792px;
  margin: 16px 0;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
 
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 32px;
  button[type="submit"] {
    background: var(--gradient-blue);
    border: none;
  }
  button {
    border: 1px solid var(--color-blue);
    padding: 10px 50px;
    border-radius: 8px;
    color: var(--color-white);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    transform: var(--transition);
    margin-top: 20px;
  }
  button:hover {
    opacity: 0.9;
    transform: var(--transition);
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-top: 16px;
  .switchWrap {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 29px;
    height: 17px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 2px;
    background-color: white;
    transition: all 0.4s ease 0s;
  }

  input + .slider {
    background: #4caf50;
  }


  input:checked + .slider:before {
    transform: translateX(8px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;


export const InputContainer = styled.div`
  max-width: 376px;
  width: 100%;
  position: relative;

  label {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 4px;
  }
  .PhoneInput {
    outline: ${(props) =>
      props.error ? "1px solid red" : "1px solid var(--color-white)"};
    display: flex;
    align-items: center;
    outline: 1px solid var(--color-white);
    border-radius: 8px;
    background-color: var(--color-dark-gray);
    border: none;
    color: var(--color-white);
    width: 100%;
    padding: 8px 40px 8px 16px;
    min-height: 40px;
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
  select {
    outline: ${(props) =>
      props.error ? "1px solid red" : "1px solid var(--color-white)"};
    border-radius: 8px;
    background-color: var(--color-dark-gray);
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
  input:disabled {
    background: #42464c;
    color: var(--color-white);
    opacity: 1;
    ::placeholder {
      color: var(--color-white);
    }
  }
`;

export const InputWrap = styled.input`
  outline: ${(props) =>
    props.error ? "1px solid red" : "1px solid var(--color-white)"};
  width: 100%;
  height: 40px;
  color: var(--color-white);
  background-color: var(--color-dark-gray);
  border-radius: 8px;
  padding: 8px 9px 8px 16px;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  position: absolute;
  top: 110%;
`;

