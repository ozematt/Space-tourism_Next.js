"use client";

import { motion } from "framer-motion";
import { TechnologyStage, technologyStage } from "@/data";

type TechnologyInfoProps = {
  stage: TechnologyStage;
};

const TechnologyInfo = ({ stage }: TechnologyInfoProps) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  return (
    <motion.div
      key={stage}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="w-full max-w-[491px] text-center xl:h-[630px] xl:text-left"
    >
      <motion.div variants={fadeUp}>
        <h4 className="font-bellefair text-lg uppercase opacity-50 sm:text-2xl xl:text-[32px]">
          the terminology...
        </h4>
        <h2 className="font-bellefair text-2xl uppercase sm:pt-4 sm:text-[40px] sm:leading-[46px] xl:text-[56px] xl:leading-16">
          {technologyStage[stage].title}
        </h2>
        <p className="text-space-blue font-barlow pt-6 text-[15px] leading-[180%] sm:text-lg">
          {technologyStage[stage].description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TechnologyInfo;
