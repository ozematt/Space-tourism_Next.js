"use client";
import { InputTextField } from ".";
import { State } from "./Reservation";

const FormStepOne = (state: State) => {
  return (
    <>
      <InputTextField
        id="name"
        placeholder="Name"
        defaultValue={state?.name}
        error={state?.errors?.name}
      />
      <InputTextField
        id="email"
        placeholder="Email Address"
        defaultValue={state?.email}
        error={state?.errors?.email}
      />
      <InputTextField
        id="phone"
        placeholder="Phone Number"
        defaultValue={state?.phone}
        error={state?.errors?.phone}
      />
    </>
  );
};

export default FormStepOne;
