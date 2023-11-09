import styled from "styled-components";

export const Wrapper = styled.section``


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
  &>div {
    flex: 1;
    width: none;
    max-width: none;
  }
  &.total {
    margin-top: 32px;
  }
`;

export const StatsWrap = styled.div``;
