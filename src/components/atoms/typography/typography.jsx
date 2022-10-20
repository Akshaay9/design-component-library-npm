import React from "react";
import { Typography as AntdTypography } from "antd";

const AntDTitle = AntdTypography.Title;
const AntDText = AntdTypography.Text;
const AntDLink = AntdTypography.Link;

const Heading = ({ level = 1, text = "Hello World" }) => {
  return <AntDTitle level={level}>{text}</AntDTitle>;
};

const Text = ({
  type = "primary",
  text = "Hello World",
  disabled,
  mark,
  code,
  keyboard,
  underline,
  deleteText,
  strong,
  italic,
}) => {
  return (
    <AntDText
      type={type}
      disabled={disabled}
      mark={mark}
      code={code}
      keyboard={keyboard}
      underline={underline}
      delete={deleteText}
      strong={strong}
      italic={italic}
    >
      {text}
    </AntDText>
  );
};

const Link = ({ text = "Link Text", href = "https://ant.design" }) => (
  <AntDLink href={href}>{text}</AntDLink>
);

export const Typography = {
  Heading,
  Text,
  Link,
};