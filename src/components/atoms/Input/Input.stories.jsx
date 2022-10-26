import React from "react";
import { InputComponent } from "./input";
import {
  booleanControl,
  numberControl,
  textControl,
  dropDownControl,
} from "../../../const/controls.const";

const { InputText, InputNumber, InputTextBox } = InputComponent;

export default {
  title: "Input And TextBox",
};

const inputCallBackHandler = () => {
  //  console.log(inputName, inputVal);
};

// Input Component
export const InputTextStory = (args) => (
  <InputText {...args} inputCallBackHandler={inputCallBackHandler} />
);
InputTextStory.argTypes = {
  placeHolder: textControl,
  size: dropDownControl(["default", "small", "large"]),
  status: dropDownControl(["none", "error", "warning"]),
  disabled: booleanControl,
  allowClear: booleanControl,
  maxLength: numberControl,
  value: textControl,
  name: textControl,
  prefix: textControl,
  sufix: textControl,
  width: numberControl,
};
InputTextStory.args = {
  placeHolder: "Hey Everyone",
  size: "default",
  status: "none",
  disabled: false,
  maxLength: 50,
  value: "",
  name: "inputText",
  allowClear: false,
  prefix: "",
  sufix: "",
  width: 100,
};

// Input Number
export const InputNumberBoxStory = (args) => (
  <InputNumber {...args} inputCallBackHandler={inputCallBackHandler} />
);
InputNumberBoxStory.argTypes = {
  placeHolder: textControl,
  status: dropDownControl(["none", "error", "warning"]),
  disabled: booleanControl,
  value: numberControl,
  name: textControl,
  width: numberControl,
  prefix: textControl,
};

InputNumberBoxStory.args = {
  placeHolder: "Hey Everyone",
  status: "none",
  disabled: false,
  value: 100,
  name: "inputTextBox",
  width: 100,
  prefix: "",
};

// Text Box Story
export const InputTextBoxStory = (args) => (
  <InputTextBox {...args} inputCallBackHandler={inputCallBackHandler} />
);
InputTextBoxStory.argTypes = {
  placeHolder: textControl,
  status: dropDownControl(["none", "error", "warning"]),
  rows: numberControl,
  disabled: booleanControl,
  maxLength: numberControl,
  value: textControl,
  name: textControl,
  width: numberControl,
};

InputTextBoxStory.args = {
  placeHolder: "Hey Everyone",
  status: "none",
  rows: 4,
  disabled: false,
  maxLength: 50,
  value: "",
  name: "inputTextBox",
  width: 100,
};