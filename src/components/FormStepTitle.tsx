"use client";

import { steps } from "@/data";
import { useParams } from "next/navigation";

type StepItem = {
  step: string;
  title: string;
  stepHeader: string;
  description: string;
};

const FormStepTitle = () => {
  const { step: paramStep } = useParams();
  const actualStep = steps.find((step) => step.step === paramStep);
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
