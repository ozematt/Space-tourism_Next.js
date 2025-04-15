import { SectionBackground, SectionTitle } from "@/components";
import React from "react";

const ReserveLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-screen">
      <SectionBackground />
      <div className="mx-10 my-6 sm:my-12 lg:mx-40">
        <SectionTitle number="01" name="make your reservation" />
      </div>

      <div className="sm:px-6">
        <div className="relative mx-auto mt-[50px] h-full w-full max-w-[945px] ring-white/20 sm:mt-[100px] md:flex md:pr-8 md:ring-1 md:backdrop-blur-[10px]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ReserveLayout;
