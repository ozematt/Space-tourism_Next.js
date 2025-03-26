"use client";
import { useState } from "react";

type InputAddOnsCheckboxProps = {
  title: string;
  subtitle: string;
  price: string;
};

const InputAddOnsCheckbox = ({
  title,
  subtitle,
  price,
}: InputAddOnsCheckboxProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className={`hover:bg-opacity-20 ${checked ? "bg-white/10" : ""} translate-all middle:h-[82px] relative flex flex-col rounded-[5px] px-5 py-3 ring-[.5px] duration-500 ease-in-out sm:px-6 sm:py-4`}
    >
      <div className="my-auto flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            value="1"
            className="translate-all size-4 cursor-pointer appearance-none rounded-[5px] bg-center bg-no-repeat ring-1 duration-500 ease-in-out checked:bg-green-700 checked:bg-[url(/reserve/tick.svg)] sm:size-6"
            onChange={() => setChecked(!checked)}
          />

          <div className="pl-4 sm:pl-6">
            <p className="font-barlow-condensed text-sm font-bold tracking-[1px] sm:text-lg">
              {title}
            </p>
            <p className="font-barlow-condensed text-xs tracking-[.5px] sm:text-base">
              {subtitle}
            </p>
          </div>
        </div>

        <p className="font-barlow-condensed text-base tracking-[.5px] sm:text-lg">
          {" "}
          +$ {price}
        </p>
      </div>
    </div>
  );
};

export default InputAddOnsCheckbox;
