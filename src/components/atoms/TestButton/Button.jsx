import React from "react";
import { Button } from "antd";
import { ClearDefaultStyle } from "./style";
import "antd/dist/antd.css";

export const ButtonCom = ({
  size = "medium",
  text = "Button",
  disabled = false,
  danger = false,
  type = "primary",
  loading = false,
}) => {
  return (
    <>
      <ClearDefaultStyle size={size} type={type} danger={danger} />
      <Button
        size={size}
        disabled={disabled}
        danger={danger}
        type={type}
        loading={loading}
      >
        {text}
      </Button>
    </>
  );
};