import Link from "next/link";

type NavLinkProps = {
  href: string;
  number: number;
  name: string;
};

const NavLink = ({ href, number, name }: NavLinkProps) => {
  return (
    <Link href={href} className="relative">
      <li className="peer line-clamp-1">
        <span className="pr-1 font-bold">0{number} </span> {name}
      </li>
      <div className="absolute bottom-[-34px] w-full origin-center scale-x-0 border-2 transition-transform duration-300 ease-out peer-hover:scale-x-100"></div>
    </Link>
  );
};

export default NavLink;
