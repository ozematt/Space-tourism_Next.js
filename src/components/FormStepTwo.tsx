"use client";
import { planetsArr } from "@/data";
import InputPlanetCheckbox from "./InputPlanetCheckbox";
import { State } from "./Reservation";
import { useEffect, useState } from "react";

const FormStepTwo = (state: State) => {
  const [formState, setFormState] = useState(state);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedState = localStorage.getItem("formState");
      const actualState = storedState ? JSON.parse(storedState) : state;
      setFormState(actualState);
    }
  }, [state]);

  return (
    <div className="middle:grid-cols-2 middle:gap-4 grid grid-cols-1 gap-2">
      {planetsArr.map((planet) => (
        <InputPlanetCheckbox
          key={planet}
          planet={planet}
          defaultValue={formState.destination}
        />
      ))}
    </div>
  );
};

export default FormStepTwo;
