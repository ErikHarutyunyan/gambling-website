import styled from "styled-components";
export const Wrapper = styled.div`
  background: var(--color-dark-gray);
  border-radius: 8px;
`;

export const Container = styled.div`
  display: flex;

  width: 100%;
  padding: 8px 16px;
  gap: 12px;
  & .line {
    width: 1px;
    background-color: #42464c;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  
`;