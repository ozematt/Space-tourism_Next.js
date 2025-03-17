"use client";
import { crewMembersArr } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CrewNavbar = () => {
  const pathname = usePathname();
  const isActive = pathname.split("/")[2];
  return (
    <div className="flex justify-center gap-4 pt-15 xl:justify-start xl:gap-10 xl:pt-9">
      {crewMembersArr.map((crewMember) => (
        <Link href={"/crew/" + crewMember} key={crewMember}>
          <div
            className={`size-2.5 xl:size-4 ${isActive === crewMember ? "opacity-100" : ""} cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100`}
          />
        </Link>
      ))}
    </div>
  );
};

export default CrewNavbar;
