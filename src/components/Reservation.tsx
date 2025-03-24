"use client";
import Form from "next/form";
import { FormStepOne, FormStepTitle, PlanetName, StepNav } from ".";
import { useActionState } from "react";
import { formSubmit } from "@/actions/action";

export type StepNumbers = "step01" | "step02" | "step03" | "step04" | "step05";

export type AddOns = {
  lunarHotel: boolean;
  marsColony: boolean;
  titanCamp: boolean;
};

export type ReservationProps = {
  step: StepNumbers;
};

export type State = {
  name?: FormDataEntryValue;
  email?: FormDataEntryValue;
  phone?: FormDataEntryValue;
  destination?: PlanetName;
  addOns?: AddOns;
  errors?: Record<string, string[] | undefined>;
};

const Reservation = ({ step }: ReservationProps) => {
  const [state, formAction, isPending] = useActionState<State, FormData>(
    formSubmit,
    {} as State,
  );
  console.log(state);

  return (
    <div className="mx-auto mt-[100px] flex h-full max-h-[600px] w-full max-w-[945px] ring-1 ring-white/20 backdrop-blur-[10px]">
      <StepNav />
      <Form
        action={formAction}
        className="mx-auto w-full max-w-[450px] py-[54px]"
      >
        <FormStepTitle />

        <input type="hidden" name="step" value={step} />

        {step === "step01" && (
          <div className="mt-[67px] space-y-12">
            <FormStepOne {...state} />
          </div>
        )}

        <div className="flex w-full justify-end pt-[70px]">
          <div className="my-auto w-full border-t-1 border-white/50" />

          <button
            type="submit"
            className="font-barlow-condensed shrink-0 rounded-[5px] bg-white/90 px-4.5 py-2.5 text-xl font-bold tracking-[.5px] text-black uppercase ring-1"
          >
            {/* <Link
              href={state.errors ? "" : `/reserve/step0${Number(step[5]) + 1}`}
            > */}
            {step === "step04" ? "confirm" : "next step"}
            {/* </Link> */}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Reservation;
