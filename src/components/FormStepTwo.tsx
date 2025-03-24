import { State } from "./Reservation";

const FormStepTwo = (state: State) => {
  const { destination } = state;
  console.log(destination);

  return (
    <div className="relative">
      <input
        type="checkbox"
        name="moon"
        id="moon"
        className="peer absolute inset-0 hidden"
      />
      <label
        htmlFor="moon"
        className="hover:bg-opacity-20 translate-all flex h-[130px] w-[218px] cursor-pointer flex-col rounded-[5px] p-4 ring-1 duration-500 ease-in-out peer-checked:bg-white/10 peer-checked:ring-2 hover:bg-white/10"
      >
        {/* Planet */}
        <div className="flex w-full justify-between">
          <div className="size-10 rounded-full bg-white"></div>
          <p className="font-barlow-condensed text-3xl tracking-[1px] uppercase">
            Moon
          </p>
        </div>

        {/* Info */}
        <div className="mt-6 flex justify-between">
          <div>
            <p className="font-barlow-condensed text-[10px] leading-2.5 tracking-[.5px] uppercase">
              est. travel time
            </p>
            <p className="font-barlow-condensed text-lg tracking-[.5px] uppercase">
              3 days
            </p>
          </div>
          <div className="text-right">
            <p className="font-barlow-condensed text-[10px] leading-2.5 tracking-[.5px] uppercase">
              cost
            </p>
            <p className="font-barlow-condensed text-lg font-bold tracking-[.5px] uppercase">
              1 mil $
            </p>
          </div>
        </div>
      </label>
    </div>
  );
};

export default FormStepTwo;
