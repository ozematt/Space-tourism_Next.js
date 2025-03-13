import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "DESTINATION",
    href: "/",
  },
  {
    name: "CREW",
    href: "/",
  },
  {
    name: "TECHNOLOGY",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between p-6 md:p-0 lg:mt-4">
      <Link href="/" className="shrink-0 md:px-[40px] lg:px-[64px]">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={40}
          height={40}
          className="md:size-12"
        />
      </Link>
      <div className="absolute top-[50%] left-[169px] z-10 w-[560px] border-t-1 border-white/30 max-[1360px]:hidden" />
      <ul className="font-barlow-condensed hidden h-[96px] w-[736px] items-center justify-end gap-[48px] bg-white/5 pr-[40px] tracking-[2px] backdrop-blur-[10px] md:flex lg:pr-[64px]">
        {navLinks.map((navLink, index) => (
          <NavLink
            key={navLink.name}
            name={navLink.name}
            href={navLink.href}
            number={index}
          />
        ))}
      </ul>{" "}
      <button className="peer cursor-pointer md:hidden">
        {" "}
        <Image
          src="/icons/icon-hamburger.svg"
          alt="Open menu"
          width={24}
          height={21}
        />
      </button>
      <div className="fixed top-0 right-0 z-20 flex h-full w-0 flex-col backdrop-blur-[40px] transition-all duration-300 ease-in-out peer-focus-within:w-[75%] md:hidden">
        <Image
          src="/icons/icon-close.svg"
          alt="Close menu"
          width={24}
          height={21}
          className="mx-6 my-8 cursor-pointer self-end"
        />
        <ul className="font-barlow-condensed mt-12 flex flex-col gap-8 tracking-[2px]">
          {" "}
          {navLinks.map((navLink, index) => (
            <Link key={navLink.name} href={navLink.href} className="relative">
              <li className="peer pl-8">
                <span className="pr-2 font-bold">0{index}</span>
                {navLink.name}
              </li>

              <div className="absolute top-0 right-0 h-full border-2 opacity-0 transition duration-1000 ease-in-out peer-hover:opacity-100" />
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
