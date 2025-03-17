import {
  SectionBackground,
  SectionTitle,
  TechnologyImage,
  TechnologyInfo,
  TechnologyNavbar,
} from "@/components";
import { TechnologyStage } from "@/data";

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
        <div className="h-full px-6 pt-8 lg:px-0 2xl:ml-40 2xl:flex 2xl:shrink-0 2xl:pt-45">
          <TechnologyNavbar stage={stage} />
          <TechnologyInfo stage={stage} />
        </div>

        <TechnologyImage stage={stage} />
      </div>
    </section>
  );
};

export default StagePage;
