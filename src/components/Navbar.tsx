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
    <nav className="relative flex items-center justify-between lg:mt-4">
      <Link href="/" className="px-[40px] lg:px-[64px]">
        <Image src="/logo.svg" alt="logo" width={48} height={48} />
      </Link>

      <div className="absolute top-[50%] left-[169px] z-10 w-[560px] border-t-1 border-white/30 max-[1360px]:hidden" />

      <ul className="font-barlow-condensed flex h-[96px] w-[736px] items-center justify-end gap-[48px] bg-white/5 pr-[40px] tracking-[2px] backdrop-blur-[10px] lg:pr-[64px]">
        {navLinks.map((navLink, index) => (
          <NavLink
            key={navLink.name}
            name={navLink.name}
            href={navLink.href}
            number={index}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
