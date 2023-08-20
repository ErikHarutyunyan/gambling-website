import { object, string, ref } from "yup";
export const schema_resetPass = object().shape({
  oldPassword: string()
    .min(8)
    .max(32)
    .required("No password provided.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number:"
    ),
  newPassword: string()
    .min(8)
    .max(32)
    .required("No password provided.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number:"
    ),
  confirmPwd: string()
    .required("No password provided.")
    .oneOf([ref("newPassword")], "Passwords does not match"),
});
