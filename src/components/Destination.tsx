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
    <div className="mt-6 flex h-full max-h-[734px] justify-between py-32">
      {" "}
      <Image
        src={planets[planet].image}
        alt={planets[planet].imageAlt}
        width={480}
        height={480}
      />
      <div className="w-full max-w-[539px] px-12">
        {/* planet navigation */}
        <div className="flex gap-8">
          {planetsArr.map((element) => (
            <Link
              key={element}
              href={planets[element].href as PlanetName}
              className="relative"
            >
              <h6
                className={`peer text-space-blue font-barlow-condensed tracking-[2px] uppercase hover:text-white`}
              >
                {element}
              </h6>
              <div className="absolute bottom-[-13px] w-full border-2 opacity-0 transition duration-1000 ease-in-out peer-hover:opacity-100" />
            </Link>
          ))}
        </div>
        <h2 className="font-bellefair mt-10 text-8xl uppercase">
          {planets[planet].name}
        </h2>
        <p className="text-space-blue font-barlow pt-4 text-lg">
          {planets[planet].description}
        </p>
        <div className="my-10 border-[0.5px] opacity-30" />

        <div className="flex gap-6">
          <div className="w-full max-w-[210px]">
            <p className="font-barlow-condensed text-sm tracking-[2px] uppercase">
              avg. distance
            </p>
            <p className="font-bellefair pt-1 text-[28px] uppercase">
              {planets[planet].distance}
            </p>
          </div>
          <div className="w-full max-w-[210px]">
            <p className="font-barlow-condensed text-sm tracking-[2px] uppercase">
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
