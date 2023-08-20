import styled from "styled-components";
export const ImgWrap = styled.div`
  max-width: 200px;
  margin: 35px auto;
  img {
    display: block;
    width: 100%;
    object-fit: cover;
    height: auto;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > button {
    margin-left: 4px;
    margin-right: 8px;
  }
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
export const Value = styled.span`
  font-size: 78px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2px;
  font-family: "Courier New", Courier, monospace;
`;
export const Btn = styled.button`
  appearance: none;
  background: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: rgb(255 255 255);
  padding-bottom: 4px;
  cursor: pointer;
  background-color: rgb(50 49 52);
  border-radius: 2px;
  transition: all 0.15s;

  &:hover,
  &:focus {
    border: 2px solid rgba(0, 0, 0, 0.4);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const TextBox = styled.input`
  font-size: 32px;
  padding: 2px;
  width: 64px;
  text-align: center;
`;

export const AsyncBtn = styled.button`
  appearance: none;
  background: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: rgb(255 255 255);
  padding-bottom: 4px;
  cursor: pointer;
  background-color: rgb(50 49 52);
  border-radius: 2px;
  transition: all 0.15s;
  position: relative;

  &:after {
    content: "";
    background-color: rgba(0, 0, 0, 0.582);
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    transition: width 1s linear, opacity 0.5s ease 1s;
  }
  &:active:after {
    width: 0%;
    opacity: 1;
    transition: 0s;
  }
`;

