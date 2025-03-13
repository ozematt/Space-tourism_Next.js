import Destination from "@/components/Destination";

type PlanetPageProps = {
  params: Promise<{ planet: "moon" | "mars" | "europa" | "titan" }>;
};

const PlanetPage = async ({ params }: PlanetPageProps) => {
  const planet = (await params).planet;

  return (
    <section>
      <img
        src="/destination/background-destination-desktop.jpg"
        alt="space bg"
        className="fixed inset-0 -z-1 h-screen w-screen object-cover"
      />

      <div className="mx-10 my-6 sm:my-12 lg:mx-40">
        <h4 className="font-barlow-condensed text-center tracking-[4px] uppercase sm:text-left sm:text-xl lg:text-[28px]">
          <span className="pr-6 font-bold opacity-50">01</span> pick your
          destination
        </h4>
        <Destination planet={planet} />
      </div>
    </section>
  );
};

export default PlanetPage;
