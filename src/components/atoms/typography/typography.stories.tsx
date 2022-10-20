import React from "react";
import { Typography } from "./typography";

const { Heading, Text, Link } = Typography;

export default {
  title: "Typography",
  componentL: Heading,
};

// Heading Typography
export const TypographyHeading = (args) => <Heading {...args} />;
TypographyHeading.argTypes = {
  level: {
    options: [1, 2, 3, 4, 5],
    control: { type: "radio" },
  },
  text: {
    control: "text",
  },
};
TypographyHeading.args = {
  level: 1,
  text: "Heading Text",
};

// Text Typography
export const TypographyText = (args) => <Text {...args} />;
TypographyText.argTypes = {
  type: {
    options: ["primary", "secondary", "success", "warning", "danger"],
    control: { type: "radio" },
  },
  text: {
    control: "text",
  },
  disabled: {
    control: "boolean",
  },
  mark: {
    control: "boolean",
  },
  code: {
    control: "boolean",
  },
  keyboard: {
    control: "boolean",
  },
  underline: {
    control: "boolean",
  },
  deleteText: {
    control: "boolean",
  },
  strong: {
    control: "boolean",
  },
  italic: {
    control: "boolean",
  },
};
TypographyText.args = {
  type: "primary",
  text: "Heading Text",
  disabled: false,
  mark: false,
  code: false,
  keyboard: false,
  underline: false,
  deleteText: false,
  strong: false,
  italic: false,
};

// Link Typography
export const TypographyLink = (args) => <Link {...args} />;
TypographyLink.argTypes = {
  text: {
    control: "text",
  },
  href: {
    control: "text",
  },
};