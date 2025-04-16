"use client";
import { useFormContext } from "@/context/FormContext";
import { addOns, planetCost } from "@/data";
import Link from "next/link";

const FormStepFour = () => {
  const { newFormData } = useFormContext();

  const addOnsChecked = Object.values(newFormData.addOns).includes(true);

  return (
    <>
      <div className="space-y-4 rounded-[5px] bg-white/10 py-4 ring-[.5px]">
        <div className="flex items-center justify-between px-6 sm:px-6">
          <div>
            <p className="font-barlow-condensed text-lg font-bold tracking-[1px] uppercase">
              {newFormData.destination}
            </p>
            <Link
              href="/reserve/step02"
              className="font-barlow-condensed cursor-pointer text-xs tracking-[.5px]"
            >
              Change
            </Link>
          </div>
          <p>
            +${" "}
            {newFormData.destination ? planetCost[newFormData.destination] : ""}
          </p>
        </div>
        {addOnsChecked ? (
          <div className="flex items-center justify-between px-6 sm:px-6">
            <div>
              <p className="font-barlow-condensed text-lg font-bold tracking-[1px] uppercase">
                AddOns
              </p>
              <Link
                href="/reserve/step03"
                className="font-barlow-condensed cursor-pointer text-xs tracking-[.5px]"
              >
                Change
              </Link>
            </div>

            <p>+$ {newFormData.addOns.cost}k</p>
          </div>
        ) : null}

        <div className="mx-6 border-t-[.5px]" />
        <div className="flex items-center justify-between px-6 sm:px-6">
          <p className="font-barlow-condensed text-base tracking-[.5px] sm:text-lg">
            Reservation
          </p>
          <p className="font-barlow-condensed text-lg tracking-[.5px]">+$ 5k</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 pt-6 sm:px-6">
        <p className="font-barlow-condensed text-base tracking-[.5px] sm:text-lg">
          Total (per person)
        </p>
        <p className="font-barlow-condensed text-2xl font-bold tracking-[1px]">
          +$ 5k
        </p>
      </div>
    </>
  );
};

export default FormStepFour;
