"use client";
import { backgroundImages } from "@/data";
import Image from "next/image";
import { usePathname } from "next/navigation";

export type PageKeys = keyof typeof backgroundImages;

const SectionBackground = () => {
  const pathname = usePathname();

  const pageKey = (pathname.split("/")[1] as PageKeys) || "home";
  const isActive = backgroundImages[pageKey] || backgroundImages.home;

  return (
    <>
      {/* Desktop */}
      <div className="fixed top-0 left-0 -z-10 hidden h-screen w-screen lg:block">
        <Image
          src={isActive.desktop}
          alt="Desktop Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Tablet */}
      <div className="fixed top-0 left-0 -z-10 hidden h-screen w-screen sm:block lg:hidden">
        <Image
          src={isActive.tablet}
          alt="Tablet Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Mobile */}
      <div className="fixed top-0 left-0 -z-10 h-screen w-screen sm:hidden">
        <Image
          src={isActive.mobile}
          alt="Mobile Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
    </>
  );
};

export default SectionBackground;
