import { crewMembers } from "@/data";
import Image from "next/image";
import { CrewMemberInfo, CrewNavbar } from ".";

export type CrewMemberName = keyof typeof crewMembers;

export type CrewMemberProps = {
  name: CrewMemberName;
};

const CrewMember = ({ name }: CrewMemberProps) => {
  return (
    <div className="justify-between px-6 md:px-20 xl:flex xl:px-40">
      <div className="mx-auto w-full max-w-[539px] py-6 xl:mx-0">
        <CrewMemberInfo name={name} />
        <CrewNavbar />
      </div>

      {/*Crew MEMBER IMG */}
      <Image
        src={crewMembers[name].image}
        alt={crewMembers[name].name + "image"}
        width={500}
        height={676}
        className="mx-auto mt-8 object-contain px-9 sm:px-0 xl:mx-0 xl:mt-0"
        priority
      />
    </div>
  );
};

export default CrewMember;
