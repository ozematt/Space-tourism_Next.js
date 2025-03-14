type SectionBackgroundProps = {
  src: string;
};

const SectionBackground = ({ src }: SectionBackgroundProps) => {
  return (
    <img
      src={src}
      alt="space bg"
      className="fixed inset-0 -z-1 h-screen w-screen object-cover"
    />
  );
};

export default SectionBackground;
