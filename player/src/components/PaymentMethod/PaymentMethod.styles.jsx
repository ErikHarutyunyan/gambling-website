import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 512px;
  width: 100%;
  margin: 0 auto;
  background: #181b20;
  border: 1px solid #ffffff;
  border-radius: 8px;
  text-align: center;
  padding: 24px;
  margin-top: 48px;
  button {
    text-align: left;
    width: 100%;
  }
  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: center;
    color: #ffffff;
    max-width: 342px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 16px;
    text-transform: uppercase;
  }
  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;

    text-align: center;
    margin-top: 32px;
    margin-bottom: 16px;
    color: #ffffff;
  }
`;

export const PaymentBlock = styled.div`
  background: #181b20;
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  max-width: 133px;
  width: 100%;
  min-height: 111px;
  &.localMobile {
    max-width: 208px;
  }
  cursor: pointer;
  p {
    margin-top: 4px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
  }
  &.credit {
    margin: 0 auto;
  }
`;

export const PaymentBlocks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  text-align: center;
  justify-content: center;
`;