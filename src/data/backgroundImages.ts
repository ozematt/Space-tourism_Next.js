export const backgroundImages = {
  home: {
    desktop: "/home/background-home-desktop.jpg",
    tablet: "/home/background-home-tablet.jpg",
    mobile: "/home/background-home-mobile.jpg",
  },
  destination: {
    desktop: "/destination/background-destination-desktop.jpg",
    tablet: "/destination/background-destination-tablet.jpg",
    mobile: "/destination/background-destination-mobile.jpg",
  },
  crew: {
    desktop: "/crew/background-crew-desktop.jpg",
    tablet: "/crew/background-crew-tablet.jpg",
    mobile: "/crew/background-crew-mobile.jpg",
  },
  technology: {
    desktop: "/technology/background-technology-desktop.jpg",
    tablet: "/technology/background-technology-tablet.jpg",
    mobile: "/technology/background-technology-mobile.jpg",
  },
} as const;

export const backgroundImagesArr = Object.keys(backgroundImages);

export type BackgroundImages = keyof typeof backgroundImages;
