import Link from "next/link";

type NavLinkProps = {
  href: string;
  number: number;
  name: string;
};

const NavLink = ({ href, number, name }: NavLinkProps) => {
  return (
    <Link href={href} className="relative flex items-center">
      <span className="pr-1 font-bold peer-hover:text-xl">0{number}</span>
      <li className="peer">{name}</li>
      <div className="absolute bottom-[-34px] w-full origin-center scale-x-0 border-2 transition-transform duration-300 ease-out peer-hover:scale-x-100" />
    </Link>
  );
};

export default NavLink;
