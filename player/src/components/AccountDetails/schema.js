import { object, string } from "yup";

export const schema_account_details = object().shape({
  userName: string()
    .max(40)
    .min(3, "User Name must be at least 3 characters")
    .required("Required User Name"),
  phoneNumber: string().required("Phone number is required"),

  email: string()
    .email("Email should have correct format")
    .required("Email is a required field"),
});

