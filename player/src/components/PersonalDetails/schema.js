import { object, string, number, mixed } from "yup";

export const schema_personal_details = object().shape({
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
