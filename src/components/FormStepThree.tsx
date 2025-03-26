const FormStepThree = () => {
  return (
    <div className="hover:bg-opacity-20 translate-all middle:h-[82px] relative flex cursor-pointer flex-col rounded-[5px] px-6 py-4 ring-[.5px] duration-500 ease-in-out hover:bg-white/10">
      <div className="my-auto flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            value="1"
            className="size-6 appearance-none rounded-[5px] bg-center bg-no-repeat ring-1 checked:bg-green-600 checked:bg-[url(/reserve/tick.svg)]"
          />

          <div className="pl-6">
            <p className="font-barlow-condensed text-lg font-bold tracking-[1px]">
              Title
            </p>
            <p className="font-barlow-condensed tracking-[.5px]">subtitle</p>
          </div>
        </div>

        <p className="font-barlow-condensed text-lg tracking-[.5px]">
          {" "}
          +$ 50 k
        </p>
      </div>
    </div>
  );
};

export default FormStepThree;
