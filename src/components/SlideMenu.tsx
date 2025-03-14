import { HamburgerIcon, SlideMenuCloseIcon, SlideMenuNavList } from ".";

const SlideMenu = () => {
  return (
    <>
      <HamburgerIcon />
      <div className="fixed top-0 right-0 z-20 flex h-full w-0 flex-col backdrop-blur-[40px] transition-all duration-300 ease-in-out peer-checked:w-[75%] md:hidden">
        <SlideMenuCloseIcon />
        <SlideMenuNavList />
      </div>
    </>
  );
};

export default SlideMenu;
