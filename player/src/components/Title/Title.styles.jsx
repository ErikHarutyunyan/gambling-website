import styled from "styled-components";
export const Wrapper = styled.h2`
  text-align: ${(props) => props?.textAlign || "left"};
  color: ${(props) => props?.color || "var(--color-white)"};
  font-size: ${(props) => props?.fontSize || "32px"};
  font-weight: ${(props) => props?.fontWeigh || "600"};
  line-height:  ${(props) => props?.lineHeight || "42px"};
`;