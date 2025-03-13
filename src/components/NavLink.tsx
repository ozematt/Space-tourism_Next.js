import Link from "next/link";

type NavLinkProps = {
  href: string;
  number: number;
  name: string;
};

const NavLink = ({ href, number, name }: NavLinkProps) => {
  return (
    <Link href={href} className="relative flex h-full items-center">
      <li className="peer line-clamp-1">
        <span className="pr-1 font-bold">0{number}</span>
        {name}
      </li>
      <div className="absolute bottom-0 w-full border-2 opacity-0 transition duration-1000 ease-in-out peer-hover:opacity-100" />
    </Link>
  );
};

export default NavLink;
