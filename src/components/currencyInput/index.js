import React from "react";
import CurrencyInput from "react-currency-input-field";

export default function CurrencyInputField({ setAmount, amount }) {
  const prefix = "₦ ";

  const handleChange = (e) => {
    e.preventDefault();
    const { amount = "" } = e.target;
    const parsedValue = amount.replace(/[^\d.]/gi, "");
    setAmount(parsedValue);
  };

  const handleOnBlur = () => setAmount(Number(amount).toFixed(2));

  return (
    <CurrencyInput
      prefix={prefix}
      name="currencyInput"
      id="currencyInput"
      data-number-to-fixed="2"
      data-number-stepfactor="100"
      value={amount}
      placeholder="Enter Amount"
      onChange={handleChange}
      onBlur={handleOnBlur}
      allowDecimals
      className=""
      style={{
        height: "52px",
        backgroundColor: "#f2f2f2",
        outline: "#E32526",
        border: "none",
        width: "100%",
        padding: "10px",
      }}
      decimalsLimit="2"
      disableAbbreviations
    />
  );
}
