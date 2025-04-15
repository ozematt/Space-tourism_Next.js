import {
  FormBackground,
  FormStepCompleted,
  SectionBackground,
  SectionTitle,
  StepNav,
} from "@/components";
import Link from "next/link";

import React from "react";

const FormCompletedPage = () => {
  return (
    <section className="h-screen">
      <SectionBackground />
      <div className="mx-10 my-6 sm:my-12 lg:mx-40">
        <SectionTitle number="01" name="make your reservation" />
      </div>

      <div className="sm:px-6">
        <div className="relative mx-auto mt-[50px] h-full w-full max-w-[945px] ring-white/20 sm:mt-[100px] md:flex md:pr-8 md:ring-1 md:backdrop-blur-[10px]">
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
        </div>
      </div>
    </section>
  );
};

export default FormCompletedPage;
