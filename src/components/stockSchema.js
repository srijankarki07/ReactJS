import { object, string, number, date, InferType } from "yup";

export const stockSchema = object({
  securityName: string("Name is Required").required("Can't be empty"),
  securityId: number()
    .required("Mandatory")
    .positive("Must be postitive")
    .integer("Must not be decimal"),
  symbol: string("Symbol can only be alphabets")
    .required("Can't be empty")
    .min(3, "Required atleast 3"),
  // totalTradedQuantity: number().required(),
  // lastTradedPrice: number(),required().positive(),
});
