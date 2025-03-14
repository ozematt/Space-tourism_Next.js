import {
  CrewMember,
  CrewMemberName,
  SectionBackground,
  SectionTitle,
} from "@/components";

type MemberPageProps = {
  params: Promise<{ name: CrewMemberName }>;
};

const MemberPage = async ({ params }: MemberPageProps) => {
  const name = (await params).name;

  return (
    <section>
      <SectionBackground src="/crew/background-crew-desktop.jpg" />
      <div className="mx-10 my-6 sm:my-12 lg:mx-40">
        <SectionTitle number="02" name="meet your crew" />
      </div>

      <CrewMember name={name} />
    </section>
  );
};

export default MemberPage;
