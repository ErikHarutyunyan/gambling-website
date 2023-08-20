import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: var(--color-dark-gray);
  border-radius: 12px;
  max-width: 376px;
  width: 100%;
`;

export const Container = styled.div`
  padding: 24px;
  h2 {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 8px;
  }
  p {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 12px;
  }
`;


export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border-top: 1px solid #42464c;
  padding-top: 12px;
  padding-bottom: 12px;
  .line {
    color: #42464c;
  }
  .infoName {
    max-width: 152px;
    width: 100%;
  }
`;