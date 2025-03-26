const FormStepThree = () => {
  return (
    <div className="hover:bg-opacity-20 translate-all middle:h-[82px] relative flex cursor-pointer flex-col rounded-[5px] p-4 ring-[.5px] duration-500 ease-in-out hover:bg-white/10">
      <div className="my-auto flex items-center">
        <input
          type="checkbox"
          value="1"
          className="size-6 appearance-none rounded-[5px] bg-center bg-no-repeat ring-1 checked:bg-green-600 checked:bg-[url(/reserve/tick.svg)]"
        />

        <label htmlFor="addOns" className="pl-6">
          Label
        </label>
      </div>
    </div>
  );
};

export default FormStepThree;
