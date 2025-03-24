import {
  Reservation,
  SectionBackground,
  SectionTitle,
  StepNumbers,
} from "@/components";

export type StepPageProps = {
  params: Promise<{
    step: StepNumbers;
  }>;
};

const StepPage = async ({ params }: StepPageProps) => {
  const step = (await params).step;

  return (
    <section className="h-screen">
      <SectionBackground />
      <div className="mx-10 my-6 sm:my-12 lg:mx-40">
        <SectionTitle number="01" name="make your reservation" />
      </div>
      <div className="sm:px-6">
        <Reservation step={step} />
      </div>
    </section>
  );
};

export default StepPage;
