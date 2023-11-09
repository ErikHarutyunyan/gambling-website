import styled from "styled-components";
import { device } from "../../themes/Breakpoints";
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
  @media ${device.laptopM} {
    h2 {
      font-size: 25px;
      line-height: 30px;
    }
  }
`;
export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 32px;
  gap: 40px;
  flex-wrap: wrap;
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
  canvas {
    width: 110px !important;
    height: 110px !important;
  }

  @media ${device.tabletL} {
    canvas {
      width: 80px !important;
      height: 80px !important;
    }
  }
`;
