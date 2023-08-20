import styled from "styled-components";
export const Wrapper = styled.div`
  background: var(--color-dark-gray);
  border-radius: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  padding:16px 0;
  margin-top: 30px;
  a {
    text-decoration: underline;
  }
  p {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 25px;
    margin-top: 5px;
  }
`;
