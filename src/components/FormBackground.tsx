const FormBackground = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 opacity-100 backdrop-blur-[10px] md:opacity-0" />
      <div className="absolute inset-0 -z-20 bg-[url(/reserve/background-reserve-tablet.webp)] bg-cover opacity-90 md:opacity-0" />
    </>
  );
};

export default FormBackground;
