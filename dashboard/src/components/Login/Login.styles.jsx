import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--color-white);

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
`;

export const Container = styled.div`
  background: var(--color-dark-gray);
  border-radius: 12px;
  padding: 32px;
  opacity: 0.9;

  button[type="submit"] {
    width: 100%;
    background: var(--gradient-blue);
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-white);
    height: 51px;
  }
  .info {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: var(--color-white);
    span {
      cursor: pointer;
      color: var(--color-blue);
      padding-left: 6px;
    }
    margin-top: 16px;
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
`;

export const ErrorMessage = styled.div`
  color: red;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  position: absolute;
  top: 120%;
`;
export const ErrorWrap = styled.div`
  position: relative;
  div {
    position: inherit;
    text-align: center;
    margin-bottom: 5px;
  }
`;
export const InputEye = styled.div`
  position: relative;
  cursor: pointer;

  button {
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
  right: 10px;
  top: 10px;
`;
