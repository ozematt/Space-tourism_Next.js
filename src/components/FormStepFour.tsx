const FormStepFour = () => {
  return (
    <>
      <div className="space-y-4 rounded-[5px] bg-white/10 py-4 ring-[.5px]">
        <div className="flex items-center justify-between px-6 sm:px-6">
          <div>
            <p className="font-barlow-condensed text-lg font-bold tracking-[1px] uppercase">
              moon
            </p>
            <p className="font-barlow-condensed cursor-pointer text-xs tracking-[.5px]">
              Change
            </p>
          </div>
          <p>+$ 100k</p>
        </div>
        <div className="flex items-center justify-between px-6 sm:px-6">
          <div>
            <p className="font-barlow-condensed text-lg font-bold tracking-[1px] uppercase">
              moon
            </p>
            <p className="font-barlow-condensed cursor-pointer text-xs tracking-[.5px]">
              Change
            </p>
          </div>
          <p>+$ 100k</p>
        </div>
        <div className="mx-6 border-t-[.5px]" />
        <div className="flex items-center justify-between px-6 sm:px-6">
          <p className="font-barlow-condensed text-base tracking-[.5px] sm:text-lg">
            Reservation
          </p>
          <p className="font-barlow-condensed text-lg tracking-[.5px]">+$ 5k</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 pt-6 sm:px-6">
        <p className="font-barlow-condensed text-base tracking-[.5px] sm:text-lg">
          Total (per person)
        </p>
        <p className="font-barlow-condensed text-2xl font-bold tracking-[1px]">
          +$ 5k
        </p>
      </div>
    </>
  );
};

export default FormStepFour;
