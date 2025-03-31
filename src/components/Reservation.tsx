"use client";
import Form from "next/form";
import {
  FormBackground,
  FormButtonPanel,
  FormStepFour,
  FormStepOne,
  FormStepThree,
  FormStepTitle,
  FormStepTwo,
  PlanetName,
  StepNav,
} from ".";
import { useActionState } from "react";
import { formSubmit } from "@/actions/action";
// import { useRouter } from "next/navigation";

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
  errors?: { [key: string]: string };
  success?: string;
  nextStep?: number;
};

const Reservation = ({ step }: ReservationProps) => {
  // const router = useRouter();

  const [state, formAction, isPending] = useActionState<State, FormData>(
    formSubmit,
    { nextStep: 1 } as State,
  );
  console.log(state);

  // useEffect(() => {
  //   if (state.nextStep === 2) {
  //     router.push("/reserve/step02");
  //   } else if (state.nextStep === 3) {
  //     router.push("/reserve/step03");
  //   } else if (state.nextStep === 4) {
  //     router.push("/reserve/step04");
  //   }
  // }, [state.nextStep, router]);

  return (
    <div className="relative mx-auto mt-[50px] h-full w-full max-w-[945px] ring-white/20 sm:mt-[100px] md:flex md:pr-8 md:ring-1 md:backdrop-blur-[10px]">
      <StepNav />

      <Form
        action={formAction}
        className="mx-auto flex w-full flex-col max-md:h-[500px] md:max-w-[450px]"
      >
        <div className="top-[120px] left-[50%] w-[90%] px-6 ring-[.5px] ring-white/20 max-md:absolute max-md:transform-[translateX(-50%)] md:w-full md:max-w-[450px] md:p-0 md:ring-0">
          <FormBackground />

          {/* step param added to form data */}
          <input type="hidden" name="step" value={step} />

          {step === "step01" && (
            <>
              <div className="my-8 md:my-[67px]">
                <FormStepTitle />
                <div className="mt-12 space-y-8 md:mt-[67px] md:space-y-12">
                  <FormStepOne {...state} />
                </div>
              </div>
              <div className="absolute bottom-[-50%] left-0 mb-5 w-full px-8 md:static md:mb-0 md:px-0">
                <FormButtonPanel step={step} isPending={isPending} />
              </div>
            </>
          )}
          {step === "step02" && (
            <>
              <div className="middle:my-[67px] my-10">
                <FormStepTitle />
                <div className="middle:mt-[50px] mt-[30px]">
                  <FormStepTwo {...state} />
                </div>
              </div>
              <div className="absolute bottom-[-40%] left-0 mb-5 w-full px-8 md:static md:mb-0 md:px-0">
                <FormButtonPanel step={step} isPending={isPending} />
              </div>
            </>
          )}
          {step === "step03" && (
            <>
              <div className="my-8 md:my-[67px]">
                <FormStepTitle />
                <div className="middle:mt-[50px] mt-[30px]">
                  <FormStepThree />
                </div>
              </div>
              <div className="absolute bottom-[-40%] left-0 mb-5 w-full px-8 md:static md:mb-0 md:px-0">
                <FormButtonPanel step={step} isPending={isPending} />
              </div>
            </>
          )}
          {step === "step04" && (
            <>
              <div className="my-8 md:my-[67px]">
                <FormStepTitle />
                <div className="middle:mt-[42px] mt-[30px]">
                  <FormStepFour />
                </div>
              </div>
              <div className="absolute bottom-[-40%] left-0 mb-5 w-full px-8 md:static md:mb-0 md:px-0">
                <FormButtonPanel step={step} isPending={isPending} />
              </div>
            </>
          )}
        </div>
      </Form>
    </div>
  );
};

export default Reservation;
