import React from "react";
import { Typography } from "./typography";

const { Heading, Text, Link } = Typography;

export default {
  title: "Typography",
  componentL: Heading,
};

// Heading Typography
export const TypographyHeading = () => <Heading />;

// Text Typography
export const TypographyText = () => <Text />;

// Link Typography
export const TypographyLink = () => <Link />;
