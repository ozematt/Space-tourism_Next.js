"use client";
import { backgroundImages } from "@/data";
import { usePathname } from "next/navigation";

type PageKeys = "home" | "destination" | "crew" | "technology";

const SectionBackground = () => {
  const pathname = usePathname();

  const pageKey = (pathname.split("/")[1] as PageKeys) || "home";
  const isActive = backgroundImages[pageKey] || backgroundImages.home;

  return (
    <>
      {/* Desktop */}
      <img
        src={isActive.desktop}
        alt="Desktop Background"
        className="fixed top-0 left-0 -z-10 hidden h-screen w-screen object-cover lg:block"
      />
      {/* Tablet */}
      <img
        src={isActive.tablet}
        alt="Tablet Background"
        className="fixed top-0 left-0 -z-10 hidden h-screen w-screen object-cover sm:block lg:hidden"
      />
      {/* Mobile */}
      <img
        src={isActive.mobile}
        alt="Mobile Background"
        className="fixed top-0 left-0 -z-10 h-screen w-screen object-cover sm:hidden"
      />
    </>
  );
};

export default SectionBackground;
