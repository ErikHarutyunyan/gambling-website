import styled from "styled-components";
import { device } from "../../themes/Breakpoints";

export const Wrapper = styled.section``

export const PaginationWrap = styled.div`
  padding: 50px 0;
  .pagination {
    display: flex;
    width: 100%;
    max-width: 200px;
    align-items: center;
    justify-content: center;
    background: rgb(24, 27, 32);
    opacity: 0.8;
    border-radius: 12px;
    padding: 13px 12px;
    justify-content: space-between;
    margin: 0 auto;
    
  }
  div {
    display: flex;
    font-size: 18px;
    line-height: 27px;
    color: var(--color-white);
    display: flex;
    align-items: center;
    gap: 5px;
    p:first-child{
      font-size: 32px;
      line-height: 40px;
      font-weight: 500;
    }
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 60px;
  position: relative;
  background-color: #151515;
  border-radius: 8px;
  margin-top: 60px;
  padding-bottom: 60px;
  & .main-container {
    padding-top: 0;
  }
  @media ${device.laptopL} {
    max-width: 900px;
  }
`;

export const TypeWrap = styled.div`
display:flex;
align-items: center;
gap: 30px;
justify-content: center;
flex-wrap: wrap;
div {
color: var(--white, #FFF);
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 27px;
cursor: pointer;
text-transform: capitalize;
&.active {
  color:var(--color-blue);
}
}
padding-bottom: 30px;

`;