"use client";

import { PlanetName, StepNav } from ".";

// import { useRouter } from "next/navigation";

const Reservation = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   if (state.nextStep === 2) {
  //     router.push("/reserve/step02");
  //   } else if (state.nextStep === 3) {
  //     router.push("/reserve/step03");
  //   } else if (state.nextStep === 4) {
  //     router.push("/reserve/step04");
  //   }
  // }, [state.nextStep, router]);

  return (
    <div className="relative mx-auto mt-[50px] h-full w-full max-w-[945px] ring-white/20 sm:mt-[100px] md:flex md:pr-8 md:ring-1 md:backdrop-blur-[10px]">
      <StepNav />
    </div>
  );
};

export default Reservation;
