type FormStepTitleProps = {
  title: string;
  description: string;
};

const FormStepTitle = ({ title, description }: FormStepTitleProps) => {
  return (
    <div>
      <h3 className="font-bellefair text-4xl uppercase">{title}</h3>
      <p className="font-barlow-condensed text-lg tracking-[0.5px]">
        {description}
      </p>
    </div>
  );
};

export default FormStepTitle;
