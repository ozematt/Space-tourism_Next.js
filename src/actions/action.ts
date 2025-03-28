"use server";

import { State } from "@/components/Reservation";
import { convertZodErrors } from "@/lib/errorHandlers";
import { stepOneSchema, stepTwoSchema } from "@/lib/schema";

export const formSubmit = async (
  prevState: State,
  formData: FormData,
): Promise<State> => {
  const step = formData.get("step")?.toString(); //received step param

  if (step === "step01") {
    const parsedData = stepOneSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    });

    const currentState = {
      ...prevState,
      name: formData.get("name") || prevState.name,
      email: formData.get("email") || prevState.email,
      phone: formData.get("phone") || prevState.phone,
    };

    if (!parsedData.success) {
      const errors = convertZodErrors(parsedData.error);
      return {
        ...currentState,
        errors: errors,
      };
    }

    // added to database

    return { success: "Jest GIT!", nextStep: 2, errors: undefined };
  }

  if (step === "step02") {
    const parsedData = stepTwoSchema.safeParse({
      destination: formData.get("destination"),
    });

    const currentState = {
      ...prevState,
      destination: formData.get("destination") || prevState.destination,
    };

    if (!parsedData.success) {
      const errors = convertZodErrors(parsedData.error);
      return {
        ...currentState,
        errors: errors,
      };
    }

    // added to database

    return { success: "Jest GIT!", nextStep: 3, errors: undefined };
  }

  if (step === "step03") {
    const lunarHotel = formData.has("Lunar Hotel");
    const marsColonyStay = formData.has("Mars Colony Stay");
    const titanExplorationCamp = formData.has("Titan Exploration Camp");

    // added to database

    console.log(lunarHotel, marsColonyStay, titanExplorationCamp);

    return { success: "Jest GIT!", nextStep: 4, errors: undefined };
  }

  return { ...prevState };
};
