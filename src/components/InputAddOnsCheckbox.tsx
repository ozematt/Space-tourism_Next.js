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
      className={`hover:bg-opacity-20 ${checked ? "bg-white/10" : ""} translate-all middle:h-[82px] relative flex cursor-pointer flex-col rounded-[5px] px-6 py-4 ring-[.5px] duration-500 ease-in-out hover:bg-white/10`}
    >
      <div className="my-auto flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            value="1"
            className="translate-all size-6 appearance-none rounded-[5px] bg-center bg-no-repeat ring-1 duration-500 ease-in-out checked:bg-green-600 checked:bg-[url(/reserve/tick.svg)]"
            onChange={() => setChecked(!checked)}
          />

          <div className="pl-6">
            <p className="font-barlow-condensed text-lg font-bold tracking-[1px]">
              {title}
            </p>
            <p className="font-barlow-condensed tracking-[.5px]">{subtitle}</p>
          </div>
        </div>

        <p className="font-barlow-condensed text-lg tracking-[.5px]">
          {" "}
          +$ {price}
        </p>
      </div>
    </div>
  );
};

export default InputAddOnsCheckbox;
