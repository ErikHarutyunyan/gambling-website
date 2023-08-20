import styled from "styled-components";
export const Wrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;

`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
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
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 376px;
  width: 100%;
  label {
    display: block;
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  input {
    max-width: none;
    width: 100%;
  }
  &.btnWrap {
    display: flex;
    align-items: center;
    gap: 32px;
    flex-direction: row;
    
  }

`;