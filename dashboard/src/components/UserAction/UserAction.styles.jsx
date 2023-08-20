import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap:16px;
  margin-left: 32px;
`;
export const CircleName = styled.div`
  background-color: var(--color-dark-gray);
  border-radius: 50%;
  display: flex;
  align-items: center;
  width: 60px;
  height: 60px;
  justify-content: center;
  span {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
`;
export const InfoName = styled.div`
  p {
    padding: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    :last-child {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #757a80;
    }
  }
`;