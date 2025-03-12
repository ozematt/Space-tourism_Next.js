import Image from "next/image";

const Background = () => {
  return (
    <Image
      src="/home/background-home-desktop.jpg"
      alt="Space Travel Background"
      fill
      className="top-0 -z-10 object-cover"
      priority
    />
  );
};

export default Background;
