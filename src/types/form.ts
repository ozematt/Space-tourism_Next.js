import { PlanetName } from "@/components";

export type StepNumbers = "step01" | "step02" | "step03" | "step04" | "step05";

export type AddOns = {
  lunarHotel?: boolean | FormDataEntryValue;
  marsColony?: boolean | FormDataEntryValue;
  titanCamp?: boolean | FormDataEntryValue;
};

export type ReservationProps = {
  step: StepNumbers;
};

export type State = {
  name?: FormDataEntryValue | string;
  email?: FormDataEntryValue | string;
  phone?: FormDataEntryValue | string;
  destination?: PlanetName | FormDataEntryValue;
  addOns?: AddOns;
  errors?: { [key: string]: string };
  success?: string;
  nextStep?: number;
};
