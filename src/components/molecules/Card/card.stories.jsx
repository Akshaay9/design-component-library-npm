import React from "react";
import { Card } from "./Card";

export default {
  title: "Card new",
};

export const cardOne = () => (
  <Card color="green" height="50" width="50" content="content" />
);
export const cardTwo = () => (
  <Card
    color="red"
    height="70"
    width="70"
    content="contentcontentcontentcontentcontentcontent"
  />
);
