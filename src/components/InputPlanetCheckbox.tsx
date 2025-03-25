import { planets } from "@/data";
import { PlanetName } from "./Destination";
import Image from "next/image";

type InputPlanetCheckboxProps = {
  planet: PlanetName;
};

const InputPlanetCheckbox = ({ planet }: InputPlanetCheckboxProps) => {
  const { name, image, imageAlt, travelTime, cost } = planets[planet];

  return (
    <div className="relative">
      <input
        type="radio"
        name="planet"
        value={name}
        id={name}
        className="peer absolute inset-0 hidden"
      />
      <label
        htmlFor={name}
        className="hover:bg-opacity-20 translate-all flex h-[130px] cursor-pointer flex-col rounded-[5px] p-4 ring-[.5px] duration-500 ease-in-out peer-checked:bg-white/10 peer-checked:ring-2 hover:bg-white/10"
      >
        {/* Planet */}
        <div className="flex w-full justify-between">
          <Image
            src={image}
            width={40}
            height={40}
            alt={imageAlt}
            className="size-10 rounded-full"
          />
          <p className="font-barlow-condensed text-3xl tracking-[1px] uppercase">
            {name}
          </p>
        </div>

        {/* Info */}
        <div className="mt-6 flex justify-between">
          <div>
            <p className="font-barlow-condensed text-[10px] leading-2.5 tracking-[.5px] uppercase">
              est. travel time
            </p>
            <p className="font-barlow-condensed text-lg tracking-[.5px] uppercase">
              {travelTime}
            </p>
          </div>
          <div className="text-right">
            <p className="font-barlow-condensed text-[10px] leading-2.5 tracking-[.5px] uppercase">
              cost
            </p>
            <p className="font-barlow-condensed text-lg font-bold tracking-[.5px] uppercase">
              {cost} $
            </p>
          </div>
        </div>
      </label>
    </div>
  );
};

export default InputPlanetCheckbox;
