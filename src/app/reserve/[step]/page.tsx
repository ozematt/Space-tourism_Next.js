import { Reservation, SectionBackground, SectionTitle } from "@/components";

type StepPageProps = {
  params: Promise<{
    step: "step01" | "step02" | "step03" | "step04" | "step05";
  }>;
};

const StepPage = ({ params }: StepPageProps) => {
  return (
    <section className="h-screen">
      <SectionBackground />
      <div className="mx-10 my-6 sm:my-12 lg:mx-40">
        <SectionTitle number="01" name="make your reservation" />
      </div>

      <Reservation />
    </section>
  );
};

export default StepPage;
