import { addOns } from "@/data";
import { InputAddOnsCheckbox } from ".";

const FormStepThree = () => {
  return (
    <div className="space-y-3">
      {addOns.map((addOn) => (
        <InputAddOnsCheckbox key={addOn.title} {...addOn} />
      ))}
    </div>
  );
};

export default FormStepThree;
