import Image from "next/image";

const SlideMenuCloseIcon = () => {
  return (
    <label htmlFor="menu-toggle" className="mx-6 my-8 cursor-pointer self-end">
      {" "}
      <Image
        src="/icons/icon-close.svg"
        alt="Close menu"
        width={24}
        height={21}
      />
    </label>
  );
};

export default SlideMenuCloseIcon;
