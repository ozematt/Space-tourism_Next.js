import { navLinks } from "@/data";
import { NavLink } from ".";

const NavLinksList = () => {
  return (
    <>
      <div className="absolute top-[50%] left-[169px] z-10 w-[450px] border-t-1 border-white/30 max-[1360px]:hidden" />

      <ul className="font-barlow-condensed hidden h-[96px] w-[736px] items-center justify-end gap-[48px] bg-white/5 pr-[40px] tracking-[2px] backdrop-blur-[10px] min-[850px]:flex lg:pr-[64px]">
        {navLinks.map((navLink, index) => (
          <NavLink
            key={navLink.name}
            name={navLink.name}
            href={navLink.href}
            number={index}
          />
        ))}
      </ul>
    </>
  );
};

export default NavLinksList;
