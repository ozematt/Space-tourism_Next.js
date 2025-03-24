import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="shrink-0 px-0 min-[850px]:px-[40px] lg:px-[64px]">
      <Image
        src="/icons/logo.svg"
        alt="logo"
        width={40}
        height={40}
        className="md:size-12"
      />
    </Link>
  );
};

export default Logo;
