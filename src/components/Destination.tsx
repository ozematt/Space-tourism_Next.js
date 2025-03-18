import { planets } from "@/data";
import Image from "next/image";
import { PlanetInfo, PlanetNavbar } from ".";

export type PlanetName = keyof typeof planets;

export type DestinationProps = {
  planet: PlanetName;
};

export default Destination;
