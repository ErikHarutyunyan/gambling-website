import styled from "styled-components";
export const Wrapper = styled.div`
  p {
    margin-top: 24px;
    margin-bottom: 17px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
  table {
    border-spacing: 0;
    width: 100%;
    border: 1px solid var(--color-white);
    border-radius: 8px;
    border-bottom-right-radius: 0px;
    thead {
      border-radius: 8px;
      th {
        border-bottom: 1px solid var(--color-white);
      }
      tr {
        th {
          :first-child {
            border-top-left-radius: 8px;
          }
          :last-child {
            border-top-right-radius: 8px;
          }
        }
      }
    }
    tbody {
      td {
        border-bottom: 1px solid var(--color-white);
        background-color: var(--color-dark-gray);
      }
      tr:last-child {
        td {
          :first-child {
            border-bottom-left-radius: 8px;
          }
          :last-child {
            border-bottom-right-radius: 8px;
          }
        }
      }
    }
    tr {
      background-color: var(--color-gray);
      border-radius: 8px;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 16px 64px 16px 24px;
      /* border: 1px solid var(--color-white); */
      /* border: 1px solid var(--color-white); */
      /* border-radius: 8px; */
      border-right: 1px solid #fff;

      :last-child {
        border-right: 0;
      }
    }
  }
  
  input {
    width: 100%;
    max-width: 240px;
    height: 40px;
    color: var(--color-white);
    background-color: var(--color-dark-gray);
    border: 1px solid var(--color-white);
    border-radius: 8px;
    padding: 8px 9px 8px 16px;
    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }
`;
export const InputDate = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1;
  flex-wrap: wrap;
`;

export const FooterTable = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  /* justify-content: flex-end; */
  border: 1px solid #ffffff;
  border-top: none;
  border-radius: 0px 0px 8px 8px;
  max-width: 378px;
  width: 100%;
  div {
    margin: 0px;
    padding: 16px 64px 16px 24px;
  }
`;
export const ActionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;
export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  button {
    padding: 8px 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid var(--color-blue);
    color: var(--color-white);
    border-radius: 8px;
    background-color: var(--color-dark-gray);
  }
`;