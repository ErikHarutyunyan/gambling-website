import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 512px;
  width: 100%;
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 17px;
  }
  table {
    border-spacing: 0;
    width: 100%;
    border: 1px solid var(--color-white);
    border-radius: 8px;
    thead {
      border-radius: 8px;
      th {
        border-bottom: 1px solid var(--color-white);
      }
      tr {
        th {
          :first-child {
            border-top-left-radius: 8px;
            width: 60%;
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
  div:has(input) {
    margin-top: 16px;
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
