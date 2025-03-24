"use client";
import Form from "next/form";
import { FormStepOne, FormStepTitle, PlanetName, StepNav } from ".";
import { useActionState } from "react";
import { formSubmit } from "@/actions/action";

export type StepNumbers = "step01" | "step02" | "step03" | "step04" | "step05";

export type AddOns = {
  lunarHotel?: boolean | FormDataEntryValue;
  marsColony?: boolean | FormDataEntryValue;
  titanCamp?: boolean | FormDataEntryValue;
};

export type ReservationProps = {
  step: StepNumbers;
};

export type State = {
  name?: FormDataEntryValue | string;
  email?: FormDataEntryValue | string;
  phone?: FormDataEntryValue | string;
  destination?: PlanetName | FormDataEntryValue;
  addOns?: AddOns;
  errors?: Record<string, string[] | undefined>;
  nextStep?: number;
};

const Reservation = ({ step }: ReservationProps) => {
  const [state, formAction, isPending] = useActionState<State, FormData>(
    formSubmit,
    {} as State,
  );

  console.log(state);

  return (
    <div className="relative mx-auto mt-[50px] h-full w-full max-w-[945px] ring-white/20 sm:mt-[100px] md:flex md:pr-8 md:ring-1 md:backdrop-blur-[10px]">
      <StepNav />

      <Form
        action={formAction}
        className="flex w-full flex-col max-md:h-[500px] md:mx-auto md:max-w-[450px] md:py-[54px]"
      >
        <div className="top-[120px] left-[50%] mx-auto w-[90%] px-6 py-10 ring-[.5px] ring-white/20 max-md:absolute max-md:transform-[translateX(-50%)] md:w-full md:max-w-[450px] md:p-0 md:ring-0">
          <div className="absolute inset-0 -z-10 opacity-100 backdrop-blur-[10px] md:opacity-0" />
          <div className="absolute inset-0 -z-20 bg-[url(/reserve/background-reserve-tablet.webp)] bg-cover opacity-90 md:opacity-0" />
          <FormStepTitle />

          <input type="hidden" name="step" value={step} />

          {step === "step01" && (
            <div className="mt-[67px] space-y-12">
              <FormStepOne {...state} />
            </div>
          )}
        </div>

        <div className="flex w-full justify-end px-8 pt-[450px] md:px-0 md:pt-[70px]">
          <div className="my-auto w-full border-t-1 border-white/50" />

          <button
            type="submit"
            className="font-barlow-condensed test-sm shrink-0 rounded-[5px] bg-white/90 px-4.5 py-2.5 font-bold tracking-[.5px] text-black uppercase ring-1 sm:text-xl"
            disabled={isPending}
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
