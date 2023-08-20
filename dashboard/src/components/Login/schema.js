import { object, string } from "yup";
export const schema_signIn = object().shape({
  user_name: string()
    .required("Username is a required field"),
  password: string()
    .min(8)
    .max(32)
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    //   "Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number:"
    // ),
});
