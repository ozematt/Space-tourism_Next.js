"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { planets, planetsArr } from "@/data";
import { PlanetName } from ".";

const PlanetNavbar = () => {
  const pathname = usePathname();
  const isActive = pathname.split("/")[2];

  return (
    <div className="flex gap-8 max-xl:justify-center sm:mt-20">
      {planetsArr.map((planet) => (
        <Link
          key={planet}
          href={planets[planet].href as PlanetName}
          className="relative"
        >
          <h6
            className={`peer text-space-blue font-barlow-condensed text-sm tracking-[2px] uppercase hover:text-white sm:text-base`}
          >
            {planet}
          </h6>
          <div
            className={` ${isActive === planet ? "opacity-100" : ""} absolute bottom-[-13px] w-full border-2 opacity-0 transition duration-1000 ease-in-out peer-hover:opacity-100`}
          />
        </Link>
      ))}
    </div>
  );
};

export default PlanetNavbar;
