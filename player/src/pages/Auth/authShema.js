import {
  object,
  string,
  number,
  ref,
  mixed,
  
} from "yup";

export const schema_signIn = object().shape({
  user_name: string()
    .required("User name is a required field"),
  password: string()

    .max(32)
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    //   "Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number:"
    // ),
});

export const schema_signUp = object().shape({
  userName: string()
    .max(40)
    .min(3, "User Name must be at least 3 characters")
    .required("Required User Name"),
  phoneNumber: string().required("Phone number is required"),

  email: string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .max(32)
    .required("No password provided.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number:"
    ),
  confirmPwd: string()
    .required("No password provided")
    .oneOf([ref("password")], "Passwords does not match"),
});
export const schema_signUp_second = object().shape({
  firstName: string()
    .max(40)
    .min(3, "First Name must be at least 3 characters")
    .required("Required First Name"),
  lastName: string()
    .max(40)
    .min(3, "Last Name must be at least 3 characters")
    .required("Required Last Name"),
  country: string().required("Select an Country"),
  image: mixed().required("Image is required"),
  day: number()
    .test("is-valid-day", "Invalid day", (value) => {
      if (value === undefined || value === null) {
        return true;
      }
      const parsedDay = parseInt(value, 10);

      return !isNaN(parsedDay) && parsedDay >= 1 && parsedDay <= 31;
    })
    .required("Required Last Day"),
  mount: number()
    .test("is-valid-month", "Invalid month", (value) => {
      if (value === undefined || value === null) {
        return true;
      }

      const parsedMonth = parseInt(value, 10);

      return !isNaN(parsedMonth) && parsedMonth >= 1 && parsedMonth <= 12;
    })
    .required("Required Last Mount"),
  year: number()
    .test("is-valid-year", "Invalid year", (value) => {
      if (value === undefined || value === null) {
        return true;
      }

      const parsedYear = parseInt(value, 10);
      const currentYear = new Date().getFullYear();

      return (
        !isNaN(parsedYear) && parsedYear >= 1900 && parsedYear <= currentYear
      );
    })
    .required("Required Last Year"),
});
export const schema_signUp_wallet = object().shape({
  btc: string(),
  usdt:string(),
  bnb:string()
});
export const schema_forgot = object().shape({
  email: string()
    .email("Email should have correct format")
    .required("Email is a required field"),
});

export const schema_resetPass = object().shape({
  password: string()
    .min(8)
    .max(32)
    .required("No password provided.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number:"
    ),
  confirmPwd: string()
    .required("No password provided.")
    .oneOf([ref("password")], "Passwords does not match"),
});
