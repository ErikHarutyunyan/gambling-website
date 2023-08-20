import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1084px;
  width: 100%;
  padding: 24px 15px 106px;
  margin: 0px auto;
  h2 {
    margin: 50px 0;
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
        text-align: center;
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
      border-right: 1px solid #fff;
      :last-child {
        border-right: 0;
      }
    }
  }
`;