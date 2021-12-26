import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import close from "../../../../../assets/icons/close_btn.svg";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/formFields/inputs";
import Text from "../../../../../components/Typography/Typography";
import { handlePaymentFrequency, handlePortfolioItem } from "../../../../../store/slices/openAccountSlice";

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
  const dispatch = useDispatch();
  const openAccountReducer = useSelector((state) => state.openAccountReducer);
  const cashAccountId = openAccountReducer?.createAccountData?.data?.data?.cash_account_id;
  const [error, setError] = useState({
    amount: false,
    frequent: false,
  });

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handlePortfolioItem(cashAccountId));
        dispatch(handlePaymentFrequency());
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch, cashAccountId]);

  const howFrequent = [];

  if (openAccountReducer?.paymentFrequencyData?.type === "openaccount/paymentFrequency/fulfilled") {
    openAccountReducer?.paymentFrequencyData?.payload?.data?.data.map((list) => {
      return howFrequent.push({
        label: list.name,
        value: list.name,
      });
    });
  }

  const handlePaymentMethod = () => {
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
          isLoading={openAccountReducer?.paymentFrequencyIsLoading}
        />
      </div>
      {error.frequent && (
        <Text variant="body" weight="normal" color="text-red">
          please tell us how frequent
        </Text>
      )}

      <div className="mt-10 w-full flex justify-center">
        <div className="w-[70%]">
          <Button
            title="Continue"
            className="cursor-pointer"
            type="button"
            onClick={() => handlePaymentMethod()}
            isLoading={false}
          />
        </div>
      </div>
    </>
  );
}
