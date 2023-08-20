import { object, number } from "yup";

export const schema_price = object().shape({
  price: number()
    .transform((value) =>
      isNaN(value) || value === null || value === undefined ? 0 : value
    )
    .required()
    .min(50)
    .max(200000),
});
