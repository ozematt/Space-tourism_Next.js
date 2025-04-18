"use client";

import Form from "next/form";
import { useActionState } from "react";
import { formActionStepFour } from "./action";
import { State } from "@/types";
import {
  FormBackground,
  FormButtonPanel,
  FormStepFour,
  FormStepTitle,
  StepNav,
} from "@/components";

const StepFourPage = () => {
  const [_state, formAction, isPending] = useActionState<State, FormData>( // eslint-disable-line @typescript-eslint/no-unused-vars
    formActionStepFour,
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

          <div className="my-8 h-[415px] md:mt-[67px]">
            <FormStepTitle step="step04" />
            <div className="mt-12 space-y-8 md:mt-[35px] md:space-y-12">
              <FormStepFour />
            </div>
          </div>
          <div className="absolute bottom-[-50%] left-0 mb-5 w-full px-8 md:static md:mb-0 md:px-0">
            <FormButtonPanel step="step04" isPending={isPending} />
          </div>
        </div>
      </Form>
    </>
  );
};

export default StepFourPage;
