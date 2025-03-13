const PlanetPage = async ({
  params,
}: {
  params: Promise<{ planet: string }>;
}) => {
  const planet = (await params).planet;
  console.log(planet);

  return (
    <section>
      <img
        src="/destination/background-destination-desktop.jpg"
        alt="space bg"
        className="fixed inset-0 -z-1 h-screen w-screen object-cover"
      />

      <div className="mx-40 my-12">
        <h4 className="font-barlow-condensed text-[28px] tracking-[4px] uppercase">
          <span className="pr-6 font-bold opacity-50">01</span> pick your
          destination
        </h4>
        {/* <Image></Image> */}
      </div>
    </section>
  );
};

export default PlanetPage;
