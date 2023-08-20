import { object, number } from "yup";

export const schema_wallet = object().shape({
  amount: number().typeError("Please set cash").min(0),
  // nonCashable: number().min(0),
});
