"use client";

import { backgroundImages } from "@/data";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export type PageKeys = keyof typeof backgroundImages;

const SectionBackground = () => {
  const pathname = usePathname();

  const pageKey = (pathname.split("/")[1] as PageKeys) || "home";
  const isActive = backgroundImages[pageKey] || backgroundImages.home;

  const AnimationSettings = {
    transition: { duration: 0.5 },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {/* Desktop */}
        <motion.img
          key={`${pageKey}-desktop`}
          src={isActive.desktop}
          alt={`${pageKey} background`}
          className="fixed top-0 left-0 -z-10 h-screen w-screen object-cover lg:block"
          {...AnimationSettings}
        />

        {/* Tablet */}
        <motion.img
          key={`${pageKey}-tablet`}
          src={isActive.tablet}
          alt={`${pageKey} background`}
          className="fixed top-0 left-0 -z-10 hidden h-screen w-screen object-cover sm:block lg:hidden"
          {...AnimationSettings}
        />

        {/* Mobile */}
        <motion.img
          key={`${pageKey}-mobile`}
          src={isActive.mobile}
          alt={`${pageKey} background`}
          className="fixed top-0 left-0 -z-10 h-screen w-screen object-cover sm:hidden"
          {...AnimationSettings}
        />
      </AnimatePresence>
    </>
  );
};

export default SectionBackground;
