import { TechnologyStage, technologyStageArr } from "@/data";
import Link from "next/link";

type TechnologyNavbarProps = {
  stage: TechnologyStage;
};

const TechnologyNavbar = ({ stage }: TechnologyNavbarProps) => {
  return (
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
  );
};

export default TechnologyNavbar;
