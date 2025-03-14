import { Destination, SectionBackground, SectionTitle } from "@/components";

type PlanetPageProps = {
  params: Promise<{ planet: "moon" | "mars" | "europa" | "titan" }>;
};

const PlanetPage = async ({ params }: PlanetPageProps) => {
  const planet = (await params).planet;

  return (
    <section>
      <SectionBackground src="/destination/background-destination-desktop.jpg" />
      <div className="mx-10 my-6 sm:my-12 lg:mx-40">
        <SectionTitle
          number="01"
          name="pick your
          destination"
        />
        <Destination planet={planet} />
      </div>
    </section>
  );
};

export default PlanetPage;
