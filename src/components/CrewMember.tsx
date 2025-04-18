"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { crewMembers } from "@/data";
import { CrewMemberInfo, CrewNavbar } from ".";

export type CrewMemberName = keyof typeof crewMembers;

export type CrewMemberProps = {
  name: CrewMemberName;
};

const CrewMember = ({ name }: CrewMemberProps) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  return (
    <motion.div
      key={name}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="justify-between px-6 md:px-20 xl:flex xl:px-40"
    >
      <motion.div
        variants={fadeUp}
        className="mx-auto w-full max-w-[539px] py-6 xl:mx-0"
      >
        <CrewMemberInfo name={name} />
        <CrewNavbar />
      </motion.div>

      {/*Crew MEMBER IMG */}
      <motion.div variants={fadeUp}>
        <Image
          src={crewMembers[name].image}
          alt={crewMembers[name].name + "image"}
          width={500}
          height={676}
          className="mx-auto mt-8 object-contain px-9 transition-all duration-300 ease-linear sm:px-0 xl:mx-0 xl:mt-0"
        />
      </motion.div>
    </motion.div>
  );
};

export default CrewMember;
