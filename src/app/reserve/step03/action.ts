"use server";

import { State } from "@/types";
import { redirect } from "next/navigation";

export const formActionStepThree = async (
  prevState: State,
  formData: FormData,
): Promise<State> => {
  const lunarHotel = formData.has("Lunar Hotel");
  const marsColonyStay = formData.has("Mars Colony Stay");
  const titanExplorationCamp = formData.has("Titan Exploration Camp");

  // added to database

  console.log(lunarHotel, marsColonyStay, titanExplorationCamp);
  redirect("/reserve/step04");
};
