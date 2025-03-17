import { planets } from "@/data";
import Image from "next/image";
import { PlanetInfo, PlanetNavbar } from ".";

export type PlanetName = keyof typeof planets;

export type DestinationProps = {
  planet: PlanetName;
};

const Destination = ({ planet }: DestinationProps) => {
  return (
    <div className="mt-6 flex h-full max-h-[734px] justify-between max-xl:flex-col max-xl:items-center sm:py-16 lg:py-32">
      {/* PLANET IMG */}
      <Image
        src={planets[planet]?.image}
        alt={planets[planet].imageAlt}
        width={480}
        height={480}
        className="my-6 size-[150px] shrink-0 sm:size-[300px] lg:size-[480px]"
        priority
      />

      <div className="w-full max-xl:text-center sm:px-[87px] lg:px-12 xl:max-w-[539px]">
        <PlanetNavbar />
        <PlanetInfo planet={planet} />
      </div>
    </div>
  );
};

export default Destination;
