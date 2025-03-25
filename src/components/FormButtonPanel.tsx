import Link from "next/link";

type FormButtonPanelProps = {
  step: string;
  isPending: boolean;
  errors?: Record<string, string[] | undefined>;
};

const FormButtonPanel = ({ step, isPending, errors }: FormButtonPanelProps) => {
  return (
    <div className="flex w-full justify-end">
      <Link
        href={`/reserve/${step.slice(0, 5)}${Number(step[5]) - 1}`}
        className={`${step === "step02" || step === "step03" || step === "step04" ? "block" : "hidden"} w-full max-w-[100px] shrink-0`}
      >
        <button
          className={`font-barlow-condensed test-sm cursor-pointer py-2.5 pr-4.5 font-bold tracking-[.5px] text-white uppercase sm:text-xl`}
        >
          go back
        </button>
      </Link>
      <div className="my-auto w-full border-t-1 border-white/50" />

      <button
        type="submit"
        className="font-barlow-condensed test-sm relative shrink-0 rounded-[5px] bg-white/90 px-4.5 py-2.5 font-bold tracking-[.5px] text-black uppercase ring-1 sm:text-xl"
        disabled={isPending}
      >
        {step === "step04" ? "confirm" : "next step"}
      </button>
    </div>
  );
};

export default FormButtonPanel;
