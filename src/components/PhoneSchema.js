import { object, string, number, date, InferType } from "yup";

export const phoneSchema = object({
  model: string().required("Please Enter the Model Number"),
  Name: string().required("Please Enter the Name of your Phone"),
  RAM: number().required("Enter RAM"),
  storage: number().required("Storage is required"),
  price: number()
    .required("Enter the price of phone")
    .positive("Price is never negative"),
  color: string().required("Enter color of your phone"),
  year: date().required("Enter your phone make year").min(4, "Error"),
});
