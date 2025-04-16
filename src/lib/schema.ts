import { z } from "zod";

export const stepOneSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.string().email("Incorrect email address."),
  phone: z.string().min(9, "Must contain at least 9 digits."),
});

export const stepTwoSchema = z.object({
  destination: z.enum(["moon", "mars", "europa", "titan"], {
    errorMap: () => ({ message: "You must choose a destination!" }),
  }),
});

export const formLocalStorageSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  destination: z.enum(["moon", "mars", "europa", "titan"]).optional(),
  addOns: z.object({
    lunarHotel: z.boolean().optional(),
    marsColony: z.boolean().optional(),
    titanCamp: z.boolean().optional(),
  }),
});

export type FormLocalStorage = z.infer<typeof formLocalStorageSchema>;
