import React, { useState, useEffect } from "react";
import { DatePicker } from "antd";
import moment from "moment";

export const RangeDatePicker = ({
  startDatePlaceholder = "Start Date",
  endDatePlaceholder = "End Date",
  disableStartDate = false,
  disableEndDate = false,
  format = "DD/MM/YYYY",
  size = "middle",
  status = "none",
  dateRangeCanbeSelected,
  startDate,
  endDate,
  disableFutureDateSelection = true,
  popupContainer = false,
  allowClear = true,
  dateChangeHandler,
  width = 250,
}) => {
  const { RangePicker } = DatePicker;

  const getDefaultDate = () => {
    if (startDate && endDate) {
      return [moment(startDate, format), moment(endDate, format)];
    }
    if (startDate) {
      return [moment(startDate, format), null];
    }
    if (endDate) {
      return [null, moment(endDate, format)];
    }
    return [];
  };

  const [dateVal, setDateVal] = useState(getDefaultDate());
  const [calendarVal, setCalendarVal] = useState([]);

  useEffect(() => {
    setDateVal(() => getDefaultDate());
  }, [startDate, endDate]);

  const getPopUpContainer = () => {
    if (!popupContainer) return false;
    return (triggerNode) => triggerNode.parentNode;
  };

  const disabledDate = (current) => {
    const tooLate =
      calendarVal?.[0] &&
      current.diff(calendarVal[0], "days") > dateRangeCanbeSelected;
    const tooEarly =
      calendarVal?.[1] &&
      calendarVal[1].diff(current, "days") > dateRangeCanbeSelected;
    const futureDateDisabled =
      disableFutureDateSelection && current && current > moment().endOf("day");
    return tooEarly || tooLate || futureDateDisabled;
  };

  const dateHandler = (dateObj, dateString) => {
    setDateVal(() => dateObj);
    const [startDateString, endDateString] = dateString;
    if (dateChangeHandler && typeof dateChangeHandler === "function") {
      dateChangeHandler(startDateString, endDateString, dateObj);
    }
  };

  return (
    <RangePicker
      placeholder={[startDatePlaceholder, endDatePlaceholder]}
      disabled={[disableStartDate, disableEndDate]}
      disabledDate={disabledDate}
      format={format}
      size={size}
      status={status}
      value={dateVal}
      defaultValue={dateVal}
      getPopupContainer={getPopUpContainer()}
      allowClear={allowClear}
      onChange={dateHandler}
      onCalendarChange={(val) => setCalendarVal(() => val)}
      style={{ width }}
    />
  );
};