"use client";
import { useEffect, useState } from "react";
import { InputTextField } from ".";
import { State } from "./Reservation";

const FormStepOne = (state: State) => {
  const [formState, setFormState] = useState(state);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedState = localStorage.getItem("formState");
      const actualState = storedState ? JSON.parse(storedState) : state;
      setFormState(actualState);
    }
  }, [state]);

  return (
    <>
      <InputTextField
        id="name"
        placeholder="Name"
        defaultValue={formState?.name}
        error={formState?.errors?.name}
      />
      <InputTextField
        id="email"
        placeholder="Email Address"
        defaultValue={formState?.email}
        error={formState?.errors?.email}
      />
      <InputTextField
        id="phone"
        placeholder="Phone Number"
        defaultValue={formState?.phone}
        error={formState?.errors?.phone}
      />
    </>
  );
};

export default FormStepOne;
