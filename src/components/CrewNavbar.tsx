"use client";
import { crewMembersArr } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CrewNavbar = () => {
  const pathname = usePathname();
  const isActive = pathname.split("/")[2];
  return (
   
  );
};

export default CrewNavbar;
