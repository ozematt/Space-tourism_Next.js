type SectionTitleProps = {
  number: string;
  name: string;
};

const SectionTitle = ({ number, name }: SectionTitleProps) => {
  return (
    <h4 className="font-barlow-condensed text-center tracking-[4px] uppercase sm:text-left sm:text-xl lg:text-[28px]">
      <span className="pr-6 font-bold opacity-50">{number}</span> {name}
    </h4>
  );
};

export default SectionTitle;
