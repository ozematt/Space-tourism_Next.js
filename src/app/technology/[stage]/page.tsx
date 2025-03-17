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
      </div>{" "}
      <div className="flex justify-between">
        {/* stage */}
        <div className="ml-40 flex xl:pt-50">
          {" "}
          <div className="space-y-8 pr-16">
            {technologyStageArr.map((link, index) => (
              <Link
                href={`/technology/${link}`}
                key={index}
                className={` ${stage === link ? "bg-white text-blue-950" : ""} font-bellefair grid size-20 cursor-pointer place-items-center rounded-full text-[32px] ring-1 ring-white transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-950`}
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
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default StagePage;
