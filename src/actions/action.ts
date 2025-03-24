"use server";

import { State } from "@/components/Reservation";
import { stepOneSchema, stepThreeSchema, stepTwoSchema } from "@/lib/schema";
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
      return {
        ...prevState,
        ...data,
        errors: undefined,
        nextStep: 2,
      };
    }

    if (step === "step02") {
      const data = stepTwoSchema.parse({
        destination: formData.get("destination"),
      });
      return { ...prevState, ...data, errors: undefined, nextStep: 3 };
    }

    if (step === "step03") {
      const data = stepThreeSchema.parse({
        addOns: {
          lunarHotel: formData.get("lunarHotel"),
          marsColony: formData.get("marsColony"),
          titanCamp: formData.get("titanCamp"),
        },
      });
      return { ...prevState, ...data, errors: undefined, nextStep: 4 };
    }
    return prevState;
  } catch (error) {
    const currentState: State = {
      ...prevState,
      name: formData.get("name") || prevState.name,
      email: formData.get("email") || prevState.email,
      phone: formData.get("phone") || prevState.phone,
      destination: formData.get("destination") || prevState.destination,
      addOns: {
        lunarHotel: formData.get("lunarHotel") || prevState.addOns?.lunarHotel,
        marsColony: formData.get("marsColony") || prevState.addOns?.marsColony,
        titanCamp: formData.get("titanCamp") || prevState.addOns?.titanCamp,
      },
    };

    if (error instanceof z.ZodError) {
      return {
        ...currentState, // actual form state
        errors: error.flatten().fieldErrors,
      };
    }

    return {
      ...currentState,
      errors: { general: ["An unexpected error occurred."] },
    };
  }
};
