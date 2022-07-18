import React from "react";
import { useState } from "react";
import Select from "react-select";

import close from "../../../../../assets/icons/close_btn.svg";
import dbCard from "../../../../../assets/icons/debit_card_1.svg";
import bankCard from "../../../../../assets/icons/pay_with_bank.svg";
import Input from "../../../../../components/formFields/inputs";
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

export default function PaymentModal({
  setIsBankModalOpen,
  setIsCardModalOpen,
  amount,
  howFrequentState,
  setAmount,
  setHowFrequentState,
  setIsPaymentModalOpen,
}) {
  const [error, setError] = useState({
    amount: false,
    frequent: false,
  });

  const howFrequent = [
    {
      label: "One-off",
      value: "One-off",
    },
    {
      label: "Daily",
      value: "Daily",
    },
    {
      label: "Weekly",
      value: "Weekly",
    },
    {
      label: "Monthly",
      value: "Monthly",
    },
  ];

  const handlePaymentMethod = (type) => {
    if (type === "pay_with_bank") {
      if (amount === "") {
        setError((prev) => ({
          ...prev,
          amount: true,
        }));
      }
      if (howFrequentState === "") {
        setError((prev) => ({
          ...prev,
          frequent: true,
        }));
      }
      if (amount !== "" && howFrequentState !== "") {
        setIsBankModalOpen(true);
      }
    }

    if (type === "debit_card") {
      if (amount === "") {
        setError((prev) => ({
          ...prev,
          amount: true,
        }));
      }
      if (howFrequentState === "") {
        setError((prev) => ({
          ...prev,
          frequent: true,
        }));
      }
      if (amount !== "" && howFrequentState !== "") {
        setIsCardModalOpen(true);
      }
    }
  };

  return (
    <>
      <div className="w-full flex justify-end">
        <img
          onClick={() => setIsPaymentModalOpen(false)}
          src={close}
          alt="correct"
          className="w-[40px] h-[40px] cursor-pointer"
        />
      </div>
      <div className="mt-6 w-[80%]">
        <Text variant="h3" color="text-[#000000]">
          How much do you want to fund your account with ?
        </Text>
      </div>
      <div className="w-[70%] mt-6">
        <Input
          handleChange={(e) => {
            setAmount(e.target.value);
            setError((prev) => ({
              ...prev,
              amount: false,
            }));
          }}
          placeholder="Enter Amount"
          type="text"
          name="amount"
        />
      </div>
      {error.amount && (
        <Text variant="body" weight="normal" color="text-red">
          please Enter Amount
        </Text>
      )}
      <div className="mt-6 w-[80%]">
        <Text variant="h3" color="text-[#000000]">
          How frequently do you want to top up your fund?
        </Text>
      </div>

      <div className="w-[70%] mt-6">
        <Select
          className="w-full bg-[#f2f2f2]"
          onChange={(e) => {
            setHowFrequentState(e.value);
            setError((prev) => ({
              ...prev,
              frequent: false,
            }));
          }}
          name="frequent"
          options={howFrequent}
          styles={colourStyles}
        />
      </div>
      {error.frequent && (
        <Text variant="body" weight="normal" color="text-red">
          please tell us how frequent
        </Text>
      )}
      <div className="mt-6 w-[80%]">
        <Text variant="h3" color="text-[#000000]">
          How would you like to make your payment
        </Text>
      </div>
      <div className="w-[90%] mt-6 flex gap-2">
        <div
          onClick={() => handlePaymentMethod("debit_card")}
          className="px-[6%] py-[3%] cursor-pointer flex flex-col justify-center items-center bg-[#EBEBEB]"
        >
          <img src={dbCard} alt="db_card" />
          <Text variant="small" color="text-[#000000]">
            Via Debit Card
          </Text>
        </div>
        <div
          onClick={() => handlePaymentMethod("pay_with_bank")}
          className="px-[6%] py-[3%] cursor-pointer flex flex-col justify-center items-center bg-[#EBEBEB]"
        >
          <img src={bankCard} alt="bank_card" />
          <Text variant="small" color="text-[#000000]">
            Pay with bank
          </Text>
        </div>
      </div>
    </>
  );
}
