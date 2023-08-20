import styled from "styled-components";
export const Wrapper = styled.div`
  position: fixed;
  z-index: 99;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #21252a80;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.1s linear;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

`;

export const ContainerChildren = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
  transform: scale(${(props) => (props.isOpen ? 1 : 0.8)});
  transition: transform 0.3s linear;
`;

export const BtnWrap = styled.div`
  cursor: pointer;
  background: var(--color-dark-gray);
  border-radius: 50%;
  padding: 5px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

`;