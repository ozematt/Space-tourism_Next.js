import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";

const SlideMenu = () => {
  return (
    <>
      <input type="checkbox" id="menu-toggle" className="peer hidden" />
      <label
        htmlFor="menu-toggle"
        className="cursor-pointer peer-checked:hidden md:hidden"
      >
        {" "}
        <Image
          src="/icons/icon-hamburger.svg"
          alt="Open menu"
          width={24}
          height={21}
        />
      </label>
      <div className="fixed top-0 right-0 z-20 flex h-full w-0 flex-col backdrop-blur-[40px] transition-all duration-300 ease-in-out peer-checked:w-[75%] md:hidden">
        <label
          htmlFor="menu-toggle"
          className="mx-6 my-8 cursor-pointer self-end"
        >
          {" "}
          <Image
            src="/icons/icon-close.svg"
            alt="Close menu"
            width={24}
            height={21}
          />
        </label>

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
      </div>
    </>
  );
};

export default SlideMenu;
