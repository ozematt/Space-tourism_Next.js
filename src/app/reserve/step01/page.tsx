"use client";

import {
  FormBackground,
  FormButtonPanel,
  FormStepOne,
  FormStepTitle,
  SectionBackground,
  SectionTitle,
  StepNav,
} from "@/components";
import { State } from "@/components/Reservation";
import Form from "next/form";
import { formActionStepOne } from "./actions";
import { useActionState } from "react";

const StepOnePage = () => {
  const [state, formAction, isPending] = useActionState<State, FormData>(
    formActionStepOne,
    {} as State,
  );

  return (
    <section className="h-screen">
      <SectionBackground />
      <div className="mx-10 my-6 sm:my-12 lg:mx-40">
        <SectionTitle number="01" name="make your reservation" />
      </div>

      <div className="sm:px-6">
        <div className="relative mx-auto mt-[50px] h-full w-full max-w-[945px] ring-white/20 sm:mt-[100px] md:flex md:pr-8 md:ring-1 md:backdrop-blur-[10px]">
          <StepNav />
          <Form
            action={formAction}
            className="mx-auto flex w-full flex-col max-md:h-[500px] md:max-w-[450px]"
          >
            <div className="top-[120px] left-[50%] w-[90%] px-6 ring-[.5px] ring-white/20 max-md:absolute max-md:transform-[translateX(-50%)] md:w-full md:max-w-[450px] md:p-0 md:ring-0">
              <FormBackground />

              <>
                <div className="my-8 md:my-[67px]">
                  <FormStepTitle step="step01" />
                  <div className="mt-12 space-y-8 md:mt-[67px] md:space-y-12">
                    <FormStepOne {...state} />
                  </div>
                </div>
                <div className="absolute bottom-[-50%] left-0 mb-5 w-full px-8 md:static md:mb-0 md:px-0">
                  <FormButtonPanel step="step01" isPending={isPending} />
                </div>
              </>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default StepOnePage;
