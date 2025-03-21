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
      <h3 className="font-bellefair text-4xl uppercase">{stepHeader}</h3>
      <p className="font-barlow-condensed text-lg tracking-[0.5px]">
        {description}
      </p>
    </div>
  );
};

export default FormStepTitle;
