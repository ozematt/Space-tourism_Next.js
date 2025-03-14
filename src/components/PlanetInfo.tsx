import { planets } from "@/data";
import { DestinationProps } from ".";

const PlanetInfo = ({ planet }: DestinationProps) => {
  return (
    <>
      {/* PLANET NAME */}
      <h2 className="font-bellefair mt-6 text-[80px] uppercase lg:mt-10 lg:text-8xl">
        {planets[planet].name}
      </h2>
      {/* PLANET DESCRIPTION */}
      <p className="text-space-blue font-barlow pt-4 xl:text-lg">
        {planets[planet].description}
      </p>
      <div className="my-10 border-[0.5px] opacity-30" />
      {/* PLANET DISTANCE */}
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
    </>
  );
};

export default PlanetInfo;
