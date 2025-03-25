"use client";
import { planets } from "@/data";
import { PlanetName } from "./Destination";
import Image from "next/image";
import { useEffect, useState } from "react";

type InputPlanetCheckboxProps = {
  planet: PlanetName;
  defaultValue?: FormDataEntryValue | PlanetName;
};

const InputPlanetCheckbox = ({
  planet,
  defaultValue,
}: InputPlanetCheckboxProps) => {
  const { name, image, imageAlt, travelTime, cost } = planets[planet];

  const [checked, setChecked] = useState(false);
  console.log(name, checked);

  useEffect(() => {
    if (defaultValue === name) {
      setChecked(true);
    }
  }, [defaultValue, name]);

  return (
    <div className="relative">
      <input
        type="radio"
        name="destination"
        value={name}
        id={name}
        checked={checked}
        onChange={() => setChecked(true)}
        className="peer absolute inset-0 hidden"
      />
      <label
        htmlFor={name}
        className="hover:bg-opacity-20 translate-all middle:h-[130px] relative flex cursor-pointer flex-col rounded-[5px] p-4 ring-[.5px] duration-500 ease-in-out peer-checked:bg-white/10 peer-checked:ring-2 hover:bg-white/10"
      >
        {/* Planet */}
        <div className="middle:justify-between flex w-full">
          <Image
            src={image}
            width={40}
            height={40}
            alt={imageAlt}
            className="size-10 rounded-full"
          />
          <p className="font-barlow-condensed middle:text-3xl max-middle:leading-4 mb-2 pl-2 text-lg tracking-[1px] uppercase">
            {name}
          </p>
        </div>

        {/* Info */}
        <div className="middle:static middle:pt-0 middle:pr-0 middle:pl-0 max-middle:flex-row-reverse middle:mt-6 absolute inset-0 mt-1 flex justify-between pt-8 pr-4 pl-16">
          <div>
            <p className="font-barlow-condensed middle:block hidden text-[10px] leading-2.5 tracking-[.5px] uppercase">
              est. travel time
            </p>
            <p className="font-barlow-condensed middle:text-lg text-base tracking-[.5px] uppercase">
              {travelTime}
            </p>
          </div>
          <div className="text-right">
            <p className="font-barlow-condensed middle:block hidden text-[10px] leading-2.5 tracking-[.5px] uppercase">
              cost
            </p>
            <p className="font-barlow-condensed middle:text-lg middle:font-bold text-base tracking-[.5px] uppercase">
              {cost} $
            </p>
          </div>
        </div>
      </label>
    </div>
  );
};

export default InputPlanetCheckbox;
