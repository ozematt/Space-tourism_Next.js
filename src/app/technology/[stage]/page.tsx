import { SectionBackground, SectionTitle, TechnologyInfo } from "@/components";
import { TechnologyStage, technologyStage, technologyStageArr } from "@/data";
import Image from "next/image";
import Link from "next/link";

type StagePageProps = {
  params: Promise<{ stage: TechnologyStage }>;
};

const StagePage = async ({ params }: StagePageProps) => {
  const stage = (await params).stage;

  return (
    <section className="h-screen">
      <SectionBackground />

      <div className="mx-10 my-6 sm:my-12 lg:mx-40">
        <SectionTitle number="03" name="space launch 101" />
      </div>

      <div className="flex h-full items-center max-2xl:flex-col-reverse 2xl:max-h-[734px] 2xl:justify-between">
        {/* stage */}
        <div className="h-full px-6 pt-8 lg:px-0 2xl:ml-40 2xl:flex 2xl:shrink-0 2xl:pt-45">
          <div className="justify-center gap-7 space-y-8 max-2xl:flex 2xl:pr-16">
            {technologyStageArr.map((link, index) => (
              <Link
                href={`/technology/${link}`}
                key={index}
                className={` ${stage === link ? "bg-white text-blue-950" : ""} font-bellefair grid size-14 cursor-pointer place-items-center rounded-full text-2xl ring-1 ring-white transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-950 lg:size-20 lg:text-[32px]`}
              >
                {index + 1}
              </Link>
            ))}
          </div>

          <TechnologyInfo stage={stage} />
        </div>

        <Image
          src={technologyStage[stage].imagePortrait}
          alt="space rocket image"
          width={608}
          height={600}
          className="object-contain max-2xl:hidden"
        />
        <Image
          src={technologyStage[stage].imageLandscape}
          alt="space rocket image"
          width={770}
          height={356}
          className="object-cover object-top max-lg:h-[258px] 2xl:hidden"
        />
      </div>
    </section>
  );
};

export default StagePage;
