import React, { useState, useEffect } from "react";
import { TimePicker } from "antd";
import moment from "moment";

export const Timepicker = ({
  use12Hours = true,
  format = "h:mm:ss A",
  placeholder = "Select Time",
  size = "middle",
  status = "none",
  allowClear = true,
  disabled = false,
  timeChangeHandler,
  value = "",
  width = 130,
}) => {
  const getDefaultTime = (timeValue) =>
    timeValue ? moment(timeValue, format) : "";

  const [timeVal, setTimeVal] = useState(getDefaultTime(value));

  const timeHandler = (timeObj, timeStr) => {
    setTimeVal(() => timeObj);
    if (timeChangeHandler && typeof timeChangeHandler === "function") {
      timeChangeHandler(timeObj, timeStr);
    }
  };

  useEffect(() => {
    setTimeVal(() => getDefaultTime(value));
  }, [value]);

  return (
    <TimePicker
      use12Hours={use12Hours}
      format={format}
      placeholder={placeholder}
      value={timeVal}
      onChange={timeHandler}
      size={size}
      status={status}
      allowClear={allowClear}
      disabled={disabled}
      style={{ width }}
    />
  );
};
