"use server";

import { State } from "@/components/Reservation";
import { convertZodErrors } from "@/lib/errorHandlers";
import { stepOneSchema } from "@/lib/schema";
import { redirect } from "next/navigation";

export const formActionStepOne = async (
  prevState: State,
  formData: FormData,
): Promise<State> => {
  const data = Object.fromEntries(formData.entries());

  const parsedData = stepOneSchema.safeParse(data);

  const currentState = {
    ...prevState,
    ...data,
  };

  if (!parsedData.success) {
    const errors = convertZodErrors(parsedData.error);
    return {
      ...currentState,
      errors: errors,
    };
  }

  // added to database
  redirect("/reserve/step02");
};
