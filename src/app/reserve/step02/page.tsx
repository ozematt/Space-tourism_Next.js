"use client";

import Form from "next/form";
import { useActionState } from "react";
import { formActionStepTwo } from "./action";
import { State } from "@/types";
import {
  FormBackground,
  FormButtonPanel,
  FormStepTitle,
  FormStepTwo,
  StepNav,
} from "@/components";

const StepTwoPage = () => {
  const [state, formAction, isPending] = useActionState<State, FormData>(
    formActionStepTwo,
    {} as State,
  );

  return (
    <>
      <StepNav />
      <Form
        action={formAction}
        className="mx-auto flex w-full flex-col max-md:h-[500px] md:max-w-[450px]"
      >
        <div className="top-[120px] left-[50%] w-[90%] px-6 ring-[.5px] ring-white/20 max-md:absolute max-md:transform-[translateX(-50%)] md:w-full md:max-w-[450px] md:p-0 md:ring-0">
          <FormBackground />

          <>
            <div className="my-8 md:my-[67px]">
              <FormStepTitle step="step02" />
              <div className="mt-12 space-y-8 md:mt-[36px] md:space-y-12">
                <FormStepTwo {...state} />
              </div>
            </div>
            <div className="absolute bottom-[-50%] left-0 mb-5 w-full px-8 md:static md:mb-0 md:px-0">
              <FormButtonPanel step="step02" isPending={isPending} />
            </div>
          </>
        </div>
      </Form>
    </>
  );
};

export default StepTwoPage;
