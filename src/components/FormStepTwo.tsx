"use client";
import { planetsArr } from "@/data";
import { State } from "@/types";
import { InputPlanetCheckbox } from ".";

const FormStepTwo = (state: State) => {
  return (
    <div className="middle:grid-cols-2 middle:gap-4 relative grid grid-cols-1 gap-2">
      {planetsArr.map((planet) => (
        <InputPlanetCheckbox
          key={planet}
          planet={planet}
          error={state.errors?.destination}
        />
      ))}
      {state.errors?.destination && (
        <p className="font-barlow-condensed absolute top-[-28px] right-0 text-sm tracking-[.5px] text-red-500 sm:text-base">
          {state.errors.destination}
        </p>
      )}
    </div>
  );
};

export default FormStepTwo;
