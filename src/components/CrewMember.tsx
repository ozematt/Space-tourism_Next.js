import { crewMembers } from "@/data";
import Image from "next/image";

export type CrewMemberName = keyof typeof crewMembers;

export type CrewMemberProps = {
  name: CrewMemberName;
};

const CrewMember = ({ name }: CrewMemberProps) => {
  return (
    <div className="grid grid-cols-2 px-[165px]">
      <div className="flex h-full w-full max-w-[539px] flex-col">
        <div className="pt-56">
          <h4 className="font-bellefair text-[32px] uppercase opacity-50">
            {crewMembers[name].rank}
          </h4>
          <h2 className="font-bellefair text-[56px] uppercase">
            {crewMembers[name].name}
          </h2>
          <p className="text-space-blue font-barlow text-lg leading-[180%]">
            {crewMembers[name].description}
          </p>
        </div>

        <div className="mt-auto flex gap-10 pt-9">
          <div className="size-4 cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100" />
          <div className="size-4 cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100" />
          <div className="size-4 cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100" />
          <div className="size-4 cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100" />
        </div>
      </div>

      <Image
        src={crewMembers[name].image}
        alt={crewMembers[name].name + "image"}
        width={539}
        height={676}
      />
    </div>
  );
};

export default CrewMember;
