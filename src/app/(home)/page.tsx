import BackgroundHome from "@/components/BackgroundHome";

export default function Home() {
  return (
    <section className="">
      <BackgroundHome />
      <div className="mx-[165px] mt-[417px] flex items-end justify-between pb-[128px]">
        <div className="w-full max-w-[540px]">
          {" "}
          <h5 className="font-barlow text-space-blue text-[28px] tracking-[4px] uppercase">
            so, you want to travel to
          </h5>
          <h1 className="font-bellefair text-[144px] uppercase">space</h1>
          <p className="font-barlow text-space-blue text-lg leading-[180%]">
            Let’s face it, if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="relative my-auto flex size-64 cursor-pointer">
          <div className="absolute h-full w-full rounded-full bg-transparent hover:animate-ping hover:bg-white" />
          <button className="font-bellefair size-64 rounded-full bg-white text-[32px] text-black uppercase">
            explore
          </button>
        </div>
      </div>
    </section>
  );
}
