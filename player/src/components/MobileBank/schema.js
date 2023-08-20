
import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schema_phoneNumber = yup.object().shape({
  phone: yup
    .string()
    .matches(phoneRegExp, "Invalid phone")
    .required("Phone is required"),
});
export const schema_transaction = yup.object().shape({
  transaction: yup.string().required("Transaction ID is required"),
});