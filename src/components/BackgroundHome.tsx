import Image from "next/image";

const Background = () => {
  return (
    <>
      {/* Mobile */}
      <img
        src="/home/background-home-mobile.jpg"
        alt="Mobile Background"
        className="fixed top-0 left-0 -z-10 object-cover sm:hidden"
      />
      {/* Tablet */}
      <img
        src="/home/background-home-tablet.jpg"
        alt="Tablet Background"
        className="fixed top-0 left-0 -z-10 hidden h-screen w-screen object-cover sm:block lg:hidden"
      />
      {/* Desktop */}
      <img
        src="/home/background-home-desktop.jpg"
        alt="Desktop Background"
        className="fixed top-0 left-0 -z-10 hidden h-screen w-screen object-cover lg:block"
      />
    </>
  );
};

export default Background;
