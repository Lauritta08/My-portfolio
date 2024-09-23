import React from "react";
import Navbar from "./Navbar";
import { fn } from "@storybook/test";

export default {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    items: [
      { name: "About me", href: "/" },
      { name: "My projects", href: "/projects" },
      { name: "Contact me", href: "/contact" },
    ],
    onClick: fn(),
  },
};
