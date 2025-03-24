import { steps } from "@/data";
import { StepNavItem } from ".";

const StepNav = () => {
  return (
    <div className="flex h-[565px] w-full justify-center gap-2 bg-[url(/reserve/form-background-reserve-mobile.webp)] bg-cover bg-no-repeat px-8 max-md:h-[175px] max-md:pb-15 sm:gap-4 md:m-[19px] md:block md:max-w-[273px] md:space-y-7 md:bg-[url(/reserve/form-background-reserve-desktop.webp)] md:py-10">
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
