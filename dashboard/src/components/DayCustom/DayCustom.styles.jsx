import styled from "styled-components";
export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 24px;
  svg {
    cursor: pointer;
  }
`

export const InputDate = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: space-between;
  flex: 1;
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