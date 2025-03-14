import { planets, planetsArr } from "@/data";
import Link from "next/link";
import { PlanetName } from ".";

const PlanetNavbar = () => {
  return (
    <div className="flex gap-8 max-xl:justify-center sm:mt-20">
      {planetsArr.map((element) => (
        <Link
          key={element}
          href={planets[element].href as PlanetName}
          className="relative"
        >
          <h6
            className={`peer text-space-blue font-barlow-condensed text-sm tracking-[2px] uppercase hover:text-white sm:text-base`}
          >
            {element}
          </h6>
          <div className="absolute bottom-[-13px] w-full border-2 opacity-0 transition duration-1000 ease-in-out peer-hover:opacity-100" />
        </Link>
      ))}
    </div>
  );
};

export default PlanetNavbar;
