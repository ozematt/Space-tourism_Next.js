"use client";

import { steps } from "@/data";

type StepItem = {
  step: string;
  title: string;
  stepHeader: string;
  description: string;
};

type FormStepTitleProps = {
  step: string;
};

const FormStepTitle = ({ step }: FormStepTitleProps) => {
  const actualStep = steps.find((stepItem) => stepItem.step === step);

  const { stepHeader, description } = actualStep as StepItem;

  return (
    <div>
      <h3 className="font-bellefair text-2xl uppercase sm:text-4xl">
        {stepHeader}
      </h3>
      <p className="font-barlow-condensed text-base tracking-[0.5px] sm:text-lg">
        {description}
      </p>
    </div>
  );
};

export default FormStepTitle;
