import { planetsArr } from "@/data";
import InputPlanetCheckbox from "./InputPlanetCheckbox";

const FormStepTwo = () => {
  return (
    <div className="middle:grid-cols-2 middle:gap-4 grid grid-cols-1 gap-2">
      {planetsArr.map((planet) => (
        <InputPlanetCheckbox key={planet} planet={planet} />
      ))}
    </div>
  );
};

export default FormStepTwo;
