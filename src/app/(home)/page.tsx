import { BackgroundHome } from "@/components";

export default function Home() {
  return (
    <section className="grid max-xl:place-items-center">
      <BackgroundHome />
      <div className="mt-6 pb-[128px] max-xl:mx-auto max-xl:text-center sm:mt-[128px] xl:mx-[165px] xl:mt-[417px] xl:flex xl:justify-between">
        <div className="w-full max-w-[327px] sm:max-w-[560px]">
          <h5 className="font-barlow text-space-blue tracking-[4px] uppercase sm:text-[28px]">
            so, you want to travel to
          </h5>
          <h1 className="font-bellefair text-[80px] uppercase sm:text-[144px]">
            space
          </h1>
          <p className="font-barlow text-space-blue text-[15px] leading-[180%] sm:text-lg">
            Let’s face it, if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="relative flex size-36 cursor-pointer max-xl:mx-auto max-xl:mt-[66px] sm:size-64 xl:my-auto">
          <div className="absolute h-full w-full rounded-full bg-transparent hover:animate-ping hover:bg-white" />
          <button className="font-bellefair size-36 rounded-full bg-white text-lg text-black uppercase sm:size-64 sm:text-[32px]">
            explore
          </button>
        </div>
      </div>
    </section>
  );
}
