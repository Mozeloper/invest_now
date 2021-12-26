import React, { useState } from "react";
import close from "../../../../assets/icons/close_btn.svg";
import Text from "../../../../components/Typography/Typography";
import Button from "../../../../components/Button";
import Input from "../../../../components/formFields/inputs";

export default function Withdrawal({ handleCloseModal }) {
  const [error, setError] = useState(false);
  const [amount, setAmount] = useState("");

  const handlePaymentMethod = () => {
    if (amount === "") {
      setError(true);
    }
    if (amount !== "") {
      console.log(amount);
    }
  };

  return (
    <div className="p-[4%]">
      <div className="flex justify-end mb-3">
        <img
          className="cursor-pointer h-[50px] w-[50px]"
          src={close}
          alt="close_btn"
          onClick={() => handleCloseModal("withdrawal")}
        />
      </div>
      <Text variant="h2" weight="bold">
        How much do you want to withdraw?
      </Text>

      <div className="w-[80%] mt-6">
        <Input
          handleChange={(e) => {
            setAmount(e.target.value);
            setError(false);
          }}
          placeholder="Enter Amount"
          type="text"
          name="amount"
        />
      </div>
      {error && (
        <Text variant="body" weight="normal" color="text-red">
          Please Enter Amount
        </Text>
      )}
      <div className="bg-[#FFEFEF] p-[4%] mt-6 flex flex-col gap-5">
        <Text variant="body" weight="normal">
          Destination account details:
        </Text>
        <div className="flex flex-col gap-2">
          <Text variant="h3" weight="bold">
            Paul Akilapa
          </Text>
          <Text variant="h3" weight="bold">
            008967567, UBA
          </Text>
        </div>
      </div>
      <div className="mt-6 w-[50%]">
        <Button
          title="Proceed"
          className="h-fit px-16 py-6 whitespace-nowrap font-extrabold"
          type="button"
          textColor="#fff"
          onClick={() => handlePaymentMethod()}
        />
      </div>
    </div>
  );
}
