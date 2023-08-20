import styled from "styled-components";
export const Wrapper = styled.div`
margin-bottom: 25px;
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
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
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
      padding: 15px 45px 16px 24px;

      border-right: 1px solid #fff;

      :last-child {
        border-right: 0;
      }
    }
    a {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color:var(--color-blue);
    }
  }

  input {
    width: 100%;
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

export const FormWrap = styled.div`
  margin-top: 16px;
  margin-bottom: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  form {
    label {
      display: block;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 4px;
    }
  }
`;
export const BtnWrap = styled.div`
  button {
    padding: 10px 24px;
    color: var(--color-white);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    background-color: var(--color-blue);
    border-radius: 8px;
    margin-top: 8px;
  }
`;
export const WalletWrap = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: var(--color-gray);
  padding: 8px 16px;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  hr {
    width: 1px;
    background-color: #42464c;
  }
  p {
    display: flex;
    flex-direction: column;
    text-align: center;
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 4px;
    }
  }
`;

export const ActionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;