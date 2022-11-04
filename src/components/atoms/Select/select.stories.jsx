import React from "react";
import {
  textControl,
  dropDownControl,
  booleanControl,
  numberControl,
} from "../../../const/controls.const";
import { Select } from "./Select";

const { SingleSelect, MultiSelect } = Select;

export default {
  title: "Select Component",
};

const selectCallbackHandler = (selectedValue, selectedLabel, fieldName) => {
  // console.log(selectedValue, selectedLabel, fieldName);
};
const selectSearchCallbackHandler = (selectedValue, fieldName) => {
  // console.log(selectedValue, fieldName);
};

const selectOption = [
  { value: "selectOneValue", label: "selectOneLable" },
  { value: "selectTwoValue", label: "selectTwoLable" },
  { value: "selectThreeValue", label: "selectThreeLable" },
  { value: "selectFourValue", label: "selectFourLable" },
  { value: "selectFiveValue", label: "selectFiveLable" },
];

// Single Select Story
export const SingleSelectStory = (args) => (
  <SingleSelect
    {...args}
    onChangeHandler={selectCallbackHandler}
    onSearchHandler={selectSearchCallbackHandler}
    options={selectOption}
  />
);
SingleSelectStory.argTypes = {
  size: dropDownControl(["default", "small", "large"]),
  status: dropDownControl(["none", "error", "warning"]),
  disabled: booleanControl,
  allowClear: booleanControl,
  loading: booleanControl,
  allowSearching: booleanControl,
  width: numberControl,
  name: textControl,
  placeholder: textControl,
  defaultValue: textControl,
};

SingleSelectStory.args = {
  size: "default",
  status: "default",
  disabled: false,
  allowClear: false,
  loading: false,
  name: "singleSelect",
  width: 100,
  placeholder: "Please Select DropDown",
  defaultValue: "selectOneValue",
  allowSearching: true,
};

// Multi Select Story
export const MultiSelectStory = (args) => (
  <MultiSelect
    {...args}
    onChangeHandler={selectCallbackHandler}
    onSearchHandler={selectSearchCallbackHandler}
    options={selectOption}
  />
);

MultiSelectStory.argTypes = {
  ...SingleSelectStory.args,
  size: dropDownControl(["default", "small", "large"]),
  status: dropDownControl(["none", "error", "warning"]),
};

MultiSelectStory.args = {
  ...SingleSelectStory.args,
};