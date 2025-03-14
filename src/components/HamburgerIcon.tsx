import Image from "next/image";

const HamburgerIcon = () => {
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
    </>
  );
};

export default HamburgerIcon;
