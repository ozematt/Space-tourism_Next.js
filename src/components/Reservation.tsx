const Reservation = () => {
  return (
    <div className="mx-auto mt-[100px] flex h-full max-h-[600px] w-full max-w-[945px] ring-1 ring-white/20 backdrop-blur-[10px]">
      <div className="m-[19px] w-full max-w-[273px] bg-white">
        <p className="text-black">hallo</p>
      </div>
      <div className="mx-auto w-full max-w-[450px] pt-[54px]">
        <div>
          <h3 className="font-bellefair text-4xl uppercase">Personal Info</h3>
          <p className="font-barlow-condensed text-lg tracking-[0.5px]">
            Please provide your name, email, and phone number.
          </p>
        </div>
        {/* INPUTS */}
        <div className="mt-[67px]">
          {/* NAME */}
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="peer h-[50px] w-full rounded-[5px] pl-4 placeholder-transparent ring-1 ring-white focus:ring-2 focus:ring-white focus:outline-none"
            />
            <label
              htmlFor="name"
              className="font-barlow-condensed pointer-events-none absolute top-[-28px] left-0 text-base tracking-[0.5px] transition-all select-none peer-placeholder-shown:top-[9px] peer-placeholder-shown:left-4.5 peer-placeholder-shown:text-xl"
            >
              Name
            </label>
            {/* {error && */}
            <p className="font-barlow-condensed absolute top-[-28px] right-0 text-base tracking-[.5px] text-red-500">
              Error
            </p>
          </div>

          <input type="text" />
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
