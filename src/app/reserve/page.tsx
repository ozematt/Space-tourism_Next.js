import { SectionBackground, SectionTitle } from "@/components";

const ReserveFirstPage = () => {
  return (
    <section className="h-screen">
      <SectionBackground />
      <div className="mx-10 my-6 sm:my-12 lg:mx-40">
        <SectionTitle number="01" name="make your reservation" />
      </div>
    </section>
  );
};

export default ReserveFirstPage;
