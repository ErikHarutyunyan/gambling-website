import styled from "styled-components";
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 150px;
  padding-bottom: 24px;
  color: var(--color-white);
  gap: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  div, .platform {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap:32px;
    margin-top: 10px;
    a{
      text-decoration: underline;
    }
    }
`;
