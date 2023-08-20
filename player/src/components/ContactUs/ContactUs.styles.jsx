import styled from "styled-components";
export const Wrapper = styled.div`
  background: var(--color-dark-gray);
  border-radius: 12px;
  max-width: 784px;
  width: 100%;
  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: center;
    color: var(--color-white);
    padding-top: 32px;
  }
`;
export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 32px;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: var(--color-white);
    
    p {
      margin-top: 6px;
    }
  }
`;
