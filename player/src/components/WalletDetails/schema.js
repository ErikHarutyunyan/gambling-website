import { object, string } from "yup";


export const schema_wallet = object().shape({
  btc: string(),
  usdt: string(),
  bnb: string(),
});
