import { State } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

const FormContext = createContext<null>(null);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<State>({});

  return <FormContext.Provider value={null}>{children}</FormContext.Provider>;
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormContextProvider");
  }
  return context;
};
