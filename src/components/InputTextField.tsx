type InputTextFieldProps = {
  id: string;
  placeholder: string;
  defaultValue?: string;
  error?: string;
};

const InputTextField = ({
  id,
  placeholder,
  defaultValue,
  error,
}: InputTextFieldProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        defaultValue={defaultValue || ""}
        className="peer h-[50px] w-full rounded-[5px] pl-4 placeholder-transparent ring-1 ring-white focus:ring-2 focus:ring-white focus:outline-none"
      />
      <label
        htmlFor={id}
        className="font-barlow-condensed pointer-events-none absolute top-[-28px] left-0 text-base tracking-[0.5px] transition-all duration-300 ease-in-out select-none peer-placeholder-shown:top-[9px] peer-placeholder-shown:left-4.5 peer-placeholder-shown:text-xl"
      >
        {placeholder}
      </label>
      {error && (
        <p className="font-barlow-condensed absolute top-[-28px] right-0 text-base tracking-[.5px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputTextField;
