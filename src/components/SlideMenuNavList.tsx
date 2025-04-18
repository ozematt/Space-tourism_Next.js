"use client";

import Link from "next/link";
import { navLinks } from "@/data";

const SlideMenuNavList = () => {
  return (
    <ul className="font-barlow-condensed mt-12 flex flex-col gap-8 tracking-[2px]">
      {" "}
      {navLinks.map((navLink, index) => (
        <li
          key={navLink.name}
          className="relative"
          onClick={() => {
            (
              document.getElementById("menu-toggle") as HTMLInputElement
            ).checked = false;
          }}
        >
          <Link href={navLink.href} className="peer pl-8">
            <span className="pr-2 font-bold">0{index}</span>
            {navLink.name}
          </Link>

          <div className="absolute top-0 right-0 h-full border-2 opacity-0 transition duration-1000 ease-in-out peer-hover:opacity-100" />
        </li>
      ))}
    </ul>
  );
};

export default SlideMenuNavList;
