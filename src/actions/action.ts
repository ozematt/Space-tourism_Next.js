"use server";

import { State } from "@/components/Reservation";
import { convertZodErrors } from "@/lib/errorHandlers";
import { stepOneSchema, stepThreeSchema, stepTwoSchema } from "@/lib/schema";

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
    const parsedData = stepThreeSchema.safeParse({
      destination: formData.get("destination"),
    });

    // const currentState = {
    //   ...prevState,
    //   destination: formData.get("destination") || prevState.destination,
    // };

    if (!parsedData.success) {
      const errors = convertZodErrors(parsedData.error);
      return {
        // ...currentState,
        errors: errors,
      };
    }

    // added to database

    return { success: "Jest GIT!", nextStep: 3, errors: undefined };
  }

  return { ...prevState };
};

// export const formSubmit = async (
//   prevState: State,
//   formData: FormData,
// ): Promise<State> => {

//   const step = formData.get("step")?.toString(); //

//   try {
//     if (step === "step01") {
//       const data = stepOneSchema.parse({
//         name: formData.get("name"),
//         email: formData.get("email"),
//         phone: formData.get("phone"),
//       });

//       return {
//         ...prevState,
//         ...data,
//         errors: undefined,
//         nextStep: 2,
//       };
//     }

//     if (step === "step02") {
//       const data = stepTwoSchema.parse({
//         destination: formData.get("destination"),
//       });

//       return { ...prevState, ...data, errors: undefined, nextStep: 3 };
//     }

//     if (step === "step03") {
//       const data = stepThreeSchema.parse({
//         addOns: {
//           lunarHotel: formData.get("lunarHotel"),
//           marsColony: formData.get("marsColony"),
//           titanCamp: formData.get("titanCamp"),
//         },
//       });
//       return { ...prevState, ...data, errors: undefined, nextStep: 4 };
//     }
//     return prevState;
//   } catch (error) {
//     const currentState: State = {
//       ...prevState,
//       name: formData.get("name") || prevState.name,
//       email: formData.get("email") || prevState.email,
//       phone: formData.get("phone") || prevState.phone,
//       destination: formData.get("destination") || prevState.destination,
//       addOns: {
//         lunarHotel: formData.get("lunarHotel") || prevState.addOns?.lunarHotel,
//         marsColony: formData.get("marsColony") || prevState.addOns?.marsColony,
//         titanCamp: formData.get("titanCamp") || prevState.addOns?.titanCamp,
//       },
//     };

//     if (error instanceof z.ZodError) {
//       return {
//         ...currentState, // actual form state
//         errors: error.flatten().fieldErrors,
//       };
//     }

//     return {
//       ...currentState,
//       errors: { general: ["An unexpected error occurred."] },
//     };
//   }
// };
