"use client";

import { crewMembers, crewMembersArr } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type CrewMemberName = keyof typeof crewMembers;

export type CrewMemberProps = {
  name: CrewMemberName;
};

const CrewMember = ({ name }: CrewMemberProps) => {
  const pathname = usePathname();
  const isActive = pathname.split("/")[2];

  return (
    <div className="justify-between px-6 md:px-20 xl:flex xl:px-40">
      {/* Text section */}
      <div className="mx-auto w-full max-w-[539px] py-6 xl:mx-0">
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

        <div className="flex justify-center gap-4 pt-15 xl:justify-start xl:gap-10 xl:pt-9">
          {crewMembersArr.map((crewMember) => (
            <Link href={"/crew/" + crewMember} key={crewMember}>
              <div
                className={`size-2.5 xl:size-4 ${isActive === crewMember ? "opacity-100" : ""} cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100`}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* IMG */}
      <Image
        src={crewMembers[name].image}
        alt={crewMembers[name].name + "image"}
        width={500}
        height={676}
        className="mx-auto object-contain px-9 sm:px-0 xl:mx-0"
      />
    </div>
  );
};

export default CrewMember;
