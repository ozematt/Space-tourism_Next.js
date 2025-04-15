import { FormBackground, FormStepCompleted, StepNav } from "@/components";
import Link from "next/link";

import React from "react";

const FormCompletedPage = () => {
  return (
    <>
      <StepNav />

      <div className="top-[120px] left-[50%] mx-auto my-auto flex w-[90%] flex-col px-[70px] pt-[80px] pb-[60px] ring-[.5px] ring-white/20 max-md:absolute max-md:transform-[translateX(-50%)] sm:px-[90px] md:w-[450px] md:px-[25px] md:ring-0">
        <FormBackground />
        <FormStepCompleted />
        <Link
          href={"/"}
          className="font-barlow-condensed test-sm mx-auto mt-[50px] cursor-pointer rounded-[5px] px-4.5 py-2.5 font-bold tracking-[.5px] text-white uppercase ring-1 ring-white/30 sm:text-xl"
        >
          home page
        </Link>
      </div>
    </>
  );
};

export default FormCompletedPage;
