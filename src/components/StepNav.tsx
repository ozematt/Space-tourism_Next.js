import { steps } from "@/data";
import { StepNavItem } from ".";

const StepNav = () => {
  return (
    <div className="m-[19px] w-full max-w-[273px] space-y-7 bg-[url(/reserve/form-background-reserve-desktop.webp)] px-8 py-10">
      {steps.map((item, index) => (
        <StepNavItem
          key={item.step}
          stepNumber={(index + 1).toString()}
          item={item}
        />
      ))}
    </div>
  );
};

export default StepNav;
