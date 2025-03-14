import { Logo, NavLinksList, SlideMenu } from ".";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between p-6 md:p-0 lg:mt-4">
      <Logo />
      <NavLinksList />
      <SlideMenu />
    </nav>
  );
};

export default Navbar;
