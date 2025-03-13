export const planets = {
  moon: {
    name: "moon",
    href: "/destination/moon",
    image: "/destination/image-moon.webp",
    imageAlt: "moon image",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
  },
  mars: {
    name: "mars",
    href: "/destination/mars",
    image: "/destination/image-mars.webp",
    imageAlt: "mars image",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travelTime: "9 months",
  },
  europa: {
    name: "europa",
    href: "/destination/europa",
    image: "/destination/image-europa.webp",
    imageAlt: "europa image",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travelTime: "3 years",
  },

  titan: {
    name: "titan",
    href: "/destination/titan",
    image: "/destination/image-titan.webp",
    imageAlt: "titan image",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travelTime: "7 years",
  },
} as const;
