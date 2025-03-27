import Image from "next/image";

const FormStepCompleted = () => {
  return (
    <div className="">
      <Image
        src="/reserve/completed-tick.webp"
        alt="completed-tick"
        width={100}
        height={100}
        className="mx-auto h-[60px] w-[60px] sm:h-[100px] sm:w-[100px]"
      />
      <h4 className="font-bellefair mt-6 text-center text-2xl uppercase sm:text-[32px]">
        thank you!
      </h4>
      <p className="font-barlow-condensed mt-5 text-center text-base tracking-[.5px] sm:text-lg">
        Thank you for choosing Space Tourism! Your booking has been successfully
        confirmed. You are one step closer to an unforgettable adventure beyond
        stars!
      </p>
    </div>
  );
};

export default FormStepCompleted;
