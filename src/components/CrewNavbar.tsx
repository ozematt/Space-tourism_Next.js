"use client";
import { crewMembersArr } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CrewNavbar = () => {
  const pathname = usePathname();
  const isActive = pathname.split("/")[2];
  return (
    <div className="flex justify-center gap-4 pt-15 xl:justify-start xl:gap-10 xl:pt-9"></div>
  );
};

export default CrewNavbar;
