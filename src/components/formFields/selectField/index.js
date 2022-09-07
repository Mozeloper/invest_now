import Select from "react-select";
import { components } from "react-select";
import Avatar from "@mui/material/Avatar";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const { Option } = components;
export const IconOption = (props) => (
  <Option {...props}>
    <div className="flex items-center cursor-pointer">
      <Avatar alt={props.data.label} src={props.data.image} sx={{ width: 24, height: 24 }} />
      <div className="ml-2">{props.data.label}</div>
    </div>
  </Option>
);
const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#f2f5fa",
    // width: "100%",
    minHeight: 56,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#FE0000" : "#FFF",
      color: isFocused ? "#FFF" : "#000",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

const SearchableSelect = ({
  options,
  name,
  isDisabled = false,
  isUpdatingObj = false,
  value,
  setFieldValue,
  placeholder,
  isLoading,
  extraFunction,
  defaultValue,
  defaultInputValue,
  multipleOptions = false,
}) => {
  return (
    <Select
      components={animatedComponents}
      isDisabled={isDisabled}
      options={options}
      value={options ? options.find((option) => option?.value === value) : ""}
      onChange={(option) => {
        setFieldValue(name, isUpdatingObj ? option : option.value);
        extraFunction && extraFunction(option.value);
      }}
      styles={colourStyles}
      placeholder={!isLoading ? placeholder : ""}
      isLoading={isLoading}
      defaultInputValue={defaultInputValue}
      defaultValue={defaultValue}
      isMulti={multipleOptions}
    />
  );
};

export default SearchableSelect;
