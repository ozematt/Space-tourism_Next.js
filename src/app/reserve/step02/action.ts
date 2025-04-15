"use server";

import { State } from "@/components/Reservation";
import { convertZodErrors } from "@/lib/errorHandlers";
import { stepTwoSchema } from "@/lib/schema";
import { redirect } from "next/navigation";

export const formActionStepTwo = async (
  prevState: State,
  formData: FormData,
): Promise<State> => {
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
  redirect("/reserve/step03");
};
