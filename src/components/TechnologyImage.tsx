"use client";

import { TechnologyStage, technologyStage } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";

type TechnologyImageProps = {
  stage: TechnologyStage;
};

const TechnologyImage = ({ stage }: TechnologyImageProps) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div key={stage} initial="hidden" animate="visible" exit="hidden">
      <motion.div variants={fadeUp}>
        <Image
          src={technologyStage[stage].imagePortrait}
          alt="space rocket image"
          width={608}
          height={600}
          className="object-contain max-2xl:hidden"
          priority
        />
        <Image
          src={technologyStage[stage].imageLandscape}
          alt="space rocket image"
          width={770}
          height={356}
          className="object-cover object-top max-lg:h-[258px] 2xl:hidden"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default TechnologyImage;
