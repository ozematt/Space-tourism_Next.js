type StepNavItemProps = {
  stepNumber: string;
  title: string;
};

const StepNavItem = ({ stepNumber, title }: StepNavItemProps) => {
  return (
    <div className="flex items-center">
      <div className="font-bellefair grid size-[34px] place-items-center rounded-full uppercase ring-1 ring-white hover:bg-white hover:text-black">
        {stepNumber}
      </div>
      <div className="space-y-4 pl-4">
        {" "}
        <p className="font-barlow-condensed text-xs leading-[1.2px] tracking-[1.5px] uppercase">
          {" "}
          step 0{stepNumber}
        </p>
        <p className="font-barlow leading-[1.2px] font-bold tracking-[2px] uppercase">
          {title}
        </p>
      </div>
    </div>
  );
};

export default StepNavItem;
