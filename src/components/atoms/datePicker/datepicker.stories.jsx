import React from "react";
import { DatePicker } from "./datepicker";
import {
  textControl,
  dropDownControl,
  booleanControl,
  numberControl,
} from "../../../const/controls.const";

const { IndividualDatePicker, RangeDatePicker, Timepicker } = DatePicker;

export default {
  title: "Date (Individual and Range) and Time Picker",
};

const dateChangeHandler = (date, dateObject) => {
  // Get date string and dateObject
};

// Individual Date Picker Story
export const IndividualDatePickerStory = (args) => (
  <IndividualDatePicker {...args} dateChangeHandler={dateChangeHandler} />
);
IndividualDatePickerStory.argTypes = {
  placeholder: textControl,
  size: dropDownControl(["small", "middle", "large"]),
  status: dropDownControl(["none", "error", "warning"]),
  picker: dropDownControl(["date", "week", "month", "quarter", "year"]),
  disabled: booleanControl,
  allowClear: booleanControl,
  dateFormat: textControl,
  value: textControl,
  disableFutureDateSelection: booleanControl,
  width: numberControl,
};
IndividualDatePickerStory.args = {
  placeHolder: "Hey Everyone",
  picker: "date",
  size: "middle",
  status: "none",
  disabled: false,
  dateFormat: "DD/MM/YYYY",
  value: "1/1/2011",
  allowClear: true,
  disableFutureDateSelection: true,
  width: 140,
};

// Range Date Picker Story
export const RangeDatePickerStory = (args) => (
  <RangeDatePicker {...args} dateChangeHandler={dateChangeHandler} />
);

RangeDatePickerStory.argTypes = {
  size: dropDownControl(["small", "middle", "large"]),
  status: dropDownControl(["none", "error", "warning"]),
  // PlaceHolder
  startDatePlaceholder: textControl,
  endDatePlaceholder: textControl,
  //  Disable
  disableStartDate: booleanControl,
  disableEndDate: booleanControl,
  //
  allowClear: booleanControl,
  dateFormat: textControl,
  // Values
  startDate: textControl,
  endDate: textControl,
  // Disable selecting future Date, date more than today
  disableFutureDateSelection: booleanControl,
  // if added 31, then user cannot select startday and end day diff > 31
  dateRangeCanbeSelected: numberControl,
  width: numberControl,
};
RangeDatePickerStory.args = {
  size: "middle",
  status: "none",
  // placeHolder
  startDatePlaceholder: "Start Date",
  endDatePlaceholder: "End Date",
  // Disable
  disableStartDate: false,
  disableEndDate: false,
  //
  allowClear: true,
  dateFormat: "DD/MM/YYYY",
  // Date Values
  startDate: "12/10/2022",
  endDate: "14/10/2022",
  disableFutureDateSelection: true,
  dateRangeCanbeSelected: 31,
  width: 250,
};

// Time Picker Story
export const TimePickerStory = (args) => (
  <Timepicker {...args} timeChangeHandler={dateChangeHandler} />
);
TimePickerStory.argTypes = {
  use12Hours: booleanControl,
  format: textControl,
  placeholder: textControl,
  size: dropDownControl(["small", "middle", "large"]),
  status: dropDownControl(["none", "error", "warning"]),
  allowClear: booleanControl,
  disabled: booleanControl,
  value: textControl,
  width: numberControl,
};
TimePickerStory.args = {
  use12Hours: true,
  format: "h:mm:ss A",
  placeholder: "Select Time",
  size: "middle",
  status: "none",
  allowClear: true,
  disabled: false,
  value: "2:21:01 PM",
  width: 130,
};