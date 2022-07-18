import React, { useState } from "react";
import Select from "react-select";
import close from "../../../../../assets/icons/close_btn.svg";
import Button from "../../../../../components/Button";
import Text from "../../../../../components/Typography/Typography";

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#f2f5fa",
    minHeight: 56,
  }),
  option: (styles, { isDisabled, isFocused }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#FE0000" : "#FFF",
      color: isFocused ? "#FFF" : "#000",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

export default function BankPayment({
  setBankSelected,
  setIsPaymentModalOpen,
  setIsDepositSummaryOpen,
  bankSelected,
  setIsBankModalOpen,
}) {
  const [error, setError] = useState({
    bank: false,
  });
  const banksList = [
    {
      label: "zenith",
      value: "zenith",
    },
  ];

  const handleSelectBank = () => {
    if (bankSelected === "") {
      setError((prev) => ({
        ...prev,
        bank: true,
      }));
    }
    if (bankSelected !== "") {
      setIsDepositSummaryOpen(true);
      setIsBankModalOpen(false);
      setIsPaymentModalOpen(false);
    }
  };

  return (
    <>
      <div className="w-full flex justify-end">
        <img
          onClick={() => setIsBankModalOpen(false)}
          src={close}
          alt="correct"
          className="w-[40px] h-[40px] cursor-pointer"
        />
      </div>
      <div className="mt-6 w-[80%]">
        <Text variant="h3" color="text-[#000000]">
          Choose your bank
        </Text>
      </div>
      <div className="w-[70%] mt-2">
        <Select
          className="w-full bg-[#f2f2f2]"
          onChange={(e) => {
            setBankSelected(e.value);
            setError((prev) => ({
              ...prev,
              bank: false,
            }));
          }}
          name="bank"
          placeholder="Select Bank"
          options={banksList}
          styles={colourStyles}
        />
      </div>
      {error.bank && (
        <Text variant="body" weight="normal" color="text-red">
          Please select bank
        </Text>
      )}
      <div className="mt-6 w-full flex gap-4">
        <div className="w-[50%]">
          <Button onClick={() => handleSelectBank()} title="Continue" className="cursor-pointer" type="button" />
        </div>
        <div className="w-[30%]">
          <Button
            onClick={() => setIsBankModalOpen(false)}
            title="Cancel"
            backgroundColor="none"
            textColor="#E32526"
            style={{ border: "1px solid #E32526" }}
            className="cursor-pointer"
            type="button"
          />
        </div>
      </div>
    </>
  );
}
