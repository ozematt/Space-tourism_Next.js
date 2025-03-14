"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavLinkProps = {
  href: string;
  number: number;
  name: string;
};

const NavLink = ({ href, number, name }: NavLinkProps) => {
  const pathname = usePathname();
  const isHome = href === "/";

  const isActive = isHome
    ? pathname === href
    : pathname.split("/")[1] === href.split("/")[1];

  return (
    <li className="relative flex h-full items-center">
      <Link href={href} className="peer line-clamp-1">
        <span className="pr-1 font-bold">0{number}</span>
        {name}
      </Link>
      <div
        className={`absolute ${isActive ? "opacity-100" : ""} bottom-0 w-full border-2 opacity-0 transition duration-1000 ease-in-out peer-hover:opacity-100`}
      />
    </li>
  );
};

export default NavLink;
