import React, { useState, useEffect } from "react";
import { DatePicker } from "antd";
import moment from "moment";

export const IndividualDatePicker = ({
  placeholder = "Pick a Date",
  picker = "all",
  disabled = false,
  size = "middle",
  status = "none",
  dateFormat = "DD/MM/YYYY",
  dateChangeHandler,
  value = "",
  allowClear = true,
  disableFutureDateSelection = false,
  width = 140,
}) => {
  const updateDate = (date) => (!date ? "" : moment(date, dateFormat));

  const [dateVal, setDateVal] = useState(value ? updateDate(value) : "");

  useEffect(() => {
    setDateVal(() => updateDate(value ?? ""));
  }, [value]);

  const onDateChange = (date, dateString) => {
    setDateVal(() => updateDate(dateString));
    if (dateChangeHandler && typeof dateChangeHandler === "function") {
      dateChangeHandler(dateString, date);
    }
  };

  const disableDate = (currDate) => {
    return (
      disableFutureDateSelection && currDate && currDate > moment().endOf("day")
    );
  };

  return (
    <DatePicker
      placeholder={placeholder}
      picker={picker}
      onChange={onDateChange}
      disabled={disabled}
      disabledDate={disableDate}
      size={size}
      status={status}
      format={dateFormat}
      defaultValue={dateVal}
      allowClear={allowClear}
      value={dateVal}
      getPopupContainer={(triggerNode) => triggerNode.parentNode}
      style={{ width }}
    />
  );
};