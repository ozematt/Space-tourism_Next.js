import {
  Destination,
  PlanetName,
  SectionBackground,
  SectionTitle,
} from "@/components";

type PlanetPageProps = {
  params: Promise<{ planet: PlanetName }>;
};

const PlanetPage = async ({ params }: PlanetPageProps) => {
  const planet = (await params).planet;

  return (
    <section>
      <SectionBackground />
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
