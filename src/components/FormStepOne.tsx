"use client";

import { useCallback } from "react";
import { useFormContext } from "@/context/FormContext";
import { State } from "@/types";
import { InputTextField } from ".";

const FormStepOne = (state: State) => {
  const { newFormData, updateFormData } = useFormContext();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateFormData({ [e.target.name]: e.target.value });
    },
    [updateFormData],
  );

  return (
    <>
      <InputTextField
        id="name"
        placeholder="Name"
        defaultValue={newFormData.name}
        onChange={handleInputChange}
        error={state?.errors?.name}
      />
      <InputTextField
        id="email"
        placeholder="Email Address"
        defaultValue={newFormData.email}
        onChange={handleInputChange}
        error={state?.errors?.email}
      />
      <InputTextField
        id="phone"
        placeholder="Phone Number"
        defaultValue={newFormData.phone}
        onChange={handleInputChange}
        error={state?.errors?.phone}
      />
    </>
  );
};

export default FormStepOne;
