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
    text-transform: uppercase;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    margin-bottom: 24px;
    color: var(--color-white);
  }
`;

export const Container = styled.div``;

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
      opacity: .9;
    }
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 42px;
  span {
    position: absolute;
    top: 18%;
    left: 3%;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
  select {
    color: var(--color-white);
    border: 1px solid var(--color-white);
    border-radius: 8px;
    background: var(--color-dark-gray);
    border-radius: 8px;
    min-height: 42px;
    position: absolute;
    right: 4%;
    top: 18%;
  }
  p {
    text-align: left;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
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
  padding: 20px 40px 20px 43px;
  font-size: 32px;
  line-height: 42px;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #757a80;
    font-size: 32px;
    line-height: 42px;
  }
`;