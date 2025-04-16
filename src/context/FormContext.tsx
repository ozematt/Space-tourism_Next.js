import { FormLocalStorage, formLocalStorageSchema } from "@/lib/schema";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const defaultFormData: FormLocalStorage = {
  name: "",
  email: "",
  phone: "",
  destination: undefined,
  addOns: {
    lunarHotel: false,
    marsColony: false,
    titanCamp: false,
  },
};

const LOCAL_STORAGE_KEY = "formData";

type FormContextType = {
  newFormData: FormLocalStorage;
  updateFormData: (newData: Partial<FormLocalStorage>) => void;
  saveToLocalStorage: (data: FormLocalStorage) => void;
  resetLocalStorage: () => void;
};
const FormContext = createContext<FormContextType | null>(null);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  // State to hold the form data
  const [newFormData, setNewFormData] =
    useState<FormLocalStorage>(defaultFormData);

  useEffect(() => {
    readFromLocalStorage();
  }, []);

  // Function to read data from local storage and validate it
  const readFromLocalStorage = () => {
    const dataString = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!dataString) {
      return setNewFormData(defaultFormData);
    }
    const validate = formLocalStorageSchema.safeParse(JSON.parse(dataString));

    if (!validate.success) {
      console.error("Invalid data in local storage:", validate.error);
      setNewFormData(defaultFormData);
    } else {
      setNewFormData(validate.data);
    }
  };

  // Function to update the form data
  const updateFormData = (newData: Partial<FormLocalStorage>) => {
    setNewFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const saveToLocalStorage = (data: FormLocalStorage) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  };

  const resetLocalStorage = () => {
    setNewFormData(defaultFormData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultFormData));
  };

  return (
    <FormContext.Provider
      value={{
        newFormData,
        updateFormData,
        saveToLocalStorage,
        resetLocalStorage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormContextProvider");
  }
  return context;
};
