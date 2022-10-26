export const booleanControl = {
  control: "boolean",
};

export const numberControl = {
  control: "number",
};

export const textControl = {
  control: "text",
};

export const dropDownControl = (args) => ({
  options: args,
  control: { type: "select" },
});
export const radioControl = (args) => ({
  options: args,
  control: { type: "select" },
});
