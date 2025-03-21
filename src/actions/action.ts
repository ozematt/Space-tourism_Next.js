"use server";

import { State } from "@/components/Reservation";
import { stepOneSchema, stepTwoSchema } from "@/lib/schema";
import { z } from "zod";

export const formSubmit = async (
  prevState: State,
  formData: FormData,
): Promise<State> => {
  const step = formData.get("step")?.toString(); //

  try {
    if (step === "step01") {
      const data = stepOneSchema.parse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
      });
      return { name: data.name, email: data.email, phone: data.phone };
    }

    if (step === "step02") {
      const data = stepTwoSchema.parse({
        destination: formData.get("destination"),
      });
      return { ...prevState, destination: data.destination };
    }

    return {};
    // if (step === "step02") {
    //   return {
    //     name: prevState?.name,
    //     email: prevState?.email,
    //     phone: prevState?.phone,
    //   };
    // }

    // if (step === "step03") {
    //   return {};
    // }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.flatten().fieldErrors;
      return errors;
    }

    return { errors: { general: "Wystąpił nieoczekiwany błąd." } };
  }
};
