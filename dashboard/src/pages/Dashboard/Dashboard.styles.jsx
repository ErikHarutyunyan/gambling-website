import styled from "styled-components";

export const Wrapper = styled.section`
margin-bottom: 25px;
`;

export const HeadItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    flex: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
 
`;
export const BtnWrap = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  button {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-white);
    background-color: var(--color-dark-gray);
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid var(--color-blue);
  }
`;
