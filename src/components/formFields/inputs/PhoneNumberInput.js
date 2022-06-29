import React, { useState } from 'react'
import { useField } from 'formik';
import ErrorMessage from '../ErrorMessage';
import Input from './index'
import Select, { components } from "react-select"
import countries from '../../../helper/countries';

const {Option, SingleValue} = components

const PhoneNumberInput = ({formikProps, selectProps}) => {

  const [field, meta] = useField(formikProps);

  const [code, setCode] = useState("+234")
  const [inputValue, setInputValue] = useState("")


  const options = countries.map(country => (
    {label: country["name"], value: country["dial_code"], flag: country["code"].toLowerCase()}
  ))

  return (
    <div>
      <div className='flex border rounded'>
        <Select
          options={options}
          components={{Option: OptionWithFlag, SingleValue: ValueWithFlag}}
          // value={() => {}}
          onChange={(data) => {
            setCode(data.value)
          }}
          styles={colourStyles}
          // defaultInputValue={options[160]}
          defaultValue={options[160]}
          {...selectProps}
        />
        <Input {...field} {...formikProps} handleChange={(e) => {
          const valueArr = e.target.value.split(code+" ")
          setInputValue(valueArr.length > 1 ? valueArr[valueArr.length - 1] : "")
        }} value={code + " " + inputValue} containerStyles={{
            borderRadius: "0px"
        }} />
      </div>
      <ErrorMessage error={meta.error} touched={meta.touched} />
    </div>
  )
}

const OptionWithFlag = (props) => {

  return (
    <Option {...props} >
      <div className='flex gap-x-2 items-center'>
        <img src={`https://flagcdn.com/${props.data.flag}.svg`} className="w-10 h-auto" alt={props.data.label} />
        <p className='text-xs'>{props.data.label} {`(${props.data.value})`}</p> 
      </div>
    </Option>
  )
}

const ValueWithFlag = (props) => {

  return (
    <SingleValue {...props}>
      {/* <div className='flex flex-col gap-y-2 items-center'> */}
        <img src={`https://flagcdn.com/${props.data.flag}.svg`} className="w-10 h-auto" alt={props.data.label} />
      {/* </div> */}
    </SingleValue>
  )
}

const colourStyles = {
  control: (styles) => ({ 
    ...styles,
    height: "56px",
    width: "100px",
    borderRadius: "0px"
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#3B48FB" : "#FFF",
      color: isFocused ? "#FFF" : "#000",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    fontSize: "14px"
  }),
  menu: (styles) => ({
    ...styles,
    width: "max-content",
    // maxWidth: "150px"

  })
};

export default PhoneNumberInput