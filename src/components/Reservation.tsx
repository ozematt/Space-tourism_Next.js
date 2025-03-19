import { InputTextField } from ".";

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
        <div className="mt-[67px] space-y-12">
          <InputTextField id="name" placeholder="Name" />
          <InputTextField id="email" placeholder="Email Address" />
          <InputTextField id="phone" placeholder="Phone Number" />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
