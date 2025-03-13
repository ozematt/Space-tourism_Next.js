"use client";

import { planets } from "@/data/planets";
import Image from "next/image";
import Link from "next/link";

type PlanetName = keyof typeof planets;

const planetsArr = Object.keys(planets) as Array<PlanetName>;

type DestinationProps = {
  planet: PlanetName;
};
``;
const Destination = ({ planet }: DestinationProps) => {
  return (
    <div className="mt-6 flex h-full max-h-[734px] justify-between max-xl:flex-col max-xl:items-center sm:py-16 lg:py-32">
      {" "}
      <Image
        src={planets[planet].image}
        alt={planets[planet].imageAlt}
        width={480}
        height={480}
        className="my-6 size-[150px] shrink-0 sm:size-[300px] lg:size-[480px]"
      />
      <div className="w-full max-xl:text-center sm:px-[87px] lg:px-12 xl:max-w-[539px]">
        {/* planet navigation */}
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

        <h2 className="font-bellefair mt-6 text-[80px] uppercase lg:mt-10 lg:text-8xl">
          {planets[planet].name}
        </h2>
        <p className="text-space-blue font-barlow pt-4 xl:text-lg">
          {planets[planet].description}
        </p>
        <div className="my-10 border-[0.5px] opacity-30" />

        <div className="flex gap-6 max-[400px]:flex-col max-[400px]:items-center sm:justify-between">
          <div className="w-full max-w-[210px]">
            <p className="font-barlow-condensed text-space-blue text-sm tracking-[2px] uppercase">
              avg. distance
            </p>
            <p className="font-bellefair pt-1 text-[28px] uppercase">
              {planets[planet].distance}
            </p>
          </div>
          <div className="w-full max-w-[210px]">
            <p className="font-barlow-condensed text-space-blue text-sm tracking-[2px] uppercase">
              est. travel time
            </p>
            <p className="font-bellefair pt-1 text-[28px] uppercase">
              {planets[planet].travelTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
