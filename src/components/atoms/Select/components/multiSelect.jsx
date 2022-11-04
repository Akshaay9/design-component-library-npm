import React from "react";
import { Select } from "antd";

export const MultiSelect = ({
  placeholder = "Please Select",
  width = 100,
  options = [],
  onChangeHandler,
  onSearchHandler,
  disabled = false,
  loading = false,
  allowClear = false,
  size = "default",
  status = "none",
  name = "singleSelect",
  defaultValue,
  allowSearching,
}) => {
  const onChange = (selectedValue, { label }) => {
    if (onChangeHandler && typeof onChangeHandler === "function") {
      onChangeHandler(selectedValue, label, name);
    }
  };

  const onSearch = (searchedValue) => {
    if (onSearchHandler && typeof onSearchHandler === "function") {
      onSearchHandler(searchedValue, name);
    }
  };
  return (
    <Select
      showSearch={allowSearching}
      mode="multiple"
      status={status}
      defaultValue={defaultValue}
      size={size}
      style={{ width: `${width}%` }}
      placeholder={placeholder}
      module="single"
      options={options}
      disabled={disabled}
      loading={loading}
      allowClear={allowClear}
      onChange={onChange}
      name={name}
      onSearch={onSearch}
    />
  );
};