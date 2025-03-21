import { InputTextField } from ".";

type FormStepOneProps = {
  defaultValues?: string;
  errors?: string;
};

const FormStepOne = ({ defaultValues, errors }: FormStepOneProps) => {
  return (
    <>
      <InputTextField id="name" placeholder="Name" />
      <InputTextField id="email" placeholder="Email Address" />
      <InputTextField id="phone" placeholder="Phone Number" />
    </>
  );
};

export default FormStepOne;
