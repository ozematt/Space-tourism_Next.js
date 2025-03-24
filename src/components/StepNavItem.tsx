"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

type StemItem = {
  step: string;
  title: string;
};

type StepNavItemProps = {
  stepNumber: string;
  item: StemItem;
};

const StepNavItem = ({ stepNumber, item }: StepNavItemProps) => {
  const { step: paramStep } = useParams();
  const { step: itemStep, title } = item;

  return (
    <div className="flex items-center">
      <Link href={`/reserve/step0${stepNumber}`}>
        <div
          className={` ${paramStep === itemStep ? "bg-white text-black" : ""} font-bellefair grid size-[34px] place-items-center rounded-full uppercase ring-1 ring-white hover:bg-white hover:text-black`}
        >
          {stepNumber}
        </div>
      </Link>

      <div className="hidden space-y-4 pl-4 md:block">
        {" "}
        <p className="font-barlow-condensed text-xs leading-[1.2px] tracking-[1.5px] uppercase">
          {" "}
          step 0{stepNumber}
        </p>
        <p className="font-barlow leading-[1.2px] font-bold tracking-[2px] uppercase">
          {title}
        </p>
      </div>
    </div>
  );
};

export default StepNavItem;
