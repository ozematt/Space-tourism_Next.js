export const crewMembers = {
  douglasHurley: {
    name: "Douglas Hurley",
    rank: "Commander",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "/crew/image-douglas-hurley.webp",
  },
  markShuttleworth: {
    name: "Mark Shuttleworth",
    rank: "Mission Specialist",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "/crew/image-mark-shuttleworth.webp",
  },
  victorGlover: {
    name: "Victor Glover",
    rank: "Pilot",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: "/crew/image-victor-glover.webp",
  },
  anoushehAnsari: {
    name: "Anousheh Ansari",
    rank: "Flight Engineer",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: "/crew/image-anousheh-ansari.webp",
  },
} as const;

export const crewMembersArr = Object.keys(crewMembers);
