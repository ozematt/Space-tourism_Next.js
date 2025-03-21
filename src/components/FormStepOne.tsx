import { InputTextField } from ".";
import { State } from "./Reservation";

type FormStepOneProps = {
  defaultValues?: string;
  errors?: string;
};

const FormStepOne = (state: State) => {
  const { name, email, phone, errors } = state;
  return (
    <>
      <InputTextField
        id="name"
        placeholder="Name"
        defaultValue={name}
        error={errors?.name}
      />
      <InputTextField
        id="email"
        placeholder="Email Address"
        defaultValue={email}
        error={errors?.email}
      />
      <InputTextField
        id="phone"
        placeholder="Phone Number"
        defaultValue={phone}
        error={errors?.phone}
      />
    </>
  );
};

export default FormStepOne;
