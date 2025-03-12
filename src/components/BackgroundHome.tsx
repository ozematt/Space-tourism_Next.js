import Image from "next/image";

const Background = () => {
  return (
    <>
      {/* Mobile */}
      <Image
        src="/home/background-home-mobile.jpg"
        alt="Mobile Background"
        fill
        className="top-0 -z-10 object-cover sm:hidden"
        priority
      />
      {/* Tablet */}
      <Image
        src="/home/background-home-tablet.jpg"
        alt="Tablet Background"
        fill
        className="top-0 -z-10 hidden object-cover sm:block lg:hidden"
        priority
      />
      {/* Desktop */}
      <Image
        src="/home/background-home-desktop.jpg"
        alt="Desktop Background"
        fill
        className="fixed top-0 left-0 -z-10 hidden h-screen w-screen object-cover lg:block"
        priority
      />
    </>
  );
};

export default Background;
