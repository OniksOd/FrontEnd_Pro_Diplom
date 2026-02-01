import * as z from "zod";

export const productFormValidation = z.object({
  category: z.string().min(1, "Category is required"),
  name: z.string().min(1, "Name is required"),
  quantity: z.number().min(1, "Quantity is required"),
  price: z.number().min(1, "Price is required"),
  photo: z.url().min(1, "Photo is required"),
  description: z.string().min(1, "Description is required"),
});
