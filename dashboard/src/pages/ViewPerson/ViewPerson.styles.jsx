import styled from "styled-components";

export const Wrapper = styled.section``;

export const HeadWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  img {
    cursor: pointer;
    object-fit: cover;
  }
  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;

    span {
      text-transform: capitalize;
    }
  }
`;

export const FormWrap = styled.form`
  width: 100%;
  max-width: 792px;
  margin: 16px 0;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 32px;
  button[type="submit"] {
    background: var(--gradient-blue);
    border: none;
  }
  button {
    border: 1px solid var(--color-blue);
    padding: 10px 50px;
    border-radius: 8px;
    color: var(--color-white);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    transform: var(--transition);
    margin-top: 20px;
  }
  button:hover {
    opacity: 0.9;
    transform: var(--transition);
  }
`;

export const WalletWrap = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: var(--color-dark-gray);
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

export const ViewWrap = styled.div`
      max-width: 440px;
    width: 100%;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 32px;

`;

export const ViewItem = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;
export const ViewKey = styled.div``;

export const ViewValue = styled.div``;