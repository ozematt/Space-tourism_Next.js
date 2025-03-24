import { planetsArr } from "@/data";
import InputPlanetCheckbox from "./InputPlanetCheckbox";

const FormStepTwo = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {planetsArr.map((planet) => (
        <InputPlanetCheckbox key={planet} planet={planet} />
      ))}
    </div>
  );
};

export default FormStepTwo;
