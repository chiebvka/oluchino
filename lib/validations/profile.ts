import * as z from "zod";

export const profileFormSchema = z.object({
    firstName: z
    .string()
    .min(2, {
      message: "Firstname must be at least 2 characters.",
    })
    .max(30, {
      message: "Firstname must not be longer than 30 characters.",
    }),
  lastName: z
    .string()
    .min(2, {
      message: "Lastname must be at least 2 characters.",
    })
    .max(30, {
      message: "Lastname must not be longer than 30 characters.",
    }),
    email: z.string().email().optional(),
    mobile: z.number().optional()
})