import { planetsArr } from "@/data";
import InputPlanetCheckbox from "./InputPlanetCheckbox";

const FormStepTwo = () => {
  return (
    <div className="middle:grid-cols-2 grid grid-cols-1 gap-4">
      {planetsArr.map((planet) => (
        <InputPlanetCheckbox key={planet} planet={planet} />
      ))}
    </div>
  );
};

export default FormStepTwo;
