import React, { useEffect, useState } from "react";
import { Input as AntDInput, InputNumber as InputNumberComponent } from "antd";
import { InputStyle } from "./input.style";

const AntDTextArea = AntDInput.TextArea;

// Input text
export const InputText = ({
  placeHolder = "Add Your PlaceHolder",
  size = "default",
  status = "none",
  disabled = false,
  maxLength,
  value,
  name,
  inputCallBackHandler,
  allowClear = false,
  prefix,
  sufix,
  width = 100,
}) => {
  const [inputText, setInputText] = useState(value);

  useEffect(() => {
    setInputText(() => value);
  }, [value]);

  const inputChangeHandler = (inputVal) => {
    setInputText(() => inputVal);
    if (inputCallBackHandler && typeof inputCallBackHandler === "function") {
      inputCallBackHandler(inputVal, name);
    }
  };

  return (
    <>
      <InputStyle width={width} />
      <AntDInput
        placeHolder={placeHolder}
        size={size}
        status={status}
        disabled={disabled}
        maxLength={maxLength}
        value={inputText}
        onChange={(e) => inputChangeHandler(e.target.value)}
        name={name}
        allowClear={allowClear}
        prefix={prefix}
        suffix={sufix}
      />
    </>
  );
};

// Input Text Area
export const InputTextBox = ({
  placeHolder = "Add Your PlaceHolder",
  rows = 4,
  disabled = false,
  maxLength,
  status = "none",
  value,
  inputCallBackHandler,
  name,
  width,
}) => {
  const [inputText, setInputText] = useState(value);
  useEffect(() => {
    setInputText(() => value);
  }, [value]);

  const inputChangeHandler = (inputVal) => {
    setInputText(() => inputVal);
    if (inputCallBackHandler && typeof inputCallBackHandler === "function") {
      inputCallBackHandler(inputVal, name);
    }
  };
  return (
    <>
      <InputStyle width={width} />
      <AntDTextArea
        placeHolder={placeHolder}
        rows={rows}
        status={status}
        disabled={disabled}
        maxLength={maxLength}
        type="textarea"
        value={inputText}
        name={name}
        onChange={(e) => inputChangeHandler(e.target.value)}
      />
    </>
  );
};

// Input Number
export const InputNumber = ({
  placeHolder = "Enter Number",
  value = 0,
  size = "default",
  status = "none",
  prefix = "",
  width = 100,
  disabled,
  inputCallBackHandler,
  name,
}) => {
  const [inputVal, setInputVal] = useState(value);

  const inputChangeHandler = (inputValue) => {
    setInputVal(() => inputValue);
    if (inputCallBackHandler && typeof inputCallBackHandler === "function") {
      inputCallBackHandler(inputValue, name);
    }
  };

  useEffect(() => {
    setInputVal(() => value);
  }, [value]);

  return (
    <>
      <InputStyle width={width} />
      <InputNumberComponent
        placeHolder={placeHolder}
        disabled={disabled}
        size={size}
        status={status}
        prefix={prefix}
        value={inputVal}
        onChange={(e) => inputChangeHandler(e)}
        type="number"
        name={name}
      />
    </>
  );
};

export const InputComponent = {
  InputText,
  InputNumber,
  InputTextBox,
};
