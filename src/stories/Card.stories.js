import Card from "./Card";
import { fn } from "@storybook/test";

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export const FullCard = {
  args: {
    imageUrl: "src/assets/dentallab.webp",
    title: "Dental Laboratory website",
    text: "My first project. HTML+CSS",
    button: true,
    buttonText: "Learn more",
    onClick: fn(),
  },
};

export const EmptyCard = {
  args: {
    imageUrl: "src/assets/next-project-img.jpg",
    title: "This is my next perfect project",
    button: false,
  },
};
