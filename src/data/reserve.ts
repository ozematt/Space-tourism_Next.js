export const stepsNav = [
  { step: "step01", title: "your info" },
  { step: "step02", title: "select planet" },
  { step: "step03", title: "add-ons" },
  { step: "step04", title: "summary" },
] as const;

export const steps = [
  {
    step: 1,
    title: "personal info",
    description: "Please provide your name, email, and phone number.",
  },
  {
    step: 2,
    title: "pick your destination",
    description: "You have the options. Choose wisely where you want to go.",
  },
  {
    step: 3,
    title: "choose add-ons",
    description: "Add-ons help enhance your space experience.",
  },
  {
    step: 4,
    title: "finishing up",
    description: "Duble-check everything looks OK before confirming",
  },
  {
    step: 5,
    title: "thank you!",
    description:
      "Thank you for choosing Space Tourism! Your booking has been successfully confirmed. You’re one step closer to an unforgettable adventure beyond the stars! ",
  },
] as const;
