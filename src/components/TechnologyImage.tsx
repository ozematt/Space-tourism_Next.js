import { TechnologyStage, technologyStage } from "@/data";
import Image from "next/image";

type TechnologyImageProps = {
  stage: TechnologyStage;
};

const TechnologyImage = ({ stage }: TechnologyImageProps) => {
  return (
    <>
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
    </>
  );
};

export default TechnologyImage;
