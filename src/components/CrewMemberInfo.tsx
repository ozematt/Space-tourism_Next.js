import { crewMembers } from "@/data";
import { CrewMemberProps } from ".";

const CrewMemberInfo = ({ name }: CrewMemberProps) => {
  return (
    <div className="text-center xl:h-[630px] xl:pt-50 xl:text-left">
      <h4 className="font-bellefair text-lg uppercase opacity-50 sm:text-2xl xl:text-[32px]">
        {crewMembers[name].rank}
      </h4>
      <h2 className="font-bellefair text-2xl uppercase sm:pt-4 sm:text-[40px] sm:leading-[46px] xl:text-[56px] xl:leading-16">
        {crewMembers[name].name}
      </h2>
      <p className="text-space-blue font-barlow pt-6 text-[15px] leading-[180%] sm:text-lg">
        {crewMembers[name].description}
      </p>
    </div>
  );
};

export default CrewMemberInfo;
