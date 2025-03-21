import { z } from "zod";

export const stepOneSchema = z.object({
  name: z.string().min(2, "Imię musi mieć przynajmniej 2 znaki"),
  email: z.string().min(2, "Niepoprawny adres email"),
  phone: z.string().min(2, "Musi zawierac przynajmniej 9 cyfr"),
});
