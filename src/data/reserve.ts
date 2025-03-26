export const steps = [
  {
    step: "step01",
    title: "your info",
    stepHeader: "personal info",
    description: "Please provide your name, email, and phone number.",
  },
  {
    step: "step02",
    title: "select planet",
    stepHeader: "choose destination",
    description: "You have options. Choose wisely where you want to go.",
  },
  {
    step: "step03",
    title: "add-ons",
    stepHeader: "choose add-ons",
    description: "Add-ons help enhance your space experience.",
  },
  {
    step: "step04",
    title: "summary",
    stepHeader: "finishing up",
    description: "Duble-check everything looks OK before confirming",
  },
] as const;

export const addOns = [
  {
    title: "Lunar Hotel",
    subtitle: " Lunar hotel on the Mars",
    price: "50k",
  },
  {
    title: "Mars Colony Stay",
    subtitle: "Accommodation in a Mars base",
    price: "150k",
  },
  {
    title: "Titan Exploration Camp",
    subtitle: "Stay in a special research module",
    price: "200k",
  },
] as const;

// export const stepsT = [
//   {
//     step: 5,
//     title: "thank you!",
//     description:
//       "Thank you for choosing Space Tourism! Your booking has been successfully confirmed. You’re one step closer to an unforgettable adventure beyond the stars! ",
//   },
// ] as const;
