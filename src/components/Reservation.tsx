"use client";
import Form from "next/form";
import {
  FormBackground,
  FormButtonPanel,
  FormStepOne,
  FormStepTitle,
  FormStepTwo,
  PlanetName,
  StepNav,
} from ".";
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
        className="middle:pt-[54px] flex w-full flex-col max-md:h-[500px] md:mx-auto md:max-w-[450px] md:pt-8"
      >
        <div className="top-[120px] left-[50%] mx-auto w-[90%] px-6 py-10 ring-[.5px] ring-white/20 max-md:absolute max-md:transform-[translateX(-50%)] md:w-full md:max-w-[450px] md:p-0 md:ring-0">
          <FormBackground />

          <FormStepTitle />

          <input type="hidden" name="step" value={step} />

          {step === "step01" && (
            <>
              <div className="mt-[67px] space-y-12">
                <FormStepOne {...state} />
              </div>
              <div className="px-8 pt-[450px] md:px-0 md:pt-[70px]">
                <FormButtonPanel step={step} isPending={isPending} />
              </div>
            </>
          )}
          {step === "step02" && (
            <>
              <div className="middle:mt-[50px] mt-[30px]">
                <FormStepTwo />
              </div>
              <div className="middle:pt-[70px] px-8 pt-[450px] md:px-0 md:pt-[50px]">
                <FormButtonPanel step={step} isPending={isPending} />
              </div>
            </>
          )}
        </div>
        {/* <FormButtonPanel step={step} isPending={isPending} /> */}
      </Form>
    </div>
  );
};

export default Reservation;
