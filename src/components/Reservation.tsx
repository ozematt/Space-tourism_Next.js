import { steps } from "@/data";
import { FormStepTitle, InputTextField } from ".";

const Reservation = () => {
  return (
    <div className="mx-auto mt-[100px] flex h-full max-h-[600px] w-full max-w-[945px] ring-1 ring-white/20 backdrop-blur-[10px]">
      <div className="m-[19px] w-full max-w-[273px] bg-white">
        <div>
          <div></div>
          <p></p>
          <p></p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[450px] py-[54px]">
        <FormStepTitle
          title={steps[0].title}
          description={steps[0].description}
        />

        <div className="mt-[67px] space-y-12">
          <InputTextField id="name" placeholder="Name" />
          <InputTextField id="email" placeholder="Email Address" />
          <InputTextField id="phone" placeholder="Phone Number" />
        </div>
        <div className="flex w-full justify-end pt-[70px]">
          <div className="my-auto w-full border-t-1 border-white/50" />
          <button className="font-barlow-condensed shrink-0 rounded-[5px] bg-white/90 px-5 py-2.5 text-xl font-bold tracking-[.5px] text-black uppercase ring-1">
            next step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
